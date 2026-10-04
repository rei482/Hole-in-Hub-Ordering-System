import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="min-h-screen bg-cream-50 flex">
      {/* Left - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=1600&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-espresso-900/40" />
        </div>
        <div className="relative h-full flex items-end p-12">
          <div>
            <h2 className="font-luxury text-4xl text-cream-50 mb-3">
              Welcome to
              <br />
              Hole in Hub
            </h2>
            <p className="text-cream-200 text-sm max-w-sm">
              Premium coffee, artisan desserts, and curated merchandise — all at your
              fingertips.
            </p>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="w-full lg:w-1/2 flex flex-col">
        {/* Header */}
        <div className="p-6 lg:p-10">
          <Link to="/" className="font-luxury text-2xl text-espresso-900 tracking-[0.05em]">
            HOLE IN HUB
          </Link>
        </div>

        {/* Form */}
        <div className="flex-1 flex items-center justify-center px-6 pb-12">
          <div className="w-full max-w-sm animate-fade-in-up">
            <h1 className="font-luxury text-3xl text-espresso-900 mb-2">Welcome Back</h1>
            <p className="text-stone-400 text-sm mb-8">
              Sign in to your account to continue
            </p>

            <form className="space-y-6">
              {/* Email */}
              <div>
                <label className="text-subheading text-stone-600 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="input-luxury"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-subheading text-stone-600 block mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="input-luxury pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-espresso-900 transition-colors p-2"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Remember Me + Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div
                    onClick={() => setRememberMe(!rememberMe)}
                    className={`w-4 h-4 border transition-all duration-300 flex items-center justify-center cursor-pointer ${
                      rememberMe
                        ? 'bg-espresso-900 border-espresso-900'
                        : 'border-stone-300 group-hover:border-stone-500'
                    }`}
                  >
                    {rememberMe && (
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        className="text-cream-50"
                      >
                        <path
                          d="M1 4L3.5 6.5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs text-stone-500">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-xs text-hermes-500 hover:text-hermes-600 transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button type="submit" className="btn-primary w-full justify-center">
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-stone-200" />
              <span className="text-[10px] tracking-[0.15em] uppercase text-stone-400">
                Or
              </span>
              <div className="flex-1 h-px bg-stone-200" />
            </div>

            {/* Sign up link */}
            <p className="text-center text-sm text-stone-500">
              Don&apos;t have an account?{' '}
              <Link
                to="/register"
                className="text-hermes-500 font-medium hover:text-hermes-600 transition-colors tracking-wide uppercase text-xs"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
