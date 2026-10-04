import { MapPin, Clock, Phone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function LocationCard() {
  const { language } = useLanguage()
  const isKo = language === 'ko'

  return (
    <div className="bg-[#FAF7F2] py-14 lg:py-20 border-t border-b border-stone-200/80">
      <div className="container-luxury max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Details */}
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.16em] font-semibold text-[#D85A2A] mb-2">
              {isKo ? '골프 라운지 & 머천다이즈 픽업' : 'Golf Lounge & Merch Pickup'}
            </p>
            <h2 className="font-luxury text-3xl lg:text-4xl text-espresso-900 mb-6 font-normal">
              {isKo ? 'EK 빌딩 3층' : 'Third floor, EK Building.'}
            </h2>

            <div className="border-t border-stone-200 divide-y divide-stone-200">
              {/* Address */}
              <div className="py-4">
                <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500">
                  <MapPin size={15} className="text-[#D85A2A]" strokeWidth={2} />
                  <span>{isKo ? '오시는 길' : 'Address'}</span>
                </div>
                <p className="text-sm text-stone-800 pl-6 leading-relaxed">
                  3rd Floor, EK Building, 50 Holy Spirit Dr, Quezon City, 1127 Metro Manila
                </p>
              </div>

              {/* Hours */}
              <div className="py-4">
                <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500">
                  <Clock size={15} className="text-[#D85A2A]" strokeWidth={2} />
                  <span>{isKo ? '영업 시간' : 'Hours'}</span>
                </div>
                <p className="text-sm text-stone-800 pl-6">
                  {isKo ? '연중무휴 — 오전 11:00 ~ 자정 12:00' : 'Open daily — 11:00 AM to midnight'}
                </p>
              </div>

              {/* Inquiries */}
              <div className="py-4">
                <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500">
                  <Phone size={15} className="text-[#D85A2A]" strokeWidth={2} />
                  <span>{isKo ? '문의 및 예약' : 'Inquiries'}</span>
                </div>
                <a
                  href="tel:09692654976"
                  className="text-sm text-stone-800 pl-6 hover:text-[#D85A2A] transition-colors block"
                >
                  0969 265 4976
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Showcase Box */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="bg-[#181512] text-cream-50 p-8 sm:p-10 w-full max-w-[440px] shadow-lg flex flex-col justify-between">
              <div>
                {/* Target Pin Icon */}
                <div className="w-10 h-10 flex items-center justify-center text-[#D85A2A] mb-6">
                  <svg className="w-8 h-8 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>

                {/* Serif text */}
                <p className="font-luxury text-xl sm:text-2xl text-cream-100 font-light leading-snug mb-8">
                  {isKo ? (
                    <>
                      퀘존 시티 홀리 스피릿 드라이브,<br />
                      1층 매장 위 EK 빌딩 3층으로 오세요.<br />
                      시뮬레이터 타석, 파크골프,<br />
                      그리고 시원한 음료가 준비되어 있습니다.
                    </>
                  ) : (
                    <>
                      Find us on the third floor,<br />
                      above the ground-level shops<br />
                      on Holy Spirit Dr, QC.<br />
                      Simulator bays, Park Golf,<br />
                      and cold drinks ready.
                    </>
                  )}
                </p>
              </div>

              {/* Social buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-800/80">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-stone-700/80 flex items-center justify-center text-stone-300 hover:text-white hover:border-[#D85A2A] transition-colors text-xs font-serif"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-stone-700/80 flex items-center justify-center text-stone-300 hover:text-white hover:border-[#D85A2A] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
