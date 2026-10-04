import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useLanguage } from '../context/LanguageContext'
import { loginSchema } from '../lib/validation'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  const { login } = useAuth()
  const { language, setLanguage } = useLanguage()
  const isKo = language === 'ko'
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const result = loginSchema.safeParse({ email, password, rememberMe })
    if (!result.success) {
      const fieldErrors: { email?: string; password?: string } = {}
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as 'email' | 'password'
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = issue.message
        }
      })
      setErrors(fieldErrors)
      return
    }

    setErrors({})
    login(email)
    navigate('/shop')
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex">
      {/* Left - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=1600&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-[#181512]/60" />
        </div>
        <div className="relative h-full flex flex-col justify-between p-12 text-cream-50">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cream-200 hover:text-white transition-colors">
              <ArrowLeft size={14} />
              <span>{isKo ? '메인 스토어로 돌아가기' : 'Back to Hole in Hub Store'}</span>
            </Link>
          </div>
          <div>
            <span className="inline-block bg-[#E65100] text-white text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1 mb-4">
              Clubhouse Access
            </span>
            <h2 className="font-luxury text-4xl text-cream-50 mb-3 leading-tight">
              {isKo ? '홀인허브\n클럽하우스' : 'Hole in Hub\nClubhouse'}
            </h2>
            <p className="text-cream-200 text-sm max-w-sm leading-relaxed">
              {isKo
                ? '투어 등급 골프 기어, 갓 구운 베이커리 & 스페셜티 커피, 프라이빗 락커룸 혜택을 만나보세요.'
                : 'Tournament-grade golf equipment, artisanal coffee & pastries, and private member perks.'}
            </p>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="w-full lg:w-1/2 flex flex-col bg-white">
        {/* Header with Store Link & Language Switcher */}
        <div className="p-6 lg:p-8 flex items-center justify-between border-b border-stone-100">
          <Link to="/" className="font-luxury text-2xl text-espresso-900 tracking-[0.05em]">
            HOLE IN HUB
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/shop"
              className="text-xs font-semibold tracking-wider uppercase text-stone-600 hover:text-espresso-900 flex items-center gap-1.5 transition-colors"
            >
              <span>{isKo ? '게스트로 둘러보기' : 'Browse as Guest'}</span>
              <ArrowRight size={13} />
            </Link>

            <div className="flex items-center text-xs font-semibold border border-stone-300 bg-white">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 ${language === 'en' ? 'bg-[#181512] text-white' : 'text-stone-600'}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ko')}
                className={`px-2 py-0.5 ${language === 'ko' ? 'bg-[#181512] text-white' : 'text-stone-600'}`}
              >
                KO
              </button>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 flex items-center justify-center px-6 py-10 lg:py-12">
          <div className="w-full max-w-sm">
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#E65100] block mb-1">
              {isKo ? '회원 로그인' : 'Member Login'}
            </span>
            <h1 className="font-luxury text-3xl text-espresso-900 mb-2">
              {isKo ? '환영합니다' : 'Welcome Back'}
            </h1>
            <p className="text-stone-400 text-xs sm:text-sm mb-8">
              {isKo ? '클럽하우스 계정으로 로그인해 주세요' : 'Sign in to access your orders and member perks'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="text-subheading text-stone-600 block mb-2">
                  {isKo ? '이메일 주소' : 'Email Address'}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
                  }}
                  placeholder="juan@email.com"
                  className={`input-luxury ${errors.email ? 'border-red-500 focus:border-red-600' : ''}`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={13} />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="text-subheading text-stone-600 block mb-2">
                  {isKo ? '비밀번호' : 'Password'}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
                    }}
                    placeholder="••••••••"
                    className={`input-luxury pr-10 ${errors.password ? 'border-red-500 focus:border-red-600' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-espresso-900 transition-colors p-2 cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={13} />
                    <span>{errors.password}</span>
                  </p>
                )}
              </div>

              {/* Remember Me + Forgot */}
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="accent-[#181512]"
                  />
                  <span className="text-stone-500">{isKo ? '로그인 상태 유지' : 'Remember me'}</span>
                </label>
                <a
                  href="#"
                  className="text-stone-500 hover:text-espresso-900 transition-colors"
                >
                  {isKo ? '비밀번호 찾기' : 'Forgot password?'}
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="h-12 w-full bg-[#181512] hover:bg-black text-white text-xs font-bold tracking-[0.14em] uppercase flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
              >
                <span>{isKo ? '로그인' : 'Sign In'}</span>
                <ArrowRight size={14} />
              </button>

              {/* Continue as Guest Button (Crucial for guest browsing) */}
              <Link
                to="/shop"
                className="h-12 w-full border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 text-stone-800 text-xs font-bold tracking-[0.14em] uppercase flex items-center justify-center gap-2 transition-all shadow-2xs cursor-pointer text-center"
              >
                <span>{isKo ? '로그인 없이 둘러보기 (게스트)' : 'Continue Browsing as Guest'}</span>
              </Link>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-stone-200" />
              <span className="text-[10px] tracking-[0.15em] uppercase text-stone-400">
                {isKo ? '또는' : 'Or'}
              </span>
              <div className="flex-1 h-px bg-stone-200" />
            </div>

            {/* Sign up link */}
            <p className="text-center text-xs text-stone-500">
              {isKo ? '아직 계정이 없으신가요? ' : "Don't have an account? "}
              <Link
                to="/register"
                className="text-[#E65100] font-bold hover:underline tracking-wide uppercase text-xs"
              >
                {isKo ? '회원가입' : 'Create Account'}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
