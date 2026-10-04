import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ArrowRight, Check } from 'lucide-react'
import type { Product } from '../data/products'
import { useLanguage } from '../context/LanguageContext'

interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product) => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false)
  const { language, t } = useLanguage()

  const displayName = language === 'ko' && product.nameKo ? product.nameKo : product.name
  const displaySpecs = language === 'ko' && product.specsKo ? product.specsKo : product.specs
  const displayBadge = language === 'ko' && product.badgeKo ? product.badgeKo : product.badge
  const displayCategory = language === 'ko' && product.categoryLabelKo ? product.categoryLabelKo : (product.categoryLabel || product.category.toUpperCase())

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsAdded(true)
    if (onAddToCart) {
      onAddToCart(product)
    }
    setTimeout(() => {
      setIsAdded(false)
    }, 1800)
  }

  return (
    <div className="bg-[#FAF7F2] border border-stone-200/80 overflow-hidden group flex flex-col transition-all duration-300 hover:shadow-lg hover:border-stone-300">
      {/* Image Container with Badge and Hover Action */}
      <Link to={`/shop/${product.id}`} className="relative block aspect-[4/3] bg-stone-100 overflow-hidden">
        {/* Badge - Top Left */}
        {displayBadge && (
          <div className="absolute top-3 left-3 z-10 bg-[#E65100] text-white text-[11px] font-bold tracking-[0.08em] uppercase px-2.5 py-1">
            {displayBadge}
          </div>
        )}

        {/* Product Image */}
        <img
          src={product.image}
          alt={displayName}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80'
          }}
        />

        {/* Centered Arrow Button on Hover */}
        <div className="absolute inset-0 bg-espresso-900/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full border border-white/80 bg-espresso-900/40 backdrop-blur-xs flex items-center justify-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-md">
            <ArrowRight size={18} strokeWidth={1.75} />
          </div>
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-5 lg:p-6 flex flex-col flex-1 bg-[#FAF7F2]">
        {/* Category & Rating Row */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium truncate">
            {displayCategory}
          </span>
          <div className="flex items-center gap-1 shrink-0 text-xs font-semibold text-stone-700">
            <Star size={13} className="fill-[#E65100] text-[#E65100]" />
            <span>
              {product.rating.toFixed(1)} <span className="font-normal text-stone-400">({product.reviews})</span>
            </span>
          </div>
        </div>

        {/* Product Title */}
        <Link
          to={`/shop/${product.id}`}
          className="font-luxury text-xl lg:text-2xl text-espresso-900 mb-2 leading-snug hover:text-hermes-600 transition-colors"
        >
          {displayName}
        </Link>

        {/* Specs / Features bullet line */}
        <p className="text-xs text-stone-500 font-normal leading-relaxed mb-6 line-clamp-2">
          {displaySpecs}
        </p>

        {/* Bottom Row: Price & Add to Bag */}
        <div className="mt-auto pt-4 border-t border-stone-200/60 flex items-center justify-between gap-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg lg:text-xl font-bold text-espresso-900">
              ₱{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-stone-400 line-through">
                ₱{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            className={`h-11 px-5 text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
              isAdded
                ? 'bg-emerald-700 text-white'
                : 'bg-[#181512] hover:bg-black text-white'
            }`}
          >
            {isAdded ? (
              <>
                <Check size={15} /> {t('btn.added')}
              </>
            ) : (
              <>
                <span>{t('btn.add_to_bag')}</span>
                <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
