import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useLanguage } from '../context/LanguageContext'
import { registerSchema } from '../lib/validation'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState<{
    firstName?: string
    lastName?: string
    email?: string
    phone?: string
    password?: string
    confirmPassword?: string
  }>({})

  const { login } = useAuth()
  const { language, setLanguage } = useLanguage()
  const isKo = language === 'ko'
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const result = registerSchema.safeParse({
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
    })

    if (!result.success) {
      const fieldErrors: typeof errors = {}
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof typeof errors
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = issue.message
        }
      })
      setErrors(fieldErrors)
      return
    }

    setErrors({})
    login(email, `${firstName} ${lastName}`)
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
              'url(https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&h=1600&fit=crop)',
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
              Membership Privilege
            </span>
            <h2 className="font-luxury text-4xl text-cream-50 mb-3 leading-tight">
              {isKo ? '클럽하우스에\n오신 것을 환영합니다' : 'Join the\nClubhouse'}
            </h2>
            <p className="text-cream-200 text-sm max-w-sm leading-relaxed">
              {isKo
                ? '멤버십 전용 드롭 할인, 파크골프 토너먼트 우선 예약, 락커룸 저장 혜택을 누려보세요.'
                : 'Enjoy member-exclusive collection drops, tournament invites, and saved bag preferences.'}
            </p>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="w-full lg:w-1/2 flex flex-col bg-white">
        {/* Header */}
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
              {isKo ? '신규 회원 가입' : 'Create Account'}
            </span>
            <h1 className="font-luxury text-3xl text-espresso-900 mb-2">
              {isKo ? '멤버십 가입하기' : 'Join Hole in Hub'}
            </h1>
            <p className="text-stone-400 text-xs sm:text-sm mb-6">
              {isKo ? '간단한 정보를 입력하고 회원 혜택을 시작하세요' : 'Fill in your details to start your membership'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-subheading text-stone-600 block mb-1.5">
                    {isKo ? '이름' : 'First Name'}
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value)
                      if (errors.firstName) setErrors((prev) => ({ ...prev, firstName: undefined }))
                    }}
                    placeholder="Juan"
                    className={`input-luxury ${errors.firstName ? 'border-red-500' : ''}`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.firstName}</span>
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-subheading text-stone-600 block mb-1.5">
                    {isKo ? '성' : 'Last Name'}
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value)
                      if (errors.lastName) setErrors((prev) => ({ ...prev, lastName: undefined }))
                    }}
                    placeholder="Dela Cruz"
                    className={`input-luxury ${errors.lastName ? 'border-red-500' : ''}`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.lastName}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-subheading text-stone-600 block mb-1.5">
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
                  className={`input-luxury ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={12} />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Contact Number */}
              <div>
                <label className="text-subheading text-stone-600 block mb-1.5">
                  {isKo ? '연락처' : 'Contact Number'}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }))
                  }}
                  placeholder="+63 912 345 6789"
                  className={`input-luxury ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={12} />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="text-subheading text-stone-600 block mb-1.5">
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
                    className={`input-luxury pr-10 ${errors.password ? 'border-red-500' : ''}`}
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
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={12} />
                    <span>{errors.password}</span>
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-subheading text-stone-600 block mb-1.5">
                  {isKo ? '비밀번호 확인' : 'Confirm Password'}
                </label>
                <div className="relative">
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value)
                      if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: undefined }))
                    }}
                    placeholder="••••••••"
                    className={`input-luxury pr-10 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-espresso-900 transition-colors p-2 cursor-pointer"
                    aria-label={showConfirm ? 'Hide confirm' : 'Show confirm'}
                  >
                    {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={12} />
                    <span>{errors.confirmPassword}</span>
                  </p>
                )}
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="h-12 w-full bg-[#181512] hover:bg-black text-white text-xs font-bold tracking-[0.14em] uppercase flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer mt-2"
              >
                <span>{isKo ? '회원가입 완료' : 'Create Account'}</span>
                <ArrowRight size={14} />
              </button>

              {/* Continue as Guest Button */}
              <Link
                to="/shop"
                className="h-12 w-full border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 text-stone-800 text-xs font-bold tracking-[0.14em] uppercase flex items-center justify-center gap-2 transition-all shadow-2xs cursor-pointer text-center"
              >
                <span>{isKo ? '로그인 없이 둘러보기 (게스트)' : 'Continue Browsing as Guest'}</span>
              </Link>
            </form>

            {/* Sign in link */}
            <p className="text-center text-xs text-stone-500 mt-6">
              {isKo ? '이미 계정이 있으신가요? ' : 'Already have an account? '}
              <Link
                to="/login"
                className="text-[#E65100] font-bold hover:underline tracking-wide uppercase text-xs"
              >
                {isKo ? '로그인하기' : 'Sign In'}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
