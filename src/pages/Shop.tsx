import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { useLanguage } from '../context/LanguageContext'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'all'
  const [sortBy, setSortBy] = useState('featured')
  const { t } = useLanguage()

  const tabs = [
    { id: 'all', label: t('tab.all') },
    { id: 'polos', label: t('tab.polos') },
    { id: 'headwear', label: t('tab.headwear') },
    { id: 'accessories', label: t('tab.accessories') },
    { id: 'lounge', label: t('tab.lounge') },
  ]

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  const handleTabClick = (categoryId: string) => {
    if (categoryId === 'all') {
      searchParams.delete('category')
      setSearchParams(searchParams)
    } else {
      setSearchParams({ category: categoryId })
    }
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="container-luxury py-4">
        <nav className="flex items-center gap-2 text-xs text-stone-400">
          <Link to="/" className="hover:text-espresso-900 transition-colors">
            {t('nav.home')}
          </Link>
          <span>/</span>
          <span className="text-espresso-900">{t('nav.shop')}</span>
          {activeCategory !== 'all' && (
            <>
              <span>/</span>
              <span className="text-[#E65100] capitalize font-medium">
                {tabs.find((t) => t.id === activeCategory)?.label || activeCategory}
              </span>
            </>
          )}
        </nav>
      </div>

      {/* Page Header */}
      <div className="container-luxury pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
          <div>
            <h1 className="text-heading text-espresso-900">
              {activeCategory === 'all'
                ? t('tab.all')
                : tabs.find((t) => t.id === activeCategory)?.label || 'Collection'}
            </h1>
            <p className="text-stone-500 text-sm mt-1">
              Showing {sortedProducts.length} items
            </p>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
              {t('section.sort_by')}
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-stone-300 text-xs px-3 py-2 text-espresso-900 font-medium outline-none focus:border-espresso-900 cursor-pointer"
            >
              <option value="featured">{t('section.sort_featured')}</option>
              <option value="price-low">{t('section.sort_low')}</option>
              <option value="price-high">{t('section.sort_high')}</option>
              <option value="rating">{t('section.sort_rating')}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tabs Row */}
      <div className="container-luxury pb-8">
        <div className="flex items-center overflow-x-auto border-b border-stone-300 pb-px mb-8 no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeCategory === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-6 py-3 text-xs tracking-[0.12em] uppercase font-bold transition-all duration-200 shrink-0 cursor-pointer border-t border-r border-l ${
                  isActive
                    ? 'bg-espresso-900 text-white border-espresso-900 shadow-sm'
                    : 'bg-stone-100/60 text-stone-600 hover:text-espresso-900 hover:bg-stone-200/60 border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Product Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-16">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white border border-stone-200 mb-16">
            <p className="font-luxury text-2xl text-espresso-900 mb-2">No drops found</p>
            <button
              onClick={() => handleTabClick('all')}
              className="btn-primary"
            >
              {t('btn.view_all')}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
