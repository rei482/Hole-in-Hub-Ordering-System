import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  return (
    <div className="min-h-screen bg-cream-50 flex">
      {/* Left - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&h=1600&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-espresso-900/40" />
        </div>
        <div className="relative h-full flex items-end p-12">
          <div>
            <h2 className="font-luxury text-4xl text-cream-50 mb-3">
              Join the Hub
            </h2>
            <p className="text-cream-200 text-sm max-w-sm">
              Create your account and discover a world of premium flavors, exclusive
              merchandise, and special member perks.
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
            <h1 className="font-luxury text-3xl text-espresso-900 mb-2">
              Create Your Account
            </h1>
            <p className="text-stone-400 text-sm mb-8">
              Fill in your details to get started
            </p>

            <form className="space-y-5">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-subheading text-stone-600 block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Juan"
                    className="input-luxury"
                  />
                </div>
                <div>
                  <label className="text-subheading text-stone-600 block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Dela Cruz"
                    className="input-luxury"
                  />
                </div>
              </div>

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

              {/* Contact Number */}
              <div>
                <label className="text-subheading text-stone-600 block mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  placeholder="+63 9XX XXX XXXX"
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
                    placeholder="Create a strong password"
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

              {/* Confirm Password */}
              <div>
                <label className="text-subheading text-stone-600 block mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    className="input-luxury pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-espresso-900 transition-colors p-2"
                    aria-label={showConfirm ? 'Hide confirm' : 'Show confirm'}
                  >
                    {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 border border-stone-300 mt-0.5 shrink-0 cursor-pointer hover:border-stone-500 transition-colors" />
                <p className="text-xs text-stone-400 leading-relaxed">
                  I agree to the{' '}
                  <a href="#" className="text-hermes-500 hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-hermes-500 hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </div>

              {/* Register Button */}
              <button type="submit" className="btn-primary w-full justify-center">
                Create Account
              </button>
            </form>

            {/* Sign in link */}
            <p className="text-center text-sm text-stone-500 mt-6">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-hermes-500 font-medium hover:text-hermes-600 transition-colors tracking-wide uppercase text-xs"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
