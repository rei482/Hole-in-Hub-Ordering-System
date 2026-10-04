export type Language = 'en' | 'ko'

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'HOME',
    'nav.shop': 'SHOP',
    'nav.dining': 'FOOD & DRINKS',
    'nav.about': 'ABOUT',
    'nav.search': 'Search',
    'nav.account': 'Account',
    'nav.cart': 'Cart',
    'nav.search_placeholder': 'Search for polos, quarter-zips, cabretta gloves, park golf sets...',

    // Food & Beverage / Grab
    'fnb.badge': 'Clubhouse Kitchen & Bar',
    'fnb.title': 'Food & Drinks Fulfilled via GrabFood',
    'fnb.desc': 'Handcrafted espresso, refreshing beverages, and gourmet clubhouse meals are prepared fresh and dispatched through GrabFood for ultra-fast delivery.',
    'fnb.btn': 'Order via GrabFood',
    'fnb.notice': 'You are being redirected to GrabFood to complete your order.',

    // Hero
    'hero.tagline': 'HOLE IN HUB GOLF',
    'hero.title': 'Modern Golf Culture.\nTimeless Craft.',
    'hero.subtitle': 'From pristine park golf greens to the clubhouse lounge. Engineered for the modern player.',
    'hero.explore': 'Explore Drops',
    'hero.story': 'Our Story',

    // Intro
    'intro.badge': 'Welcome to Hole in Hub',
    'intro.title': 'Golf Heritage Meets Modern Streetwear',
    'intro.desc': 'Hole in Hub bridges classic golf etiquette with contemporary luxury aesthetics. From tour-proven Cabretta leather gloves to bespoke park golf equipment and heavyweight clubhouse fleece, every release is designed for performance on the course and effortless style beyond it.',

    // Tabs
    'tab.all': 'All Drops',
    'tab.polos': 'Polos',
    'tab.headwear': 'Headwear',
    'tab.accessories': 'Accessories',
    'tab.lounge': 'Lounge Apparel',

    // Common UI
    'badge.premium': 'PREMIUM',
    'badge.rated1': 'RATED #1',
    'badge.exclusive': 'EXCLUSIVE',
    'badge.bestseller': 'BESTSELLER',
    'badge.newdrop': 'NEW DROP',
    'badge.weatherproof': 'WEATHERPROOF',
    'badge.limited': 'LIMITED',
    'badge.essential': 'ESSENTIAL',

    'btn.add_to_bag': 'Add to Bag',
    'btn.added': 'Added',
    'btn.buy_now': 'Buy Now',
    'btn.view_all': 'View Full Collection',
    'btn.checkout': 'Proceed to Checkout',
    'btn.save_locker': 'Save to Locker',
    'btn.saved_locker': 'Saved in Locker',

    // Product Section
    'section.curated': 'Curated Drops',
    'section.featured': 'Featured Releases',
    'section.sort_by': 'Sort by:',
    'section.sort_featured': 'Featured Drops',
    'section.sort_low': 'Price: Low to High',
    'section.sort_high': 'Price: High to Low',
    'section.sort_rating': 'Highest Rated',

    // Park golf movement
    'movement.badge': 'The Movement',
    'movement.title': 'Reimagining Park Golf for the Next Generation',
    'movement.desc': 'Originating in Japan and growing into a global lifestyle sport, Park Golf combines the precision and social joy of classic links with community greens. Hole in Hub is the first lifestyle house devoted to park golf culture, tournament balls, and custom gear in the Philippines.',
    'movement.fleece': 'Heavy Fleece',
    'movement.leather': 'Cabretta Leather',
    'movement.ready': 'Course Ready',

    // Value propositions
    'value.tour_title': 'Tour Grade Quality',
    'value.tour_desc': 'Precision materials tested by golf enthusiasts and club champions.',
    'value.craft_title': 'Authentic Craft',
    'value.craft_desc': 'Original embroidery, milled brass hardware, and premium leather.',
    'value.exchange_title': 'Hassle-Free Exchanges',
    'value.exchange_desc': 'Easy size exchanges within 14 days of delivery.',
    'value.shipping_title': 'Express Nationwide',
    'value.shipping_desc': 'Fast doorstep courier delivery across Metro Manila and provinces.',

    // Footer
    'footer.desc': 'Modern golf culture meets timeless craft. Your premier destination for tournament-grade Cabretta leather gloves, park golf equipment, and clubhouse apparel.',
    'footer.quick_links': 'Quick Links',
    'footer.customer_care': 'Customer Care',
    'footer.clubhouse': 'Clubhouse & Concierge',
    'footer.rights': 'All rights reserved. Modern Golf & Park Golf Lifestyle.',
    'footer.newsletter_title': 'Join the Clubhouse',
    'footer.newsletter_desc': 'Subscribe for secret drop access, park golf tournament invites, and private sales.',
    'footer.subscribe': 'Join',

    // Cart & Checkout
    'cart.title': 'Shopping Bag',
    'cart.items': 'Your Items',
    'cart.unit_price': 'Unit Price',
    'cart.quantity': 'Quantity',
    'cart.total_price': 'Total Price',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Estimated Shipping',
    'cart.free_shipping': 'Complimentary',
    'cart.total': 'Total',
    'checkout.step1': 'Delivery Information',
    'checkout.step2': 'Shipping & Payment',
    'checkout.step3': 'Order Summary',
    'checkout.step4': 'Track Order',
  },
  ko: {
    // Nav
    'nav.home': '홈',
    'nav.shop': '쇼핑',
    'nav.dining': '식음료 (Grab)',
    'nav.about': '브랜드 소개',
    'nav.search': '검색',
    'nav.account': '마이페이지',
    'nav.cart': '장바구니',
    'nav.search_placeholder': '골프 폴로, 쿼터집, 카브레타 장갑, 파크골프 세트 검색...',

    // Food & Beverage / Grab
    'fnb.badge': '클럽하우스 키친 & 카페',
    'fnb.title': 'GrabFood를 통한 식음료 주문',
    'fnb.desc': '바리스타 스페셜티 에스프레소, 말차, 수제 페이스트리 및 클럽 샌드위치는 GrabFood를 통해 신선하고 빠르게 배달됩니다.',
    'fnb.btn': 'GrabFood로 주문하기',
    'fnb.notice': '주문 완료를 위해 GrabFood 앱 또는 웹페이지로 연결됩니다.',

    // Hero
    'hero.tagline': '홀인허브 골프 (HOLE IN HUB)',
    'hero.title': '모던 골프 컬처.\n시대를 초월한 장인정신.',
    'hero.subtitle': '드넓은 파크골프 그린에서 클럽하우스 라운지까지. 현대 골퍼를 위해 설계되었습니다.',
    'hero.explore': '신제품 컬렉션',
    'hero.story': '브랜드 스토리',

    // Intro
    'intro.badge': '홀인허브에 오신 것을 환영합니다',
    'intro.title': '골프 헤리티지와 현대적 스트리트웨어의 만남',
    'intro.desc': '홀인허브는 클래식 골프 에티켓과 모던 럭셔리 감성을 잇습니다. 투어에서 입증된 천연 카브레타 가죽 장갑부터 프리미엄 파크골프 장비, 고중량 헤비 플리스까지 코스 위 최고의 퍼포먼스와 코스 밖 세련된 스타일을 완성합니다.',

    // Tabs
    'tab.all': '전체 드롭',
    'tab.polos': '골프 폴로',
    'tab.headwear': '헤드웨어',
    'tab.accessories': '골프 용품',
    'tab.lounge': '라운지 웨어',

    // Common UI
    'badge.premium': '프리미엄',
    'badge.rated1': '1위 추천',
    'badge.exclusive': '단독 출시',
    'badge.bestseller': '베스트셀러',
    'badge.newdrop': '신제품',
    'badge.weatherproof': '방수 기능',
    'badge.limited': '한정 수량',
    'badge.essential': '필수 아이템',

    'btn.add_to_bag': '장바구니 담기',
    'btn.added': '담기 완료',
    'btn.buy_now': '바로 구매',
    'btn.view_all': '전체 컬렉션 보기',
    'btn.checkout': '주문서 작성하기',
    'btn.save_locker': '락커룸 저장',
    'btn.saved_locker': '락커 보관됨',

    // Product Section
    'section.curated': '큐레이티드 드롭',
    'section.featured': '주목할 신제품',
    'section.sort_by': '정렬 기준:',
    'section.sort_featured': '추천순',
    'section.sort_low': '낮은 가격순',
    'section.sort_high': '높은 가격순',
    'section.sort_rating': '평점 높은순',

    // Park golf movement
    'movement.badge': '파크골프 무브먼트',
    'movement.title': '차세대를 위해 재해석된 파크골프',
    'movement.desc': '일본에서 시작되어 글로벌 라이프스타일 스포츠로 성장한 파크골프는 클래식 링크스의 정확도와 잔디 위의 즐거운 소셜 문화를 결합합니다. 홀인허브는 파크골프 문화, 토너먼트 공, 커스텀 기어를 선도합니다.',
    'movement.fleece': '헤비 플리스',
    'movement.leather': '카브레타 가죽',
    'movement.ready': '코스 준비 완료',

    // Value propositions
    'value.tour_title': '투어 등급 퀄리티',
    'value.tour_desc': '골프 매니아와 클럽 챔피언들의 정밀 테스트를 거친 최고급 원자재.',
    'value.craft_title': '오리지널 장인정신',
    'value.craft_desc': '고밀도 자수, CNC 정밀 가공 황동 하드웨어, 최고급 가죽.',
    'value.exchange_title': '간편한 무료 사이즈 교환',
    'value.exchange_desc': '배송 후 14일 이내 골프 장갑 및 의류 무상 사이즈 교환 지원.',
    'value.shipping_title': '안심 특송 배송',
    'value.shipping_desc': '수도권 당일/익일 출고 및 전국 골프 리조트 직배송.',

    // Footer
    'footer.desc': '모던 골프 컬처와 클래식 감성의 조화. 투어 등급 카브레타 가죽 장갑, 파크골프 장비, 클럽하우스 의류를 위한 프리미엄 온라인 스토어.',
    'footer.quick_links': '바로가기',
    'footer.customer_care': '고객 센터',
    'footer.clubhouse': '클럽하우스 컨시어지',
    'footer.rights': '판권 소유. 모던 골프 & 파크골프 라이프스타일.',
    'footer.newsletter_title': '클럽하우스 멤버십 가입',
    'footer.newsletter_desc': '시크릿 드롭 우선권, 파크골프 대회 초청 및 프라이빗 세일 소식을 받아보세요.',
    'footer.subscribe': '구독',

    // Cart & Checkout
    'cart.title': '장바구니',
    'cart.items': '담은 상품',
    'cart.unit_price': '단가',
    'cart.quantity': '수량',
    'cart.total_price': '합계 금액',
    'cart.subtotal': '소계',
    'cart.shipping': '예상 배송비',
    'cart.free_shipping': '무료 배송',
    'cart.total': '최종 결제 금액',
    'checkout.step1': '배송지 정보',
    'checkout.step2': '배송 및 결제수단',
    'checkout.step3': '주문 내역 확인',
    'checkout.step4': '실시간 배송 조회',
  },
}
