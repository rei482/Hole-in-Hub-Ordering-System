import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, X, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react'
import { cartItems as initialCartItems, categories } from '../data/products'
import type { CartItem } from '../data/products'

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>(initialCartItems)

  const updateQuantity = (index: number, delta: number) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index))
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )
  const shipping = subtotal >= 500 ? 0 : 80
  const total = subtotal + shipping

  return (
    <div>
      {/* Breadcrumb */}
      <div className="container-luxury py-4">
        <nav className="flex items-center gap-2 text-xs text-stone-400">
          <Link to="/" className="hover:text-espresso-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-espresso-900">Cart</span>
        </nav>
      </div>

      <div className="container-luxury pb-16 lg:pb-24">
        <h1 className="text-heading text-espresso-900 mb-2">Shopping Cart</h1>
        <p className="text-stone-400 text-sm mb-10">
          {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
        </p>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {/* Table Header - Desktop */}
              <div className="hidden lg:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 pb-4 border-b border-stone-200">
                <span className="text-subheading text-stone-500">Your Items</span>
                <span className="text-subheading text-stone-500 text-center">
                  Unit Price
                </span>
                <span className="text-subheading text-stone-500 text-center">
                  Quantity
                </span>
                <span className="text-subheading text-stone-500 text-right">
                  Total Price
                </span>
                <span className="w-8" />
              </div>

              {/* Cart Items */}
              <div className="divide-y divide-stone-200">
                {items.map((item, index) => (
                  <div
                    key={`${item.product.id}-${index}`}
                    className="py-6 grid grid-cols-[auto_1fr] lg:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center animate-fade-in"
                  >
                    {/* Product */}
                    <div className="flex gap-4 col-span-2 lg:col-span-1">
                      <Link
                        to={`/shop/${item.product.id}`}
                        className="w-20 h-20 lg:w-24 lg:h-24 shrink-0 bg-stone-100 overflow-hidden"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80'
                          }}
                        />
                      </Link>
                      <div className="flex flex-col justify-center">
                        <p className="text-[10px] tracking-[0.12em] uppercase text-stone-400 mb-0.5">
                          {categories.find((c) => c.id === item.product.category)?.name}
                        </p>
                        <Link
                          to={`/shop/${item.product.id}`}
                          className="font-luxury text-lg text-espresso-900 hover:text-hermes-500 transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        {item.customizations && (
                          <p className="text-xs text-stone-400 mt-0.5">
                            {item.customizations.join(' · ')}
                          </p>
                        )}
                        {item.size && (
                          <p className="text-xs text-stone-400">Size: {item.size}</p>
                        )}
                      </div>
                    </div>

                    {/* Unit Price */}
                    <div className="hidden lg:flex justify-center">
                      <span className="text-sm text-espresso-900">
                        ₱{item.product.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex justify-start lg:justify-center col-start-2 lg:col-start-auto">
                      <div className="h-11 border border-stone-300 bg-white flex items-center justify-between px-2 w-28 shrink-0">
                        <button
                          onClick={() => updateQuantity(index, -1)}
                          className="w-7 h-full flex items-center justify-center text-lg text-stone-600 hover:text-black transition-colors cursor-pointer"
                          aria-label="Decrease"
                        >
                          -
                        </button>
                        <span className="text-sm font-semibold text-espresso-900 select-none">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(index, 1)}
                          className="w-7 h-full flex items-center justify-center text-lg text-stone-600 hover:text-black transition-colors cursor-pointer"
                          aria-label="Increase"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="hidden lg:flex justify-end">
                      <span className="font-medium text-espresso-900">
                        ₱{(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    {/* Remove */}
                    <div className="hidden lg:flex justify-center">
                      <button
                        onClick={() => removeItem(index)}
                        className="text-stone-400 hover:text-hermes-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <X size={16} />
                      </button>
                    </div>

                    {/* Mobile price + remove */}
                    <div className="flex items-center justify-between col-span-2 lg:hidden">
                      <span className="font-medium text-espresso-900">
                        ₱{(item.product.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(index)}
                        className="flex items-center gap-1 text-xs text-stone-400 hover:text-hermes-500 transition-colors"
                      >
                        <Trash2 size={12} />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <div className="mt-6 pt-6 border-t border-stone-200">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase font-medium text-stone-500 hover:text-espresso-900 transition-colors"
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-stone-200 p-6 lg:p-8 sticky top-[140px]">
                <h2 className="text-subheading text-espresso-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-stone-500">Subtotal</span>
                    <span className="text-espresso-900">₱{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-stone-500">Estimated Shipping</span>
                    <span className="text-espresso-900">
                      {shipping === 0 ? 'Free' : `₱${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-[10px] text-hermes-500 tracking-wide">
                      ✓ You qualify for free shipping
                    </p>
                  )}
                </div>

                <div className="divider-luxury mb-4" />

                <div className="flex items-center justify-between mb-8">
                  <span className="text-subheading text-espresso-900">
                    Total ({items.reduce((s, i) => s + i.quantity, 0)} items)
                  </span>
                  <span className="text-xl font-medium text-espresso-900">
                    ₱{total.toFixed(2)}
                  </span>
                </div>

                <Link
                  to="/checkout"
                  className="h-14 bg-[#181512] hover:bg-black text-white text-sm font-semibold tracking-wider uppercase w-full flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  Proceed to Checkout
                  <ArrowRight size={16} />
                </Link>

                <p className="text-[10px] text-stone-400 text-center mt-4 leading-relaxed">
                  Taxes and shipping calculated at checkout.
                  <br />
                  Free delivery for orders over ₱500.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Empty Cart */
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-stone-100 flex items-center justify-center">
              <ShoppingBag size={32} className="text-stone-400" />
            </div>
            <h2 className="font-luxury text-2xl text-espresso-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-stone-400 text-sm mb-8">
              Discover our curated selection of premium products.
            </p>
            <Link to="/shop" className="btn-primary">
              Start Shopping
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
