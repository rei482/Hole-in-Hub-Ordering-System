export interface Product {
  id: string
  name: string
  nameKo?: string
  price: number
  originalPrice?: number
  category: string
  categoryLabel: string
  categoryLabelKo?: string
  image: string
  rating: number
  reviews: number
  badge?: string
  badgeKo?: string
  specs: string
  specsKo?: string
  description: string
  descriptionKo?: string
  sizes?: string[]
  tags?: string[]
  isBestseller?: boolean
  isNew?: boolean
  featured?: boolean
}

export interface CartItem {
  product: Product
  quantity: number
  size?: string
  customizations?: string[]
}

export interface Category {
  id: string
  name: string
  nameKo?: string
  icon: string
  description: string
  descriptionKo?: string
  productCount: number
}

export const categories: Category[] = [
  {
    id: 'polos',
    name: 'Polos',
    nameKo: '골프 폴로',
    icon: '⛳',
    description: 'Performance & clubhouse tour polos',
    descriptionKo: '투어 퍼포먼스 및 클럽하우스 폴로',
    productCount: 16,
  },
  {
    id: 'headwear',
    name: 'Headwear',
    nameKo: '헤드웨어',
    icon: '🧢',
    description: 'Technical caps, visors & bucket hats',
    descriptionKo: '기능성 캡, 바이저 및 버킷햇',
    productCount: 12,
  },
  {
    id: 'accessories',
    name: 'Accessories',
    nameKo: '골프 용품',
    icon: '🏌️',
    description: 'Cabretta gloves, ball markers & bags',
    descriptionKo: '카브레타 가죽 장갑, 볼마커 및 캐디백',
    productCount: 24,
  },
  {
    id: 'lounge',
    name: 'Lounge Apparel',
    nameKo: '라운지 웨어',
    icon: '🧥',
    description: 'Quarter-zips, hoodies & fleece layers',
    descriptionKo: '쿼터집, 후디 및 헤비 플리스 레이어',
    productCount: 14,
  },
]

export const products: Product[] = [
  {
    id: 'hub-lounge-quarter-zip',
    name: 'Hub Lounge Quarter-Zip',
    nameKo: '허브 라운지 쿼터집',
    price: 3800,
    originalPrice: 4200,
    category: 'lounge',
    categoryLabel: 'LOUNGE APPAREL',
    categoryLabelKo: '라운지 웨어',
    badge: 'PREMIUM',
    badgeKo: '프리미엄',
    specs: '320GSM Fleece • YKK Zip • Embroidered Crest',
    specsKo: '320GSM 헤비 플리스 • YKK 황동 지퍼 • 자수 크레스트',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop',
    rating: 5.0,
    reviews: 77,
    description: 'Engineered for twilight rounds and clubhouse relaxation. Built from heavyweight 320GSM brushed fleece with a custom antique brass YKK zipper and the signature Hole in Hub embroidered crest on the left chest.',
    descriptionKo: '선선한 저녁 라운딩과 클럽하우스 휴식을 위해 제작되었습니다. 320GSM 고중량 브러시드 플리스와 엔틱 황동 YKK 지퍼, 왼쪽 가슴의 시그니처 홀인허브 자수 크레스트가 특징입니다.',
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['Premium Drop', 'Fleece', 'Heavyweight'],
    isBestseller: true,
    featured: true,
  },
  {
    id: 'golf-glove-pro-grip',
    name: 'Golf Glove Pro-Grip',
    nameKo: '프로 그립 골프 장갑',
    price: 650,
    category: 'accessories',
    categoryLabel: 'GOLF ACCESSORIES',
    categoryLabelKo: '골프 액세서리',
    badge: 'RATED #1',
    badgeKo: '1위 추천',
    specs: 'Cabretta Leather • Perforated Airflow • Left & Right',
    specsKo: '최고급 카브레타 가죽 • 에어홀 통기성 • 좌/우 선택',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=800&fit=crop',
    rating: 4.9,
    reviews: 311,
    description: 'Ultra-soft AAA premium Cabretta leather offers maximum tactile feel, moisture resistance, and exceptional grip in all weather conditions. Precision laser perforations keep your hands cool through all 18 holes.',
    descriptionKo: '초극세 AAA 등급 천연 카브레타 가죽으로 최고의 그립감과 우수한 내수성을 선사합니다. 정밀 레이저 통기홀이 18홀 내내 쾌적한 착용감을 유지해 줍니다.',
    sizes: ['S', 'M', 'ML', 'L', 'XL'],
    tags: ['Cabretta Leather', 'Pro Tour', 'Bestseller'],
    isBestseller: true,
    featured: true,
  },
  {
    id: 'park-golf-starter-pack',
    name: 'Park Golf Starter Pack',
    nameKo: '파크골프 스타터 팩',
    price: 2500,
    category: 'accessories',
    categoryLabel: 'GOLF ACCESSORIES',
    categoryLabelKo: '골프 액세서리',
    badge: 'EXCLUSIVE',
    badgeKo: '단독 출시',
    specs: '3 Park Golf Balls • Tee Pouch • Enamel Pin',
    specsKo: '공인 파크골프공 3구 • 왁스 캔버스 파우치 • 황동 핀',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&h=800&fit=crop',
    rating: 5.0,
    reviews: 88,
    description: 'The definitive set for park golf enthusiasts and weekend linksmen. Includes three tournament-grade high-visibility balls, a water-resistant waxed canvas tee pouch, and a collectible Hole in Hub brass enamel lapel pin.',
    descriptionKo: '파크골프 동호인과 주말 골퍼를 위한 완벽한 스타터 세트. 토너먼트 규격 고시인성 공 3구, 방수 왁스 캔버스 티 파우치, 홀인허브 한정판 황동 에나멜 핀이 포함되어 있습니다.',
    sizes: ['Standard Kit'],
    tags: ['Exclusive', 'Starter Kit', 'Park Golf'],
    isBestseller: true,
    featured: true,
  },
  {
    id: 'tour-performance-polo',
    name: 'Hub Classic Tour Polo',
    nameKo: '허브 클래식 투어 폴로',
    price: 2450,
    originalPrice: 2800,
    category: 'polos',
    categoryLabel: 'POLOS',
    categoryLabelKo: '골프 폴로',
    badge: 'BESTSELLER',
    badgeKo: '베스트셀러',
    specs: '4-Way Stretch • UPF 50+ UV Guard • Anti-Odor',
    specsKo: '4방향 신축성 • 자외선 차단 UPF 50+ • 항균 방취',
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&h=800&fit=crop',
    rating: 4.9,
    reviews: 142,
    description: 'Tailored for optimal swing rotation without bunching. Featuring a technical poly-spandex blend that actively wicks moisture and shields against high-altitude UV rays during daytime play.',
    descriptionKo: '스윙 시 걸림 없는 완벽한 테일러드 핏. 수분을 빠르게 흡수 배출하는 기능성 폴리-스판덱스 소재로 강렬한 햇살 아래에서도 쾌적한 라운드를 보장합니다.',
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['Tour Polo', 'UPF 50+', 'Moisture Wicking'],
    isBestseller: true,
    featured: true,
  },
  {
    id: 'signature-clubhouse-cap',
    name: 'Signature Clubhouse Cap',
    nameKo: '시그니처 클럽하우스 캡',
    price: 1200,
    category: 'headwear',
    categoryLabel: 'HEADWEAR',
    categoryLabelKo: '헤드웨어',
    badge: 'NEW DROP',
    badgeKo: '신제품',
    specs: '100% Washed Twill • Brass Clasp • Low Crown',
    specsKo: '100% 워싱 코튼 트윌 • 황동 조절 버클 • 로우 크라운',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=800&fit=crop',
    rating: 4.8,
    reviews: 95,
    description: 'An essential relaxed profile hat constructed from pigment-dyed washed cotton twill. Features our tonal hole-and-flag embroidery with an adjustable brass slider strap.',
    descriptionKo: '피그먼트 염색 워싱 코튼 트윌로 완성한 편안한 실루엣의 캡. 톤온톤 플래그 자수와 앤틱 황동 스트랩 버클이 고급스러움을 더합니다.',
    sizes: ['One Size Fits All'],
    tags: ['Headwear', 'New Drop', 'Cotton Twill'],
    isNew: true,
    featured: true,
  },
  {
    id: 'fairway-waterproof-bucket',
    name: 'Fairway Weatherproof Bucket',
    nameKo: '페어웨이 방수 버킷햇',
    price: 1650,
    category: 'headwear',
    categoryLabel: 'HEADWEAR',
    categoryLabelKo: '헤드웨어',
    badge: 'WEATHERPROOF',
    badgeKo: '방수 기능',
    specs: 'Water-Repellent Ripstop • Breathable Mesh • Chin Cord',
    specsKo: '발수 립스탑 소재 • 메쉬 통기 안감 • 조절용 턱끈',
    image: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=800&h=800&fit=crop',
    rating: 4.9,
    reviews: 64,
    description: 'Designed for unexpected morning showers and intense fairway sun. Wide brim provides 360-degree coverage with a detachable reflective chin cord and moisture-wicking internal headband.',
    descriptionKo: '갑작스러운 비와 강한 페어웨이 햇빛을 모두 차단하는 전천후 버킷햇. 탈부착 가능한 스트링과 땀 흡수 밴드로 안정적인 착용감을 제공합니다.',
    sizes: ['S/M', 'L/XL'],
    tags: ['Rain Guard', 'Bucket Hat', 'Waterproof'],
    isNew: true,
  },
  {
    id: 'heritage-tour-stand-bag',
    name: 'Heritage Stand Bag',
    nameKo: '헤리티지 스탠드 백',
    price: 14500,
    category: 'accessories',
    categoryLabel: 'GOLF ACCESSORIES',
    categoryLabelKo: '골프 액세서리',
    badge: 'LIMITED',
    badgeKo: '한정 수량',
    specs: 'Full-Grain Leather Trim • 5-Way Divider • Carbon Legs',
    specsKo: '천연 풀그레인 가죽 트림 • 5분할 디바이더 • 카본 스탠드 다리',
    image: 'https://images.unsplash.com/photo-1592919505780-303950717480?w=800&h=800&fit=crop',
    rating: 5.0,
    reviews: 34,
    description: 'Crafted with premium water-resistant matte nylon and vegetable-tanned full-grain leather accents. Features ultra-lightweight carbon fiber stand legs, an insulated beverage pocket, and velour-lined valuables pouch.',
    descriptionKo: '매트 방수 나일론과 베지터블 천연 가죽의 조화. 초경량 카본 파이버 스탠드 레그와 보냉 포켓, 귀중품용 벨루어 안감 포켓이 설계되어 있습니다.',
    sizes: ['Standard 5-Way'],
    tags: ['Leather', 'Limited', 'Stand Bag'],
    isNew: true,
  },
  {
    id: 'milled-brass-divot-tool',
    name: 'Brass Divot Tool & Marker Set',
    nameKo: '황동 디봇 툴 & 마커 세트',
    price: 850,
    category: 'accessories',
    categoryLabel: 'GOLF ACCESSORIES',
    categoryLabelKo: '골프 액세서리',
    badge: 'ESSENTIAL',
    badgeKo: '필수 아이템',
    specs: 'CNC Milled Solid Brass • Magnetic Marker • Custom Tin',
    specsKo: 'CNC 정밀 가공 솔리드 황동 • 마그네틱 코인 볼마커 • 틴 케이스',
    image: 'https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 120,
    description: 'Solid billet brass CNC milled to ergonomic perfection. Features a dual-prong green repair tool and a heavy magnetic coin ball marker stamped with the Hole in Hub crest.',
    descriptionKo: '통 황동 블록을 정밀 가공하여 제작한 디봇 툴과 홀인허브 크레스트가 음각된 묵직한 마그네틱 코인 볼마커 세트입니다.',
    sizes: ['Pocket Size'],
    tags: ['Solid Brass', 'Marker', 'Gift Box'],
    isBestseller: true,
  },
  {
    id: 'aeroknit-striped-polo',
    name: 'AeroKnit Striped Polo',
    nameKo: '에어로니트 스트라이프 폴로',
    price: 2650,
    category: 'polos',
    categoryLabel: 'POLOS',
    categoryLabelKo: '골프 폴로',
    badge: 'PREMIUM',
    badgeKo: '프리미엄',
    specs: 'Jacquard Knit Mesh • Moisture Wicking • Tailored Fit',
    specsKo: '자카드 니트 메쉬 • 쾌적한 땀 배출 • 슬림 테일러드 핏',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop',
    rating: 4.8,
    reviews: 58,
    description: 'Vintage collegiate striping meets cutting-edge micro-mesh knit. Breathable, odor-resistant, and cut with a modern tapered silhouette that stays tucked into trousers through full swings.',
    descriptionKo: '빈티지한 스트라이프 패턴과 기능성 마이크로 메쉬 니트의 만남. 우수한 통기성과 방취 기능, 바지 밖으로 빠져나오지 않는 최적의 기장감을 자랑합니다.',
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['AeroKnit', 'Vintage Stripe', 'Tour Fit'],
    isNew: true,
    featured: true,
  },
]

export const cartItems: CartItem[] = [
  {
    product: products[0],
    quantity: 1,
    size: 'L',
    customizations: ['Navy', 'Size L', 'Quarter-Zip Fleece'],
  },
  {
    product: products[1],
    quantity: 2,
    size: 'ML',
    customizations: ['Left Hand', 'Size ML', 'White / Cabretta'],
  },
]
