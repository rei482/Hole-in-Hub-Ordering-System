import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Star,
  Minus,
  Plus,
  ShoppingBag,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Truck,
  Shield,
  RotateCcw,
  Check,
} from 'lucide-react'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import { useLanguage } from '../context/LanguageContext'

export default function ProductDetail() {
  const { id } = useParams()
  const { language, t } = useLanguage()
  const product = products.find((p) => p.id === id) || products[0]
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'M')
  const [quantity, setQuantity] = useState(1)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  const galleryImages = [
    product.image,
    'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80',
  ]

  const categoryName = categories.find((c) => c.id === product.category)?.name || product.categoryLabel

  const handleAddToCart = () => {
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

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
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-espresso-900 transition-colors"
          >
            {categoryName}
          </Link>
          <span>/</span>
          <span className="text-espresso-900 font-medium">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="container-luxury pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left - Images */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square bg-[#FAF7F2] border border-stone-200 overflow-hidden mb-4">
              <img
                src={galleryImages[activeImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80'
                }}
              />

              {/* Orange Badge matching screenshot */}
              {product.badge && (
                <div className="absolute top-4 left-4 bg-[#E65100] text-white text-xs font-bold tracking-[0.1em] uppercase px-3 py-1.5 shadow-md">
                  {product.badge}
                </div>
              )}

              {/* Image navigation */}
              <button
                onClick={() =>
                  setActiveImageIndex(
                    (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-xs flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() =>
                  setActiveImageIndex((prev) => (prev + 1) % galleryImages.length)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-xs flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-20 bg-stone-100 overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                    idx === activeImageIndex
                      ? 'border-espresso-900'
                      : 'border-transparent hover:border-stone-300'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80'
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Details */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-bold">
                {product.categoryLabel}
              </span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-700">
                <Star size={14} className="fill-[#E65100] text-[#E65100]" />
                <span>
                  {product.rating.toFixed(1)} ({product.reviews} verified reviews)
                </span>
              </div>
            </div>

            <h1 className="font-luxury text-3xl lg:text-4xl text-espresso-900 mb-2">
              {product.name}
            </h1>

            {/* Specs row */}
            <p className="text-xs text-stone-500 font-medium mb-4">
              {product.specs}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-espresso-900">
                ₱{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-stone-400 line-through">
                  ₱{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <div className="divider-luxury mb-6" />

            {/* Description */}
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs uppercase tracking-wider text-espresso-900 font-bold">
                    {language === 'ko' ? '사이즈 선택' : 'Select Size'}
                  </label>
                  <span className="text-xs text-stone-400">
                    {language === 'ko' ? '표준 아시안/US 투어 핏' : 'Standard Asian/US Athletic Fit'}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[54px] h-[48px] px-4 flex items-center justify-center text-xs tracking-wider uppercase font-bold border transition-all duration-200 cursor-pointer ${
                        selectedSize === size
                          ? 'bg-[#181512] text-white border-[#181512] shadow-xs'
                          : 'bg-white text-stone-800 border-stone-300 hover:border-stone-800'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* UNIFIED ROW: Quantity [- 1 +], Add to Bag, Buy Now (Matching User Screenshot) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
              {/* Quantity Stepper */}
              <div className="h-[54px] border border-stone-300 bg-white flex items-center justify-between px-3 w-full sm:w-[136px] shrink-0">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-full flex items-center justify-center text-xl text-stone-600 hover:text-black cursor-pointer font-normal select-none transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="text-base font-semibold text-espresso-900 select-none">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-full flex items-center justify-center text-xl text-stone-600 hover:text-black cursor-pointer font-normal select-none transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Add to Bag (Solid Black) */}
              <button
                onClick={handleAddToCart}
                className={`h-[54px] flex-1 text-sm font-semibold tracking-wide flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer shadow-xs ${
                  isAdded
                    ? 'bg-emerald-700 text-white'
                    : 'bg-[#181512] hover:bg-black text-white'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check size={18} /> {language === 'ko' ? '담기 완료' : 'Added to Bag'}
                  </>
                ) : (
                  <>
                    <span>{language === 'ko' ? '장바구니 담기' : 'Add to Bag'}</span>
                    <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </>
                )}
              </button>

              {/* Buy Now (Outlined) */}
              <Link
                to="/checkout"
                className="h-[54px] px-8 border border-stone-800 bg-[#FAF7F2] hover:bg-[#181512] hover:text-white text-espresso-900 text-sm font-semibold tracking-wide flex items-center justify-center transition-all duration-200 shrink-0 text-center"
              >
                {language === 'ko' ? '바로 구매' : 'Buy Now'}
              </Link>
            </div>

            <div className="flex items-center gap-4 mb-6 text-xs text-stone-500">
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="flex items-center gap-1.5 hover:text-espresso-900 transition-colors cursor-pointer font-medium"
              >
                <Heart
                  size={15}
                  className={isWishlisted ? 'fill-[#E65100] text-[#E65100]' : ''}
                />
                {isWishlisted ? 'Saved in Locker' : 'Save to Locker'}
              </button>
              <span>•</span>
              <button className="flex items-center gap-1.5 hover:text-espresso-900 transition-colors cursor-pointer font-medium">
                <Share2 size={15} />
                Share Drop
              </button>
            </div>

            {/* Delivery & Course Guarantee */}
            <div className="bg-[#FAF7F2] border border-stone-200 p-4 space-y-3">
              <div className="flex items-start gap-3">
                <Truck size={16} className="text-[#E65100] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-espresso-900 uppercase tracking-wider">Fast Courier Delivery</p>
                  <p className="text-xs text-stone-500">2-3 Days Metro Manila • 3-5 Days Provincial / Golf Resorts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield size={16} className="text-[#E65100] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-espresso-900 uppercase tracking-wider">Tour Authentic Guarantee</p>
                  <p className="text-xs text-stone-500">100% genuine AAA Cabretta leather & custom milled golf hardware</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw size={16} className="text-[#E65100] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-espresso-900 uppercase tracking-wider">Seamless Fit Exchange</p>
                  <p className="text-xs text-stone-500">Complimentary glove and apparel size exchanges within 14 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Drops */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 border-t border-stone-200 pt-12">
            <h2 className="font-luxury text-2xl lg:text-3xl text-espresso-900 mb-8">
              Complete Your Kit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
