import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  Wallet,
  ClipboardList,
  Truck,
  Check,
  ChevronRight,
} from 'lucide-react'
import { cartItems, categories } from '../data/products'

const steps = [
  { id: 1, name: 'Delivery Information', icon: MapPin },
  { id: 2, name: 'Shipping & Payment', icon: Wallet },
  { id: 3, name: 'Order Summary', icon: ClipboardList },
  { id: 4, name: 'Track Order', icon: Truck },
]

export default function Checkout() {
  const [currentStep, setCurrentStep] = useState(1)

  const subtotal = cartItems.reduce(
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
          <Link to="/shop" className="hover:text-espresso-900 transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-espresso-900">Checkout</span>
        </nav>
      </div>

      <div className="container-luxury pb-16 lg:pb-24">
        <h1 className="text-heading text-espresso-900 mb-10">Checkout</h1>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-3xl">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => setCurrentStep(step.id)}
                  className="flex items-center gap-2 group"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep > step.id
                        ? 'bg-hermes-500 text-white'
                        : currentStep === step.id
                        ? 'bg-espresso-900 text-cream-50'
                        : 'bg-stone-200 text-stone-400'
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check size={14} />
                    ) : (
                      <span className="text-xs font-medium">{step.id}</span>
                    )}
                  </div>
                  <span
                    className={`hidden md:block text-xs tracking-[0.08em] uppercase font-medium transition-colors ${
                      currentStep >= step.id
                        ? 'text-espresso-900'
                        : 'text-stone-400'
                    }`}
                  >
                    {step.name}
                  </span>
                </button>
                {idx < steps.length - 1 && (
                  <div
                    className={`hidden md:block w-12 lg:w-20 h-[1px] mx-3 transition-colors ${
                      currentStep > step.id ? 'bg-hermes-500' : 'bg-stone-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Delivery Information */}
            {currentStep === 1 && (
              <div className="animate-fade-in-up">
                <h2 className="font-luxury text-2xl text-espresso-900 mb-6">
                  Delivery Information
                </h2>

                <div className="bg-white border border-stone-200 p-6 lg:p-8 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-subheading text-stone-600 block mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Juan Dela"
                        className="input-bordered"
                      />
                    </div>
                    <div>
                      <label className="text-subheading text-stone-600 block mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Cruz"
                        className="input-bordered"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-subheading text-stone-600 block mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="juan@email.com"
                        className="input-bordered"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-subheading text-stone-600 block mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        defaultValue="+63 912 345 6789"
                        className="input-bordered"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-subheading text-stone-600 block mb-2">
                        Street Address
                      </label>
                      <input
                        type="text"
                        defaultValue="123 Ayala Avenue"
                        className="input-bordered"
                      />
                    </div>
                    <div>
                      <label className="text-subheading text-stone-600 block mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        defaultValue="Makati City"
                        className="input-bordered"
                      />
                    </div>
                    <div>
                      <label className="text-subheading text-stone-600 block mb-2">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        defaultValue="1200"
                        className="input-bordered"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <button className="text-xs tracking-[0.12em] uppercase font-medium text-hermes-500 hover:text-hermes-600 transition-colors">
                      + Change Address
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentStep(2)}
                  className="btn-primary"
                >
                  Continue to Shipping
                  <ChevronRight size={16} />
                </button>
              </div>
            )}

            {/* Step 2: Shipping & Payment */}
            {currentStep === 2 && (
              <div className="animate-fade-in-up">
                <h2 className="font-luxury text-2xl text-espresso-900 mb-6">
                  Shipping & Payment
                </h2>

                {/* Shipping Method */}
                <div className="bg-white border border-stone-200 p-6 lg:p-8 mb-6">
                  <h3 className="text-subheading text-espresso-900 mb-4">
                    Shipping Method
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-4 p-4 border border-espresso-900 cursor-pointer">
                      <input
                        type="radio"
                        name="shipping"
                        defaultChecked
                        className="accent-espresso-900"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-espresso-900">
                          Standard Delivery
                        </p>
                        <p className="text-xs text-stone-400">
                          2-3 business days
                        </p>
                      </div>
                      <span className="text-sm font-medium text-espresso-900">
                        {shipping === 0 ? 'Free' : `₱${shipping.toFixed(2)}`}
                      </span>
                    </label>
                    <label className="flex items-center gap-4 p-4 border border-stone-200 cursor-pointer hover:border-stone-400 transition-colors">
                      <input
                        type="radio"
                        name="shipping"
                        className="accent-espresso-900"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-espresso-900">
                          Express Delivery
                        </p>
                        <p className="text-xs text-stone-400">
                          Same day (within Metro Manila)
                        </p>
                      </div>
                      <span className="text-sm font-medium text-espresso-900">
                        ₱150.00
                      </span>
                    </label>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white border border-stone-200 p-6 lg:p-8 mb-6">
                  <h3 className="text-subheading text-espresso-900 mb-4">
                    Payment Method
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-4 p-4 border border-espresso-900 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        defaultChecked
                        className="accent-espresso-900"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-espresso-900">
                          GCash
                        </p>
                        <p className="text-xs text-stone-400">
                          Pay via GCash e-wallet
                        </p>
                      </div>
                    </label>
                    <label className="flex items-center gap-4 p-4 border border-stone-200 cursor-pointer hover:border-stone-400 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        className="accent-espresso-900"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-espresso-900">
                          Maya
                        </p>
                        <p className="text-xs text-stone-400">
                          Pay via Maya digital wallet
                        </p>
                      </div>
                    </label>
                    <label className="flex items-center gap-4 p-4 border border-stone-200 cursor-pointer hover:border-stone-400 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        className="accent-espresso-900"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-espresso-900">
                          Cash on Delivery
                        </p>
                        <p className="text-xs text-stone-400">
                          Pay when you receive your order
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="btn-secondary"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="btn-primary"
                  >
                    Review Order
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Order Summary */}
            {currentStep === 3 && (
              <div className="animate-fade-in-up">
                <h2 className="font-luxury text-2xl text-espresso-900 mb-6">
                  Order Summary
                </h2>

                <div className="bg-white border border-stone-200 p-6 lg:p-8 mb-6">
                  {/* Delivery Address */}
                  <div className="mb-6 pb-6 border-b border-stone-200">
                    <h3 className="text-subheading text-stone-500 mb-2">
                      Deliver To
                    </h3>
                    <p className="text-sm text-espresso-900 font-medium">
                      Juan Dela Cruz
                    </p>
                    <p className="text-sm text-stone-500">
                      123 Ayala Avenue, Makati City 1200
                    </p>
                    <p className="text-sm text-stone-500">+63 912 345 6789</p>
                  </div>

                  {/* Items */}
                  <div className="space-y-4">
                    {cartItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 items-center"
                      >
                        <div className="w-16 h-16 bg-stone-100 overflow-hidden shrink-0">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-espresso-900">
                            {item.product.name}
                          </p>
                          <p className="text-xs text-stone-400">
                            Qty: {item.quantity}
                            {item.size ? ` · ${item.size}` : ''}
                          </p>
                        </div>
                        <span className="text-sm font-medium text-espresso-900">
                          ₱{(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="btn-secondary"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(4)}
                    className="btn-accent"
                  >
                    Place Order
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Order Confirmation */}
            {currentStep === 4 && (
              <div className="animate-fade-in-up text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-hermes-500/10 flex items-center justify-center">
                  <Check size={32} className="text-hermes-500" />
                </div>
                <h2 className="font-luxury text-3xl text-espresso-900 mb-3">
                  Order Placed Successfully
                </h2>
                <p className="text-stone-500 text-sm mb-2">
                  Thank you for your order! Your order number is
                </p>
                <p className="text-lg font-medium text-hermes-500 mb-6 tracking-wider">
                  #HIH-2026-00847
                </p>
                <p className="text-stone-400 text-sm mb-8 max-w-md mx-auto">
                  You will receive an email confirmation shortly with your order
                  details and tracking information.
                </p>

                <div className="bg-white border border-stone-200 p-6 max-w-md mx-auto mb-8">
                  <h3 className="text-subheading text-espresso-900 mb-4">
                    Estimated Delivery
                  </h3>
                  <div className="flex items-center gap-3 justify-center">
                    <Truck size={18} className="text-hermes-500" />
                    <span className="text-sm text-espresso-900 font-medium">
                      October 6-7, 2026
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <Link to="/shop" className="btn-secondary">
                    Continue Shopping
                  </Link>
                  <Link to="/profile" className="btn-primary">
                    View My Orders
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          {currentStep < 4 && (
            <div className="lg:col-span-1">
              <div className="bg-white border border-stone-200 p-6 lg:p-8 sticky top-[140px]">
                <h2 className="text-subheading text-espresso-900 mb-6">
                  Your Order
                </h2>

                <div className="space-y-3 mb-6">
                  {cartItems.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-stone-500">
                        {item.product.name} × {item.quantity}
                      </span>
                      <span className="text-espresso-900">
                        ₱{(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="divider-luxury mb-4" />

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">Subtotal</span>
                    <span className="text-espresso-900">
                      ₱{subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">Shipping</span>
                    <span className="text-espresso-900">
                      {shipping === 0 ? 'Free' : `₱${shipping.toFixed(2)}`}
                    </span>
                  </div>
                </div>

                <div className="divider-luxury mb-4" />

                <div className="flex justify-between">
                  <span className="text-subheading text-espresso-900">Total</span>
                  <span className="text-xl font-medium text-espresso-900">
                    ₱{total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
