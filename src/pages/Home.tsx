import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, RefreshCw, Sparkles, Compass } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import LocationCard from '../components/LocationCard'
import { useLanguage } from '../context/LanguageContext'

const heroSlidesEn = [
  {
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600&h=900&fit=crop',
    tagline: 'HOLE IN HUB GOLF',
    title: 'Modern Golf Culture.\nTimeless Craft.',
    subtitle: 'From pristine park golf greens to the clubhouse lounge. Engineered for the modern player.',
  },
  {
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600&h=900&fit=crop',
    tagline: 'SUMMER DROP 2026',
    title: 'The Park Golf\nEssential Drop',
    subtitle: 'Cabretta gloves, brass divot tools & custom tournament equipment.',
  },
  {
    image: 'https://images.unsplash.com/photo-1592919505780-303950717480?w=1600&h=900&fit=crop',
    tagline: 'CLUBHOUSE APPAREL',
    title: 'Tailored Comfort\nOn & Off The Links',
    subtitle: 'Heavyweight fleece quarter-zips and 4-way stretch tour polos.',
  },
]

const heroSlidesKo = [
  {
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600&h=900&fit=crop',
    tagline: 'HOLE IN HUB GOLF',
    title: '모던 골프 컬처.\n시대를 초월한 장인정신.',
    subtitle: '드넓은 파크골프 그린에서 클럽하우스 라운지까지. 현대 골퍼를 위해 설계되었습니다.',
  },
  {
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600&h=900&fit=crop',
    tagline: '2026 썸머 드롭',
    title: '파크골프\n에센셜 컬렉션',
    subtitle: '천연 카브레타 장갑, 정밀 황동 디봇 툴 및 공인 토너먼트 장비.',
  },
  {
    image: 'https://images.unsplash.com/photo-1592919505780-303950717480?w=1600&h=900&fit=crop',
    tagline: '클럽하우스 어패럴',
    title: '코스 위와 일상에서의\n완벽한 편안함',
    subtitle: '320GSM 고중량 플리스 쿼터집과 4방향 스트레치 투어 폴로.',
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeTab, setActiveTab] = useState('all')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const { language, t } = useLanguage()

  const heroSlides = language === 'ko' ? heroSlidesKo : heroSlidesEn

  const tabs = [
    { id: 'all', label: t('tab.all') },
    { id: 'polos', label: t('tab.polos') },
    { id: 'headwear', label: t('tab.headwear') },
    { id: 'accessories', label: t('tab.accessories') },
    { id: 'lounge', label: t('tab.lounge') },
  ]

  const filteredProducts =
    activeTab === 'all'
      ? products
      : products.filter((p) => p.category === activeTab)

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 7000)
    return () => clearInterval(timer)
  }, [currentSlide])

  const nextSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      setIsTransitioning(false)
    }, 300)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <div>
      {/* ========== HERO SECTION ========== */}
      <section className="relative h-[70vh] lg:h-[82vh] overflow-hidden bg-espresso-900">
        {/* Background Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-espresso-900/85 via-espresso-900/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full container-luxury flex items-center">
          <div
            className={`max-w-xl transition-all duration-700 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <p className="text-subheading text-[#E65100] mb-3 tracking-[0.2em] font-semibold">
              {heroSlides[currentSlide].tagline}
            </p>
            <h1 className="text-display text-cream-50 mb-5 whitespace-pre-line">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-base lg:text-lg text-cream-200 font-light mb-8 tracking-wide leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex items-center gap-4">
              <Link to="/shop" className="btn-primary">
                {t('hero.explore')}
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="btn-secondary text-cream-50 border-cream-200 hover:bg-cream-50 hover:text-espresso-900"
              >
                {t('hero.story')}
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container-luxury flex items-center justify-between">
            <div className="flex items-center gap-3">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all duration-400 ${
                    idx === currentSlide
                      ? 'w-8 h-1 bg-[#E65100]'
                      : 'w-4 h-1 bg-cream-50/40 hover:bg-cream-50/70'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center border border-cream-50/30 text-cream-50 hover:bg-cream-50 hover:text-espresso-900 transition-all duration-300 cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center border border-cream-50/30 text-cream-50 hover:bg-cream-50 hover:text-espresso-900 transition-all duration-300 cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BRAND INTRO ========== */}
      <section className="py-14 lg:py-20 bg-cream-50 border-b border-stone-200">
        <div className="container-luxury text-center max-w-3xl mx-auto">
          <p className="text-subheading text-[#E65100] mb-3">{t('intro.badge')}</p>
          <h2 className="text-heading text-espresso-900 mb-5">
            {t('intro.title')}
          </h2>
          <p className="text-stone-600 text-sm lg:text-base leading-relaxed">
            {t('intro.desc')}
          </p>
        </div>
      </section>

      {/* ========== DROPS & CATALOG SECTION WITH TABS ========== */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="container-luxury">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-subheading text-[#E65100] mb-2">{t('section.curated')}</p>
              <h2 className="text-heading text-espresso-900">{t('section.featured')}</h2>
            </div>
            <Link
              to="/shop"
              className="flex items-center gap-2 text-xs tracking-[0.14em] uppercase font-semibold text-espresso-900 hover:text-[#E65100] transition-colors"
            >
              {t('btn.view_all')} <ArrowRight size={14} />
            </Link>
          </div>

          {/* TAB BAR (Matches user screenshot) */}
          <div className="flex items-center overflow-x-auto border-b border-stone-300 pb-px mb-10 no-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
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

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* CLUBHOUSE DINING & GRABFOOD BANNER */}
          <div className="bg-[#FAF7F2] border border-stone-200 p-8 lg:p-12 relative overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#00B14F] text-white text-[10px] font-bold tracking-[0.14em] uppercase px-2.5 py-1">
                    GrabFood Delivery
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    {language === 'ko' ? '홀인허브 클럽하우스 F&B' : 'Clubhouse Kitchen & Cafe'}
                  </span>
                </div>
                <h3 className="font-luxury text-2xl lg:text-3xl text-espresso-900 mb-3">
                  {language === 'ko'
                    ? '스페셜티 커피 & 식음료 주문은 GrabFood로!'
                    : 'Craft Coffee, Bites & Dining on GrabFood'}
                </h3>
                <p className="text-stone-600 text-xs lg:text-sm leading-relaxed mb-6">
                  {language === 'ko'
                    ? '신선한 벵게트 싱글오리진 에스프레소, 세레모니얼 말차 라떼, 갓 구운 크루아상, 호주산 와규 버거를 GrabFood로 지금 바로 주문하세요.'
                    : 'Looking for course refreshments? Single-origin espressos, ceremonial matcha, French butter croissants, and wagyu sliders are dispatched fresh via Grab.'}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/dining"
                    className="h-12 px-6 bg-[#181512] hover:bg-black text-white text-xs font-bold tracking-[0.12em] uppercase flex items-center gap-2 transition-all shadow-xs cursor-pointer"
                  >
                    <span>{language === 'ko' ? '식음료 메뉴 둘러보기' : 'View F&B Menu'}</span>
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href="https://food.grab.com/ph/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 px-6 bg-[#00B14F] hover:bg-[#009643] text-white text-xs font-bold tracking-[0.12em] uppercase flex items-center gap-2 transition-all shadow-md cursor-pointer"
                  >
                    <span>{language === 'ko' ? 'GrabFood에서 주문' : 'Order on GrabFood'}</span>
                    <span className="text-sm font-semibold">↗</span>
                  </a>
                </div>
              </div>

              <div className="relative aspect-[16/9] lg:aspect-[4/3] overflow-hidden border border-stone-200 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
                  alt="Clubhouse Cafe & Dining"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PARK GOLF HIGHLIGHT BANNER ========== */}
      <section className="py-20 bg-espresso-900 text-cream-50 relative overflow-hidden">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#E65100] text-white text-[11px] font-bold tracking-[0.12em] uppercase px-3 py-1 mb-4">
                {t('movement.badge')}
              </span>
              <h2 className="font-luxury text-3xl lg:text-5xl text-cream-50 mb-6 leading-tight">
                {t('movement.title')}
              </h2>
              <p className="text-cream-300 text-sm lg:text-base leading-relaxed mb-8">
                {t('movement.desc')}
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-espresso-700 pt-6">
                <div>
                  <p className="text-2xl lg:text-3xl font-luxury text-cream-50">320GSM</p>
                  <p className="text-xs text-cream-400 uppercase tracking-wider">{t('movement.fleece')}</p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-luxury text-cream-50">AAA Grade</p>
                  <p className="text-xs text-cream-400 uppercase tracking-wider">{t('movement.leather')}</p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-luxury text-cream-50">100%</p>
                  <p className="text-xs text-cream-400 uppercase tracking-wider">{t('movement.ready')}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-xs border border-espresso-700 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=900&h=700&fit=crop"
                  alt="Park golf ball on the green"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VALUE PROPOSITIONS ========== */}
      <section className="py-16 bg-white border-t border-b border-stone-200">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center text-[#E65100] mb-4">
                <Sparkles size={22} />
              </div>
              <h3 className="font-luxury text-lg text-espresso-900 mb-2">{t('value.tour_title')}</h3>
              <p className="text-xs text-stone-500">{t('value.tour_desc')}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center text-[#E65100] mb-4">
                <ShieldCheck size={22} />
              </div>
              <h3 className="font-luxury text-lg text-espresso-900 mb-2">{t('value.craft_title')}</h3>
              <p className="text-xs text-stone-500">{t('value.craft_desc')}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center text-[#E65100] mb-4">
                <RefreshCw size={22} />
              </div>
              <h3 className="font-luxury text-lg text-espresso-900 mb-2">{t('value.exchange_title')}</h3>
              <p className="text-xs text-stone-500">{t('value.exchange_desc')}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center text-[#E65100] mb-4">
                <Compass size={22} />
              </div>
              <h3 className="font-luxury text-lg text-espresso-900 mb-2">{t('value.shipping_title')}</h3>
              <p className="text-xs text-stone-500">{t('value.shipping_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GOLF LOUNGE & MERCH PICKUP LOCATION ========== */}
      <LocationCard />
    </div>
  )
}
