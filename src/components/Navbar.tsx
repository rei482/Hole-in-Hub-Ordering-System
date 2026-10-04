import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, User, ShoppingBag, Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()
  const { language, setLanguage, t } = useLanguage()
  const { user, isLoggedIn } = useAuth()

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.shop'), path: '/shop' },
    { name: t('nav.dining'), path: '/dining' },
    { name: t('nav.about'), path: '/about' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
    setIsSearchOpen(false)
  }, [location])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-[#FAF7F2] ${
          isScrolled
            ? 'shadow-[0_2px_12px_rgba(0,0,0,0.06)] border-b border-stone-200'
            : 'border-b border-stone-200/80'
        }`}
      >
        {/* Top bar */}
        <div>
          <div className="container-luxury flex items-center justify-between h-16 lg:h-20">
            {/* Left - Search & Language Toggle */}
            <div className="flex items-center gap-4 lg:gap-6">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="flex items-center gap-2 text-espresso-900 hover:text-espresso-600 transition-colors duration-300 cursor-pointer"
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1.5} />
                <span className="hidden lg:inline text-xs tracking-[0.15em] uppercase font-medium">
                  {t('nav.search')}
                </span>
              </button>

              {/* Bilingual Language Switcher (EN / 한국어) */}
              <div className="flex items-center text-xs font-semibold tracking-wider border border-stone-300/80 bg-white/70 overflow-hidden shadow-2xs">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 transition-colors cursor-pointer ${
                    language === 'en'
                      ? 'bg-espresso-900 text-white'
                      : 'text-stone-600 hover:text-espresso-900'
                  }`}
                  title="English"
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('ko')}
                  className={`px-2.5 py-1 transition-colors cursor-pointer flex items-center gap-1 ${
                    language === 'ko'
                      ? 'bg-espresso-900 text-white'
                      : 'text-stone-600 hover:text-espresso-900'
                  }`}
                  title="한국어 (Korean)"
                >
                  <Globe size={11} />
                  KO
                </button>
              </div>
            </div>

            {/* Center - Logo */}
            <Link to="/" className="flex flex-col items-center group">
              <span className="font-luxury text-2xl lg:text-3xl text-espresso-900 tracking-[0.05em] transition-all duration-300 group-hover:tracking-[0.08em]">
                HOLE IN HUB
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-stone-400 font-medium">
                GOLF & PARK GOLF
              </span>
            </Link>

            {/* Right - Account & Cart */}
            <div className="flex items-center justify-end gap-5">
              <Link
                to={isLoggedIn ? "/profile" : "/login"}
                className="flex items-center gap-2 text-espresso-900 hover:text-espresso-600 transition-colors duration-300"
                aria-label={isLoggedIn ? "Account" : "Sign In"}
              >
                <User size={18} strokeWidth={1.5} />
                <span className="hidden lg:inline text-xs tracking-[0.15em] uppercase font-medium">
                  {isLoggedIn ? (user?.firstName || t('nav.account')) : (language === 'ko' ? '로그인' : 'Sign In')}
                </span>
              </Link>
              <Link
                to="/cart"
                className="flex items-center gap-2 text-espresso-900 hover:text-espresso-600 transition-colors duration-300 relative"
                aria-label="Cart"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span className="hidden lg:inline text-xs tracking-[0.15em] uppercase font-medium">
                  {t('nav.cart')}
                </span>
                {/* Cart badge */}
                <span className="absolute -top-1.5 -right-1.5 lg:-top-1.5 lg:right-[calc(100%-22px)] bg-[#E65100] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  2
                </span>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden text-espresso-900 cursor-pointer"
                aria-label="Menu"
              >
                {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation links - Desktop */}
        <nav className="hidden lg:block border-b border-stone-200/40">
          <div className="container-luxury flex items-center justify-center gap-10 h-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs tracking-[0.15em] font-medium transition-all duration-300 relative py-1 ${
                  location.pathname === link.path
                    ? 'text-espresso-900 font-bold'
                    : 'text-stone-500 hover:text-espresso-900'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-espresso-900 animate-fade-in" />
                )}
              </Link>
            ))}
          </div>
        </nav>

        {/* Search overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-cream-50 border-b border-stone-200 animate-slide-down">
            <div className="container-luxury py-6">
              <div className="max-w-2xl mx-auto relative">
                <Search
                  size={18}
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-400"
                />
                <input
                  type="text"
                  placeholder={t('nav.search_placeholder')}
                  className="input-luxury pl-8 text-base"
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="lg:hidden bg-cream-50 border-b border-stone-200 animate-slide-down">
            <div className="container-luxury py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm tracking-[0.15em] uppercase font-medium text-espresso-900 py-2 border-b border-stone-200/60"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to={isLoggedIn ? "/profile" : "/login"}
                className="block text-sm tracking-[0.15em] uppercase font-medium text-espresso-900 py-2 border-b border-stone-200/60"
              >
                {isLoggedIn ? (user?.firstName ? `${user.firstName} (Account)` : t('nav.account')) : (language === 'ko' ? '로그인 / 회원가입' : 'Sign In / Register')}
              </Link>
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs uppercase text-stone-500">Language / 언어</span>
                <div className="flex items-center text-xs font-semibold border border-stone-300 bg-white">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 ${
                      language === 'en' ? 'bg-espresso-900 text-white' : 'text-stone-700'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('ko')}
                    className={`px-3 py-1 ${
                      language === 'ko' ? 'bg-espresso-900 text-white' : 'text-stone-700'
                    }`}
                  >
                    한국어
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
