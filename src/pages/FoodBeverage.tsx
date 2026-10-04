import { useState, useEffect, useRef } from 'react'
import { ExternalLink, Coffee, Utensils, Sparkles, Check, ArrowRight, Clock, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import LocationCard from '../components/LocationCard'

interface MenuItem {
  id: string
  name: string
  nameKo: string
  category: 'coffee' | 'bakery' | 'meals' | 'refreshers'
  categoryLabel: string
  categoryLabelKo: string
  price: number
  description: string
  descriptionKo: string
  image: string
  badge?: string
  badgeKo?: string
  tags: string[]
  tagsKo: string[]
}

const menuItems: MenuItem[] = [
  {
    id: 'espresso-single-origin',
    name: 'Benguet Single-Origin Espresso',
    nameKo: '벵게트 싱글 오리진 에스프레소',
    category: 'coffee',
    categoryLabel: 'Specialty Coffee',
    categoryLabelKo: '스페셜티 커피',
    price: 180,
    description: 'High-altitude Cordillera Arabica with tasting notes of dark cocoa and roasted hazelnut. Pulled on our custom La Marzocco.',
    descriptionKo: '코르디예라 고지대 아라비카 원두의 깊은 다크 카카오와 고소한 헤이즐넛 풍미. 라마르조코 머신으로 정밀 추출합니다.',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&h=800&fit=crop',
    badge: 'SIGNATURE',
    badgeKo: '시그니처',
    tags: ['Single Origin', 'Hot / Iced'],
    tagsKo: ['싱글 오리진', '핫 / 아이스'],
  },
  {
    id: 'ceremonial-matcha-latte',
    name: 'Ceremonial Uji Matcha Latte',
    nameKo: '세레모니얼 우지 말차 라떼',
    category: 'coffee',
    categoryLabel: 'Specialty Tea & Latte',
    categoryLabelKo: '스페셜티 티 & 라떼',
    price: 220,
    description: 'First-harvest Uji ceremonial matcha whisked fresh with velvety steamed fresh milk or creamy oat milk.',
    descriptionKo: '일본 교토 우지산 1번물 세레모니얼 말차를 부드러운 우유 또는 프리미엄 오트밀크와 함께 즉석 격불합니다.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&h=800&fit=crop',
    badge: 'BESTSELLER',
    badgeKo: '베스트셀러',
    tags: ['Ceremonial Grade', 'Kyoto Matcha'],
    tagsKo: ['세레모니얼 등급', '교토 직수입'],
  },
  {
    id: 'signature-cold-brew',
    name: 'Fairway 20-Hour Cold Brew',
    nameKo: '페어웨이 20시간 콜드브루',
    category: 'coffee',
    categoryLabel: 'Specialty Coffee',
    categoryLabelKo: '스페셜티 커피',
    price: 195,
    description: 'Slow-steeped for 20 hours in chilled filtered water. Exceptionally crisp, smooth, and thirst-quenching after 18 holes.',
    descriptionKo: '20시간 동안 차갑게 침출하여 산뜻하고 깔끔한 맛. 18홀 라운드 및 파크골프 플레이 후 갈증 해소에 탁월합니다.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=800&fit=crop',
    badge: 'PRO PICK',
    badgeKo: '프로 추천',
    tags: ['Cold Steeped', 'Clean Finish'],
    tagsKo: ['저온 추출', '깔끔한 피니시'],
  },
  {
    id: 'spanish-iced-latte',
    name: 'Clubhouse Spanish Iced Latte',
    nameKo: '클럽하우스 스패니시 아이스 라떼',
    category: 'coffee',
    categoryLabel: 'Specialty Coffee',
    categoryLabelKo: '스페셜티 커피',
    price: 210,
    description: 'Double shot of Benguet espresso blended with sweetened milk and fresh dairy over ice. A smooth Manila golfer favorite.',
    descriptionKo: '벵게트 더블샷 에스프레소에 달콤한 연유와 신선한 우유가 완벽한 밸런스를 이루는 아이스 시그니처.',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&h=800&fit=crop',
    badge: 'POPULAR',
    badgeKo: '인기 메뉴',
    tags: ['Double Shot', 'Sweet & Velvety'],
    tagsKo: ['더블샷', '달콤 부드러움'],
  },
  {
    id: 'french-butter-croissant',
    name: 'French Butter Croissant',
    nameKo: '프렌치 버터 크루아상',
    category: 'bakery',
    categoryLabel: 'Artisan Bakery',
    categoryLabelKo: '아티산 베이커리',
    price: 150,
    description: 'Laminated with imported Isigny Sainte-Mère AOP butter. Shatteringly flaky exterior with a delicate honeycomb crumb.',
    descriptionKo: '프랑스산 최고급 이즈니 버터로 겹겹이 구워내 겉은 바삭하고 속은 촉촉한 벌집 결을 자랑하는 정통 크루아상.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    badge: 'DAILY BAKE',
    badgeKo: '당일 베이킹',
    tags: ['Isigny AOP Butter', 'Baked at 7 AM'],
    tagsKo: ['이즈니 AOP 버터', '아침 7시 베이킹'],
  },
  {
    id: 'dark-chocolate-pastry',
    name: 'Valrhona Dark Chocolate Brioche',
    nameKo: '발로나 다크 초콜릿 브리오슈',
    category: 'bakery',
    categoryLabel: 'Artisan Bakery',
    categoryLabelKo: '아티산 베이커리',
    price: 185,
    description: 'Folded with rich French Valrhona 70% dark chocolate batons inside golden, butter-rich brioche dough.',
    descriptionKo: '프랑스 명품 발로나 70% 다크 초콜릿 바통을 버터 풍미 가득한 브리오슈 반죽에 감싸 구워냈습니다.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&h=800&fit=crop',
    badge: 'CHEF CHOICE',
    badgeKo: '셰프 초이스',
    tags: ['Valrhona 70%', 'Artisan Pastry'],
    tagsKo: ['발로나 초콜릿', '수제 페이스트리'],
  },
  {
    id: 'wagyu-clubhouse-burger',
    name: 'Wagyu Clubhouse Slider & Truffle Fries',
    nameKo: '와규 클럽하우스 버거 & 트러플 감자튀김',
    category: 'meals',
    categoryLabel: 'Clubhouse Fare',
    categoryLabelKo: '클럽하우스 식사',
    price: 480,
    description: '100% Australian Wagyu beef patty, vintage cheddar, caramelized shallots, and black truffle aioli with crispy shoestring fries.',
    descriptionKo: '100% 호주산 와규 패티, 빈티지 체다치즈, 캐러멜 양파, 블랙 트러플 아이올리와 바삭한 감자튀김 세트.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=800&fit=crop',
    badge: 'WAGYU SPECIAL',
    badgeKo: '와규 스페셜',
    tags: ['100% Wagyu', 'Black Truffle'],
    tagsKo: ['호주산 와규', '블랙 트러플'],
  },
  {
    id: 'avocado-sourdough-tartine',
    name: 'Smashed Avocado & Poached Egg Tartine',
    nameKo: '아보카도 수란 사워도우 타르틴',
    category: 'meals',
    categoryLabel: 'Clubhouse Fare',
    categoryLabelKo: '클럽하우스 식사',
    price: 320,
    description: 'Ripe Hass avocado on artisan sourdough toast, organic poached egg, Greek feta, chili flakes, and cold-pressed extra virgin olive oil.',
    descriptionKo: '바삭하게 구운 사워도우 토스트 위에 생 하스 아보카도, 유기농 수란, 그릭 페타치즈, 엑스트라 버진 올리브유.',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&h=800&fit=crop',
    badge: 'HEALTHY',
    badgeKo: '웰빙 추천',
    tags: ['Organic Eggs', 'Fresh Avocado'],
    tagsKo: ['유기농 계란', '생아보카도'],
  },
  {
    id: 'bulgogi-beef-bowl',
    name: 'Korean Marinated Bulgogi Rice Bowl',
    nameKo: '소고기 불고기 덮밥 한상',
    category: 'meals',
    categoryLabel: 'Clubhouse Fare',
    categoryLabelKo: '클럽하우스 식사',
    price: 390,
    description: 'Tender ribeye strips marinated in sweet soy garlic reduction, served over warm Japanese rice, charred scallions, and toasted sesame.',
    descriptionKo: '특제 간장 양념에 숙성한 부드러운 소고기 불고기를 따뜻한 쌀밥과 구운 대파, 고소한 참깨와 함께 곁들인 든든한 한 끼.',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&h=800&fit=crop',
    badge: 'K-CLASSIC',
    badgeKo: 'K-클래식',
    tags: ['Ribeye Beef', 'Steamed Rice'],
    tagsKo: ['프리미엄 소고기', '따뜻한 쌀밥'],
  },
  {
    id: 'smoked-bbq-plate',
    name: 'Glazed Clubhouse Barbecue Plate',
    nameKo: '클럽하우스 수제 바비큐 플레이트',
    category: 'meals',
    categoryLabel: 'Clubhouse Fare',
    categoryLabelKo: '클럽하우스 식사',
    price: 460,
    description: 'Slow-smoked glazed pork ribs brushed with house bourbon barbecue sauce, served with grilled corn and crisp house slaw.',
    descriptionKo: '하우스 버번 바비큐 소스로 훈연한 부드러운 폭립에 구운 옥수수와 신선한 코울슬로를 곁들인 플레이트.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=800&fit=crop',
    badge: 'HOUSE SMOKED',
    badgeKo: '훈제 특선',
    tags: ['Slow Smoked', 'House Slaw'],
    tagsKo: ['저온 훈연', '수제 코울슬로'],
  },
  {
    id: 'calamansi-yuzu-cooler',
    name: 'Calamansi Yuzu Sparkling Refresher',
    nameKo: '깔라만시 유자 스파클링 쿨러',
    category: 'refreshers',
    categoryLabel: 'House Refreshers',
    categoryLabelKo: '하우스 리프레셔',
    price: 175,
    description: 'Fresh Philippine calamansi juice infused with Japanese yuzu honey, sparkling mineral water, and fresh garden mint leaves.',
    descriptionKo: '신선한 생 깔라만시 착즙액과 일본산 유자 꿀, 청량한 탄산수와 애플민트가 어우러진 시그니처 에이드.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&h=800&fit=crop',
    badge: 'SIGNATURE SODA',
    badgeKo: '시그니처 소다',
    tags: ['Sparkling', 'Real Calamansi'],
    tagsKo: ['스파클링', '생 깔라만시'],
  },
  {
    id: 'citrus-berry-fizz',
    name: 'Hibiscus Blood Orange Fizz',
    nameKo: '히비스커스 블러드 오렌지 피즈',
    category: 'refreshers',
    categoryLabel: 'House Refreshers',
    categoryLabelKo: '하우스 리프레셔',
    price: 190,
    description: 'Cold-steeped Egyptian hibiscus blossoms paired with Italian blood orange essence, rosemary sprig, and crushed ice.',
    descriptionKo: '이집트산 히비스커스 꽃차의 깊은 붉은 빛에 이탈리아산 블러드 오렌지와 로즈마리를 더한 무알콜 스파클러.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop',
    badge: 'REFRESHING',
    badgeKo: '갈증 해소',
    tags: ['Zero Alcohol', 'Botanical Brew'],
    tagsKo: ['무알콜', '보태니컬 티'],
  },
]

export default function FoodBeverage() {
  const { language } = useLanguage()
  const isKo = language === 'ko'
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [redirectingItem, setRedirectingItem] = useState<MenuItem | null>(null)
  const TOTAL_COUNTDOWN_SECONDS = 5
  const [countdown, setCountdown] = useState<number>(TOTAL_COUNTDOWN_SECONDS)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const GRAB_FOOD_URL = 'https://food.grab.com/ph/en/'

  const clearAllTimers = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const cancelRedirect = () => {
    clearAllTimers()
    setRedirectingItem(null)
  }

  const proceedImmediately = () => {
    clearAllTimers()
    window.open(GRAB_FOOD_URL, '_blank', 'noopener,noreferrer')
    setRedirectingItem(null)
  }

  const handleOrderGrab = (item?: MenuItem) => {
    clearAllTimers()
    const selected = item || menuItems[0]
    setRedirectingItem(selected)
    setCountdown(TOTAL_COUNTDOWN_SECONDS)

    let remaining = TOTAL_COUNTDOWN_SECONDS
    intervalRef.current = setInterval(() => {
      remaining -= 1
      setCountdown(remaining)
      if (remaining <= 0) {
        clearAllTimers()
        window.open(GRAB_FOOD_URL, '_blank', 'noopener,noreferrer')
        setRedirectingItem(null)
      }
    }, 1000)
  }

  useEffect(() => {
    return () => {
      clearAllTimers()
    }
  }, [])

  const filteredItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  const categories = [
    { id: 'all', label: isKo ? '전체 메뉴' : 'All Menu', count: menuItems.length },
    { id: 'coffee', label: isKo ? '스페셜티 커피' : 'Specialty Coffee', count: menuItems.filter((i) => i.category === 'coffee').length },
    { id: 'bakery', label: isKo ? '베이커리 & 디저트' : 'Bakery & Sweets', count: menuItems.filter((i) => i.category === 'bakery').length },
    { id: 'meals', label: isKo ? '클럽하우스 식사' : 'Clubhouse Meals', count: menuItems.filter((i) => i.category === 'meals').length },
    { id: 'refreshers', label: isKo ? '스파클링 쿨러' : 'Refreshers', count: menuItems.filter((i) => i.category === 'refreshers').length },
  ]

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* ========== CLUBHOUSE NOTICE BAR ========== */}
      <div className="bg-[#181512] text-cream-100 py-2.5 px-4 text-center border-b border-stone-800">
        <div className="container-luxury flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[11px] tracking-[0.14em] uppercase font-semibold text-stone-300">
          <span className="flex items-center gap-1.5 text-[#E65100]">
            <MapPin size={13} />
            <span>{isKo ? '3층 EK 빌딩 (홀리 스피릿 닥터)' : '3rd Floor, EK Building, 50 Holy Spirit Dr, QC'}</span>
          </span>
          <span className="hidden md:inline text-stone-600">•</span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} className="text-[#00B14F]" />
            <span>{isKo ? '매일 11:00 AM – 자정 영업' : 'Open Daily 11:00 AM – Midnight'}</span>
          </span>
          <span className="hidden md:inline text-stone-600">•</span>
          <span className="flex items-center gap-1.5 text-cream-200">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B14F]" />
            <span>{isKo ? 'GrabFood 배달 & 타석 다이닝 가능' : 'GrabFood Delivery & Bay-Side Dine-In'}</span>
          </span>
        </div>
      </div>

      {/* ========== HERO SECTION ========== */}
      <section className="relative h-[55vh] lg:h-[65vh] overflow-hidden bg-[#181512]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&h=900&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#181512] via-[#181512]/80 to-[#181512]/55" />
        </div>

        <div className="relative h-full container-luxury flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            {/* Hermès & Golf Inspired Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#FAF7F2]/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#00B14F]" />
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-cream-100">
                {isKo ? '공식 GrabFood 파트너 키친' : 'Official GrabFood Partner Kitchen'}
              </span>
            </div>

            <h1 className="font-luxury text-3xl sm:text-5xl lg:text-6xl text-cream-50 mb-4 leading-[1.15] tracking-tight">
              {isKo ? '클럽하우스 카페 & 키친' : 'The Clubhouse Kitchen & Cafe'}
            </h1>

            <p className="text-cream-200/90 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-8">
              {isKo
                ? '라마르조코로 추출한 벵게트 싱글 오리진 에스프레소, 매일 아침 구워내는 이즈니 버터 크루아상, 호주산 수제 와규 버거를 GrabFood 배달 또는 3층 골프 라운지에서 즐기세요.'
                : 'Artisanal single-origin brews, fresh morning Isigny pastries, and chef-crafted Wagyu burgers delivered to your door via GrabFood or served directly to your simulator bay.'}
            </p>

            {/* Hero Tactile Button Row (Matching reference sizes) */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => handleOrderGrab()}
                className="h-[52px] px-8 bg-[#00B14F] hover:bg-[#009241] text-white text-xs font-bold tracking-[0.14em] uppercase flex items-center justify-center gap-2.5 transition-all shadow-lg cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>{isKo ? 'GrabFood에서 전체 메뉴 주문' : 'Order Menu on GrabFood'}</span>
                <ExternalLink size={15} />
              </button>

              <a
                href="#menu-catalog"
                className="h-[52px] px-8 bg-[#FAF7F2] hover:bg-white text-espresso-900 text-xs font-bold tracking-[0.14em] uppercase flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer border border-stone-300"
              >
                <span>{isKo ? '메뉴 목록 둘러보기' : 'Browse Menu Catalog'}</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Quality Badges Row */}
            <div className="hidden sm:flex items-center justify-center gap-6 mt-8 text-[11px] text-cream-300/80 font-medium tracking-wider uppercase">
              <span className="flex items-center gap-1.5">
                <Coffee size={13} className="text-[#E65100]" />
                {isKo ? '라마르조코 싱글오리진' : 'La Marzocco Espresso'}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles size={13} className="text-[#E65100]" />
                {isKo ? '이즈니 AOP 버터 크루아상' : 'Isigny AOP Butter'}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Utensils size={13} className="text-[#E65100]" />
                {isKo ? '100% 호주산 와규 패티' : '100% Australian Wagyu'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GRABFOOD OFFICIAL PARTNER SPOTLIGHT CARD ========== */}
      <section className="py-8 lg:py-10 border-b border-stone-200/80 bg-[#FAF7F2]">
        <div className="container-luxury">
          <div className="bg-white border border-stone-200/90 p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 bg-[#00B14F]/10 border border-[#00B14F]/20 flex items-center justify-center text-[#00B14F] shrink-0 font-bold text-2xl shadow-xs">
                🛵
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="bg-[#00B14F] text-white text-[10px] font-bold tracking-[0.14em] uppercase px-2 py-0.5">
                    GrabFood
                  </span>
                  <span className="text-xs font-bold text-espresso-900 uppercase tracking-wider">
                    {isKo ? '공식 식음료 딜리버리 안내' : 'Official Delivery Fulfillment'}
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed max-w-2xl">
                  {isKo
                    ? '모든 따뜻한 식사, 수제 디저트, 에스프레소 음료는 GrabFood 공식 배달망을 통해 퀘존 시티 및 메트로 마닐라 전역으로 위생적이고 빠르게 배달됩니다. (3층 골프 라운지 매장 내 직접 주문 가능)'
                    : 'All freshly prepared meals, artisan bakery, and specialty drinks are dispatched exclusively via GrabFood throughout Quezon City and Metro Manila. Simulator bay-side dining also available at our 3rd floor lounge.'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => handleOrderGrab()}
                className="w-full lg:w-auto h-11 px-6 bg-[#00B14F] hover:bg-[#009643] text-white text-xs font-bold tracking-[0.12em] uppercase flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
              >
                <span>{isKo ? 'GrabFood 매장 열기' : 'Open in GrabFood'}</span>
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MENU CATALOG & CATEGORY TABS ========== */}
      <section id="menu-catalog" className="py-12 lg:py-16 bg-[#FAF7F2]">
        <div className="container-luxury">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-subheading text-[#E65100] mb-2">
              {isKo ? '클럽하우스 큐레이티드 메뉴' : 'Curated Clubhouse Menu'}
            </p>
            <h2 className="text-heading text-espresso-900 mb-3">
              {isKo ? '식음료 & 스페셜티 셀렉션' : 'Food & Drinks Collection'}
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              {isKo
                ? '원하시는 메뉴의 [Grab 주문] 버튼을 누르시면 GrabFood 스토어로 즉시 연결됩니다.'
                : 'Click "Order on Grab" on any item to be redirected to our verified GrabFood store.'}
            </p>
          </div>

          {/* TAB BAR (Matches exact styling of Home.tsx / Shop.tsx tabs) */}
          <div className="flex items-center justify-start lg:justify-center overflow-x-auto border-b border-stone-300 pb-px mb-12 no-scrollbar">
            {categories.map((tab) => {
              const isActive = activeCategory === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-6 py-3.5 text-xs tracking-[0.12em] uppercase font-bold transition-all duration-200 shrink-0 cursor-pointer border-t border-r border-l ${
                    isActive
                      ? 'bg-[#181512] text-white border-espresso-900 shadow-sm'
                      : 'bg-stone-100/70 text-stone-600 hover:text-espresso-900 hover:bg-stone-200/60 border-stone-200'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`ml-2 text-[10px] ${isActive ? 'text-stone-300' : 'text-stone-400'}`}>
                    ({tab.count})
                  </span>
                </button>
              )
            })}
          </div>

          {/* MENU GRID (Matching ProductCard.tsx layout & button proportions) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#FAF7F2] border border-stone-200/80 overflow-hidden group flex flex-col transition-all duration-300 hover:shadow-lg hover:border-stone-300"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                  {/* Category / Bestseller Badge */}
                  {item.badge && (
                    <div className="absolute top-3 left-3 z-10 bg-[#E65100] text-white text-[11px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 shadow-xs">
                      {isKo && item.badgeKo ? item.badgeKo : item.badge}
                    </div>
                  )}

                  {/* Food & Beverage Image */}
                  <img
                    src={item.image}
                    alt={isKo ? item.nameKo : item.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80'
                    }}
                  />

                  {/* Secondary Tag (Top Right) */}
                  <div className="absolute top-3 right-3 z-10 flex gap-1">
                    {(isKo ? item.tagsKo : item.tags).slice(0, 1).map((t, idx) => (
                      <span
                        key={idx}
                        className="bg-[#181512]/85 backdrop-blur-xs text-cream-50 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Hover Overlay with Grab Icon */}
                  <div
                    onClick={() => handleOrderGrab(item)}
                    className="absolute inset-0 bg-espresso-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <div className="h-10 px-4 bg-[#00B14F] text-white text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span>{isKo ? 'Grab 주문' : 'Order via Grab'}</span>
                      <ExternalLink size={14} />
                    </div>
                  </div>
                </div>

                {/* Card Content (Matching ProductCard.tsx style) */}
                <div className="p-5 lg:p-6 flex flex-col flex-1 bg-[#FAF7F2]">
                  {/* Category & Tags Row */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium truncate">
                      {isKo ? item.categoryLabelKo : item.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#00B14F]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00B14F]" />
                      <span>GrabFood</span>
                    </div>
                  </div>

                  {/* Item Title */}
                  <h3 className="font-luxury text-xl lg:text-2xl text-espresso-900 mb-2 leading-snug">
                    {isKo ? item.nameKo : item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-stone-500 font-normal leading-relaxed mb-6 line-clamp-2">
                    {isKo ? item.descriptionKo : item.description}
                  </p>

                  {/* Bottom Row: Price & Large Tactile Action Button */}
                  <div className="mt-auto pt-4 border-t border-stone-200/60 flex items-center justify-between gap-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg lg:text-xl font-bold text-espresso-900">
                        ₱{item.price.toLocaleString()}
                      </span>
                    </div>

                    {/* Button matching h-11 tactile style with Grab redirection */}
                    <button
                      onClick={() => handleOrderGrab(item)}
                      className="h-11 px-5 text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs bg-[#181512] hover:bg-[#00B14F] text-white"
                    >
                      <span>{isKo ? 'Grab 주문' : 'Order on Grab'}</span>
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CLUBHOUSE GOLF LOUNGE & DINE-IN VENUE ========== */}
      <section className="py-12 bg-cream-50 border-t border-stone-200">
        <div className="container-luxury">
          <div className="max-w-3xl mb-8">
            <p className="text-subheading text-[#E65100] mb-2">
              {isKo ? '오프라인 클럽하우스 라운지' : 'In-House Clubhouse Lounge'}
            </p>
            <h2 className="text-heading text-espresso-900 mb-3">
              {isKo ? '3층 골프 시뮬레이터 타석 다이닝' : 'Dine-In at 3rd Floor Simulator Bays'}
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              {isKo
                ? 'EK 빌딩 3층 홀인허브에서는 최첨단 골프 및 파크골프 시뮬레이터를 즐기시며 모든 식음료 메뉴를 타석으로 직접 서빙 받으실 수 있습니다.'
                : 'Visiting Hole in Hub for golf practice or park golf? Enjoy all food & drinks served directly to your private bay during your session.'}
            </p>
          </div>
        </div>
        <LocationCard />
      </section>

      {/* ========== GRABFOOD LUXURY CONCIERGE REDIRECTION MODAL ========== */}
      {redirectingItem && (
        <div className="fixed inset-0 z-50 bg-[#181512]/75 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-[#FAF7F2] max-w-md w-full p-7 lg:p-8 text-center shadow-2xl border border-stone-300 animate-scale-up">
            {/* GrabFood Emblem */}
            <div className="w-16 h-16 rounded-full bg-[#00B14F]/10 border border-[#00B14F]/20 flex items-center justify-center mx-auto mb-4 text-[#00B14F]">
              <ExternalLink size={26} />
            </div>

            <div className="inline-block bg-[#00B14F] text-white text-[10px] font-bold tracking-[0.14em] uppercase px-2.5 py-0.5 mb-2">
              GrabFood Merchant
            </div>

            <h3 className="font-luxury text-2xl text-espresso-900 mb-1">
              {isKo ? `GrabFood로 이동 중 (${countdown}초)` : `Opening GrabFood in ${countdown}s...`}
            </h3>

            {/* Item Preview Box */}
            <div className="bg-white border border-stone-200 p-3.5 my-4 flex items-center gap-3 text-left shadow-xs">
              <img
                src={redirectingItem.image}
                alt={redirectingItem.name}
                className="w-14 h-14 object-cover shrink-0 border border-stone-200"
              />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-espresso-900 truncate">
                  {isKo ? redirectingItem.nameKo : redirectingItem.name}
                </p>
                <p className="text-xs text-[#E65100] font-semibold mt-0.5">
                  ₱{redirectingItem.price.toLocaleString()}
                </p>
                <p className="text-[10px] text-stone-400 mt-0.5">
                  {isKo ? '홀인허브 퀘존점 직영 매장' : 'Hole in Hub Quezon City Store'}
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-500 leading-relaxed mb-4">
              {isKo
                ? 'GrabFood 공식 스토어로 안전하게 연결됩니다. 바로 주문하시려면 아래 버튼을 눌러주세요.'
                : 'Connecting you to the verified Hole in Hub store on GrabFood. Click below to open immediately or wait for auto-redirect.'}
            </p>

            {/* Live Countdown Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1.5 font-medium">
                <span>{isKo ? '자동 연결 대기 중' : 'Auto-redirecting'}</span>
                <span className="font-bold text-[#00B14F] bg-[#00B14F]/10 px-2 py-0.5 rounded-full">
                  {countdown}s
                </span>
              </div>
              <div className="w-full bg-stone-200 h-2 overflow-hidden rounded-full">
                <div
                  className="bg-[#00B14F] h-full transition-all duration-1000 ease-linear rounded-full"
                  style={{ width: `${Math.max(0, (countdown / TOTAL_COUNTDOWN_SECONDS) * 100)}%` }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2.5">
              <button
                onClick={proceedImmediately}
                className="h-12 w-full bg-[#00B14F] hover:bg-[#009241] text-white text-xs font-bold tracking-[0.12em] uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <span>{isKo ? '지금 바로 GrabFood 열기' : 'Proceed to GrabFood Now'}</span>
                <ExternalLink size={15} />
              </button>

              <button
                onClick={cancelRedirect}
                className="h-11 w-full border border-stone-300 hover:border-stone-400 bg-white text-stone-700 hover:text-espresso-900 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer shadow-2xs"
              >
                {isKo ? '취소 / 메뉴에 머무르기' : 'Cancel / Stay on Menu'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
