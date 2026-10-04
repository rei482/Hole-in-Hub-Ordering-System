import { Link } from 'react-router-dom'
import { ArrowRight, Trophy, ShieldCheck, Users, Sparkles } from 'lucide-react'
import LocationCard from '../components/LocationCard'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { language } = useLanguage()

  const isKo = language === 'ko'

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden bg-espresso-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600&h=900&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-espresso-900/75" />
        </div>
        <div className="relative h-full container-luxury flex items-center justify-center text-center">
          <div>
            <p className="text-subheading text-[#E65100] mb-4 tracking-[0.2em] font-semibold">
              {isKo ? '홀인허브 브랜드 스토리' : 'The Hole in Hub Story'}
            </p>
            <h1 className="text-display text-cream-50">
              {isKo ? '골프 문화를 새롭게 정의하다' : 'Redefining Golf Culture'}
            </h1>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="container-luxury max-w-3xl mx-auto text-center">
          <p className="text-subheading text-[#E65100] mb-4">
            {isKo ? '우리의 철학' : 'Our Philosophy'}
          </p>
          <h2 className="text-heading text-espresso-900 mb-8">
            {isKo
              ? '그린 위의 정밀함, 클럽하우스의 품격'
              : 'Precision on the Green, Style in the Clubhouse'}
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6 text-base">
            {isKo
              ? '홀인허브(Hole in Hub)는 타협 없는 장인정신과 현대적 스트리트웨어의 감성을 결합하여 프리미엄 골프 라이프스타일과 파크골프 문화를 선도하기 위해 탄생했습니다. 우리는 기존 골프 브랜드들의 획일화된 패턴에서 벗어나 새로운 기준을 제시합니다.'
              : 'Hole in Hub was founded with a singular ambition: to elevate golf lifestyle and park golf culture through uncompromising craftsmanship and contemporary streetwear sensibilities. We observed traditional golf brands stuck in repetitive patterns — stiff fabrics, dated cuts, and uninspired colorways.'}
          </p>
          <p className="text-stone-600 leading-relaxed text-base">
            {isKo
              ? '우리는 골프 본연의 매너를 존중하며 320GSM 고중량 브러시드 플리스, 부드러운 AAA 카브레타 가죽, 정밀 CNC 황동 골프 액세서리를 선보입니다. 파크골프 그린에서 퍼팅할 때도, 19번 홀 라운지에서 휴식을 취할 때도 홀인허브는 플레이어의 모든 순간과 함께합니다.'
              : 'We build drops that honor the timeless etiquette of the links while introducing heavyweight brushed fleeces, buttery AAA Cabretta leather, and CNC-milled solid brass course accessories. Whether you are sinking a park golf putt or lounging at the 19th hole, Hole in Hub is made for your game.'}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white border-t border-b border-stone-200">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="text-subheading text-[#E65100] mb-3">
              {isKo ? '품질 기준' : 'Our Standards'}
            </p>
            <h2 className="text-heading text-espresso-900">
              {isKo ? '타협 없는 제작 원칙' : 'Built Without Compromise'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-[#FAF7F2] border border-stone-200">
              <Trophy size={28} className="text-[#E65100] mb-4" />
              <h3 className="font-luxury text-xl text-espresso-900 mb-2">
                {isKo ? '투어 퍼포먼스' : 'Tour Performance'}
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                {isKo
                  ? '4방향 스트레치, UPF 50+ 자외선 차단, 통기성 메쉬 원사로 스윙의 자유로움을 극대화합니다.'
                  : '4-way stretch, UPF 50+ sun protection, and moisture-wicking weaves crafted for free-flowing swings.'}
              </p>
            </div>
            <div className="p-6 bg-[#FAF7F2] border border-stone-200">
              <Sparkles size={28} className="text-[#E65100] mb-4" />
              <h3 className="font-luxury text-xl text-espresso-900 mb-2">
                {isKo ? '아티장 디테일' : 'Artisanal Details'}
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                {isKo
                  ? '헤비웨이트 YKK 황동 지퍼와 세월이 지나도 변함없는 고밀도 자수 크레스트 마감.'
                  : 'From heavyweight YKK brass hardware to custom high-density crest embroidery that withstands decades.'}
              </p>
            </div>
            <div className="p-6 bg-[#FAF7F2] border border-stone-200">
              <Users size={28} className="text-[#E65100] mb-4" />
              <h3 className="font-luxury text-xl text-espresso-900 mb-2">
                {isKo ? '파크골프 선구자' : 'Park Golf Pioneers'}
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                {isKo
                  ? '남녀노소 누구나 즐길 수 있는 세련되고 접근성 높은 파크골프 커뮤니티 문화를 만듭니다.'
                  : 'Leading the community movement for accessible, social, and stylish park golf throughout the region.'}
              </p>
            </div>
            <div className="p-6 bg-[#FAF7F2] border border-stone-200">
              <ShieldCheck size={28} className="text-[#E65100] mb-4" />
              <h3 className="font-luxury text-xl text-espresso-900 mb-2">
                {isKo ? '완벽한 핏 보장' : 'Guaranteed Fit'}
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                {isKo
                  ? '모든 골프 장갑과 의류는 14일 무료 사이즈 교환 정책을 통해 안심하고 구매하실 수 있습니다.'
                  : 'Every glove, cap, and layer is backed by our direct 14-day exchange program for uninterrupted play.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Golf Lounge & Merch Pickup Location */}
      <LocationCard />

      {/* CTA */}
      <section className="py-20 bg-espresso-900 text-cream-50 text-center">
        <div className="container-luxury max-w-2xl mx-auto">
          <h2 className="font-luxury text-3xl lg:text-4xl text-cream-50 mb-4">
            {isKo ? '그린 위에 스타일을 더하세요' : 'Step onto the Links in Style'}
          </h2>
          <p className="text-cream-300 text-sm mb-8">
            {isKo
              ? '홀인허브의 시즌 컬렉션을 둘러보고 코스 위 완벽한 스타일을 완성하세요.'
              : 'Explore our curated seasonal drops and upgrade your course essentials today.'}
          </p>
          <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
            {isKo ? '골프 컬렉션 쇼핑하기' : 'Shop All Golf Drops'}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
