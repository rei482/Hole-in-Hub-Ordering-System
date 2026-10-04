import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-espresso-900 text-cream-100">
      {/* Main footer */}
      <div className="container-luxury py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-luxury text-2xl text-cream-50 mb-4 tracking-[0.05em]">
              HOLE IN HUB
            </h3>
            <p className="text-cream-300 text-sm leading-relaxed mb-6">
              Modern golf culture meets timeless craft. Your premier destination
              for tournament-grade Cabretta leather gloves, park golf equipment,
              and clubhouse apparel.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-cream-400 hover:text-hermes-400 transition-colors duration-300" aria-label="Instagram">
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="text-cream-400 hover:text-hermes-400 transition-colors duration-300" aria-label="Facebook">
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="text-cream-400 hover:text-hermes-400 transition-colors duration-300" aria-label="Twitter">
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-subheading text-cream-50 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Shop', path: '/shop' },
                { name: 'About Us', path: '/about' },
                { name: 'My Account', path: '/profile' },
                { name: 'Cart', path: '/cart' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream-300 text-sm hover:text-hermes-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-subheading text-cream-50 mb-6">Categories</h4>
            <ul className="space-y-3">
              {[
                { name: 'Polos', path: '/shop?category=polos' },
                { name: 'Headwear', path: '/shop?category=headwear' },
                { name: 'Accessories', path: '/shop?category=accessories' },
                { name: 'Lounge Apparel', path: '/shop?category=lounge' },
                { name: 'Food & Drinks', path: '/dining' },
              ].map((cat) => (
                <li key={cat.name}>
                  <Link
                    to={cat.path}
                    className="text-cream-300 text-sm hover:text-hermes-400 transition-colors duration-300"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-subheading text-cream-50 mb-6">Golf Lounge & Pickup</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#E65100] mt-0.5 shrink-0" />
                <span className="text-cream-300 text-sm leading-relaxed">
                  3rd Floor, EK Building, 50 Holy Spirit Dr, Quezon City, 1127 Metro Manila
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#E65100] shrink-0" />
                <a href="tel:09692654976" className="text-cream-300 text-sm hover:text-cream-50 transition-colors">
                  0969 265 4976
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xs text-[#E65100] font-bold shrink-0">HRS</span>
                <span className="text-cream-300 text-xs">
                  Daily 11:00 AM – Midnight
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-espresso-700">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream-400 text-xs tracking-wider">
            © {new Date().getFullYear()} Hole in Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-cream-400 text-xs hover:text-cream-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-cream-400 text-xs hover:text-cream-200 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
