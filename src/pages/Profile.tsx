import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  User,
  MapPin,
  Package,
  Heart,
  Settings,
  LogOut,
  Edit3,
  Plus,
  Check,
  Truck,
  Calendar,
  ArrowRight,
  X,
  Trash2,
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'

type Tab = 'profile' | 'addresses' | 'orders' | 'wishlist'

export default function Profile() {
  const [activeTab, setActiveTab] = useState<Tab>('profile')
  const [isEditing, setIsEditing] = useState(false)
  const navigate = useNavigate()
  const { user, isLoggedIn, logout } = useAuth()
  const { language } = useLanguage()
  const isKo = language === 'ko'

  const [formData, setFormData] = useState({
    firstName: user?.firstName || 'Juan Dela',
    lastName: user?.lastName || 'Cruz',
    email: user?.email || 'juan@email.com',
    phone: user?.phone || '+63 969 265 4976',
    birthDate: 'January 15, 1995',
    memberSince: 'September 2026',
    membershipTier: user?.memberTier || 'Clubhouse Gold Member',
  })

  interface AddressItem {
    id: string
    name: string
    tag: string
    address: string
    city: string
    phone: string
    isDefault?: boolean
  }

  const [addresses, setAddresses] = useState<AddressItem[]>([
    {
      id: 'addr-1',
      name: user?.name || 'Juan Dela Cruz',
      tag: 'Default Pickup',
      address: '3rd Floor, EK Building, 50 Holy Spirit Dr, Quezon City, 1127 Metro Manila',
      city: 'Quezon City',
      phone: '+63 969 265 4976',
      isDefault: true,
    },
  ])

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [newAddr, setNewAddr] = useState({
    name: '',
    tag: 'Home',
    address: '',
    city: '',
    phone: '',
  })
  const [addrError, setAddrError] = useState('')

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newAddr.name.trim() || !newAddr.address.trim() || !newAddr.city.trim() || !newAddr.phone.trim()) {
      setAddrError(isKo ? '모든 배송지 정보를 입력해 주세요.' : 'Please fill in all address details.')
      return
    }
    const item: AddressItem = {
      id: `addr-${Date.now()}`,
      name: newAddr.name,
      tag: newAddr.tag || 'Home',
      address: newAddr.address,
      city: newAddr.city,
      phone: newAddr.phone,
      isDefault: addresses.length === 0,
    }
    setAddresses([...addresses, item])
    setNewAddr({ name: '', tag: 'Home', address: '', city: '', phone: '' })
    setAddrError('')
    setIsAddModalOpen(false)
  }

  const handleDeleteAddress = (id: string) => {
    setAddresses(addresses.filter((a) => a.id !== id))
  }

  if (!isLoggedIn) {
    return (
      <div className="bg-[#FAF7F2] min-h-[calc(100vh-140px)] py-16">
        <div className="container-luxury max-w-xl text-center">
          <div className="w-16 h-16 rounded-full bg-stone-200/80 flex items-center justify-center mx-auto mb-6 text-espresso-900 shadow-2xs">
            <User size={30} strokeWidth={1.5} />
          </div>
          <span className="inline-block bg-[#E65100] text-white text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1 mb-3">
            {isKo ? '게스트 모드' : 'Guest Browsing Mode'}
          </span>
          <h1 className="font-luxury text-3xl sm:text-4xl text-espresso-900 mb-3">
            {isKo ? '게스트로 이용 중입니다' : 'You are Browsing as a Guest'}
          </h1>
          <p className="text-stone-600 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            {isKo
              ? '홀인허브의 모든 골프웨어, 파크골프 장비, 식음료(GrabFood) 메뉴를 로그인 없이 자유롭게 둘러보실 수 있습니다. 회원 전용 혜택을 이용하시려면 로그인해 주세요.'
              : 'All collections, tournament equipment drops, and clubhouse dining are open for public browsing without an account. Sign in to access your saved clubhouse locker and member perks.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/login"
              className="h-12 px-7 w-full sm:w-auto bg-[#181512] hover:bg-black text-white text-xs font-bold tracking-[0.14em] uppercase flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <span>{isKo ? '클럽하우스 로그인' : 'Sign In to Account'}</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/shop"
              className="h-12 px-7 w-full sm:w-auto bg-white hover:bg-stone-50 border border-stone-300 text-espresso-900 text-xs font-bold tracking-[0.14em] uppercase flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <span>{isKo ? '쇼핑 계속하기' : 'Continue Shopping'}</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const sidebarItems = [
    { id: 'profile' as Tab, name: isKo ? '내 프로필' : 'My Profile', icon: User },
    { id: 'addresses' as Tab, name: isKo ? '배송지 관리' : 'My Addresses', icon: MapPin },
    { id: 'orders' as Tab, name: isKo ? '주문 내역' : 'My Orders', icon: Package },
    { id: 'wishlist' as Tab, name: isKo ? '락커룸 보관함' : 'Wishlist', icon: Heart },
  ]

  return (
    <div className="bg-[#FAF7F2] min-h-[calc(100vh-140px)]">
      {/* Breadcrumb */}
      <div className="border-b border-stone-200/60 bg-white/60">
        <div className="container-luxury py-3.5">
          <nav className="flex items-center gap-2 text-xs text-stone-400">
            <Link to="/" className="hover:text-espresso-900 transition-colors">
              {isKo ? '홈' : 'Home'}
            </Link>
            <span>/</span>
            <span className="text-espresso-900 font-medium">{isKo ? '마이 어카운트' : 'My Account'}</span>
          </nav>
        </div>
      </div>

      <div className="container-luxury py-8 lg:py-12">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-4 border-b border-stone-200 gap-2">
          <div>
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#D85A2A]">
              {isKo ? '클럽하우스 포털' : 'Clubhouse Portal'}
            </span>
            <h1 className="font-luxury text-3xl lg:text-4xl text-espresso-900 mt-1">
              {isKo ? '회원 계정 관리' : 'Member Account'}
            </h1>
          </div>
          <span className="text-xs text-stone-500 font-medium">
            Member ID: <span className="font-mono text-espresso-900 font-bold">#HIH-0928</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-stone-200/90 shadow-2xs">
              {/* User Avatar Card */}
              <div className="p-6 text-center border-b border-stone-200 bg-[#FCFAF6]">
                <div className="w-20 h-20 rounded-full bg-[#181512] text-cream-50 flex items-center justify-center mx-auto mb-3.5 shadow-xs font-luxury text-2xl font-normal">
                  JD
                </div>
                <h3 className="font-luxury text-xl text-espresso-900 font-medium leading-snug">
                  {formData.firstName} {formData.lastName}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">{formData.email}</p>
                <div className="mt-3 inline-block bg-[#D85A2A]/10 text-[#D85A2A] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1">
                  {isKo ? '골드 회원' : 'Gold Member'}
                </div>
              </div>

              {/* Navigation Menu */}
              <nav className="p-3 space-y-1">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-semibold transition-all cursor-pointer ${
                      activeTab === item.id
                        ? 'bg-[#181512] text-white shadow-xs'
                        : 'text-stone-600 hover:text-espresso-900 hover:bg-stone-100/70'
                    }`}
                  >
                    <item.icon size={15} />
                    {item.name}
                  </button>
                ))}

                <div className="my-2 h-px bg-stone-100" />

                <button
                  onClick={() => {
                    logout()
                    navigate('/')
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-xs tracking-wider uppercase font-semibold text-[#D85A2A] hover:bg-[#D85A2A]/10 transition-colors cursor-pointer text-left"
                >
                  <LogOut size={15} />
                  {isKo ? '로그아웃' : 'Sign Out'}
                </button>
              </nav>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-3">
            {/* Tab 1: Personal Information */}
            {activeTab === 'profile' && (
              <div className="bg-white border border-stone-200/90 p-6 lg:p-8 shadow-2xs">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-stone-200">
                  <div>
                    <h2 className="font-luxury text-2xl text-espresso-900 font-medium">
                      {isKo ? '개인 정보' : 'Personal Information'}
                    </h2>
                    <p className="text-xs text-stone-500 mt-0.5">
                      {isKo ? '회원 기본 정보 및 연락처' : 'Manage your identity and member contact details'}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center gap-1.5 px-3 py-1.5 border border-stone-300 hover:border-espresso-900 text-xs font-semibold uppercase tracking-wider text-espresso-900 transition-colors cursor-pointer"
                  >
                    <Edit3 size={13} />
                    {isEditing ? (isKo ? '완료' : 'Save Changes') : (isKo ? '수정' : 'Edit Profile')}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[11px] font-bold tracking-wider uppercase text-stone-400 block mb-1.5">
                      {isKo ? '이름' : 'First Name'}
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full border border-stone-300 p-2.5 text-sm text-espresso-900 bg-white"
                      />
                    ) : (
                      <p className="text-sm font-semibold text-espresso-900 py-1">
                        {formData.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-[11px] font-bold tracking-wider uppercase text-stone-400 block mb-1.5">
                      {isKo ? '성' : 'Last Name'}
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full border border-stone-300 p-2.5 text-sm text-espresso-900 bg-white"
                      />
                    ) : (
                      <p className="text-sm font-semibold text-espresso-900 py-1">
                        {formData.lastName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-[11px] font-bold tracking-wider uppercase text-stone-400 block mb-1.5">
                      {isKo ? '이메일 주소' : 'Email Address'}
                    </label>
                    <p className="text-sm font-semibold text-espresso-900 py-1">
                      {formData.email}
                    </p>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold tracking-wider uppercase text-stone-400 block mb-1.5">
                      {isKo ? '연락처' : 'Phone Number'}
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-stone-300 p-2.5 text-sm text-espresso-900 bg-white"
                      />
                    ) : (
                      <p className="text-sm font-semibold text-espresso-900 py-1">
                        {formData.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-[11px] font-bold tracking-wider uppercase text-stone-400 block mb-1.5">
                      {isKo ? '생년월일' : 'Date of Birth'}
                    </label>
                    <p className="text-sm font-semibold text-espresso-900 py-1">
                      {formData.birthDate}
                    </p>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold tracking-wider uppercase text-stone-400 block mb-1.5">
                      {isKo ? '가입일' : 'Member Since'}
                    </label>
                    <p className="text-sm font-semibold text-espresso-900 py-1">
                      {formData.memberSince}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Addresses */}
            {activeTab === 'addresses' && (
              <div className="bg-white border border-stone-200/90 p-6 lg:p-8 shadow-2xs">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-stone-200">
                  <div>
                    <h2 className="font-luxury text-2xl text-espresso-900 font-medium">
                      {isKo ? '배송지 목록' : 'Delivery & Pickup Addresses'}
                    </h2>
                    <p className="text-xs text-stone-500 mt-0.5">
                      {isKo ? '온라인 주문 및 클럽하우스 픽업 주소' : 'Primary delivery destinations and clubhouse merch pickup'}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setAddrError('')
                      setIsAddModalOpen(true)
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#181512] text-white text-xs font-semibold uppercase tracking-wider hover:bg-espresso-700 transition-colors cursor-pointer"
                  >
                    <Plus size={13} />
                    {isKo ? '새 주소 추가' : 'Add New'}
                  </button>
                </div>

                {/* Addresses List */}
                <div className="space-y-4">
                  {addresses.map((addr) => (
                    <div key={addr.id} className="border border-stone-200 p-5 bg-[#FAF7F2] relative transition-all hover:border-stone-400">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-espresso-900">{addr.name}</span>
                          <span className="bg-[#D85A2A] text-white text-[9px] font-bold tracking-wider uppercase px-2 py-0.5">
                            {addr.tag}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          {!addr.isDefault && (
                            <button
                              onClick={() => handleDeleteAddress(addr.id)}
                              className="text-stone-400 hover:text-red-600 transition-colors cursor-pointer p-1"
                              title="Delete address"
                            >
                              <Trash2 size={14} />
                            </button>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed mb-2">
                        {addr.address}, {addr.city}
                      </p>
                      <p className="text-xs text-stone-500">Contact: {addr.phone}</p>
                    </div>
                  ))}
                </div>

                {/* Add Address Modal */}
                {isAddModalOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in">
                    <div className="bg-white border border-stone-200 w-full max-w-md p-6 lg:p-8 shadow-2xl relative">
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-200">
                        <h3 className="font-luxury text-xl text-espresso-900">
                          {isKo ? '새 배송지 추가' : 'Add New Address'}
                        </h3>
                        <button
                          onClick={() => setIsAddModalOpen(false)}
                          className="text-stone-400 hover:text-espresso-900 transition-colors cursor-pointer p-1"
                        >
                          <X size={18} />
                        </button>
                      </div>

                      <form onSubmit={handleAddAddress} className="space-y-4">
                        {addrError && (
                          <div className="p-2.5 bg-red-50 text-red-700 text-xs border border-red-200">
                            {addrError}
                          </div>
                        )}

                        <div>
                          <label className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block mb-1">
                            {isKo ? '수령인' : 'Recipient Name'}
                          </label>
                          <input
                            type="text"
                            value={newAddr.name}
                            onChange={(e) => setNewAddr({ ...newAddr, name: e.target.value })}
                            placeholder="Juan Dela Cruz"
                            className="input-luxury text-sm"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block mb-1">
                              {isKo ? '주소 구분' : 'Label / Tag'}
                            </label>
                            <select
                              value={newAddr.tag}
                              onChange={(e) => setNewAddr({ ...newAddr, tag: e.target.value })}
                              className="input-luxury text-sm"
                            >
                              <option value="Home">Home</option>
                              <option value="Office">Office</option>
                              <option value="Clubhouse">Clubhouse</option>
                              <option value="Golf Resort">Golf Resort</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block mb-1">
                              {isKo ? '연락처' : 'Contact Phone'}
                            </label>
                            <input
                              type="tel"
                              value={newAddr.phone}
                              onChange={(e) => setNewAddr({ ...newAddr, phone: e.target.value })}
                              placeholder="+63 9XX XXX XXXX"
                              className="input-luxury text-sm"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block mb-1">
                            {isKo ? '상세 주소' : 'Street Address'}
                          </label>
                          <input
                            type="text"
                            value={newAddr.address}
                            onChange={(e) => setNewAddr({ ...newAddr, address: e.target.value })}
                            placeholder="Unit / House No., Street, Barangay"
                            className="input-luxury text-sm"
                            required
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block mb-1">
                            {isKo ? '도시 / 우편번호' : 'City / Region'}
                          </label>
                          <input
                            type="text"
                            value={newAddr.city}
                            onChange={(e) => setNewAddr({ ...newAddr, city: e.target.value })}
                            placeholder="e.g. Makati City, 1200 Metro Manila"
                            className="input-luxury text-sm"
                            required
                          />
                        </div>

                        <div className="pt-2 flex items-center justify-end gap-3">
                          <button
                            type="button"
                            onClick={() => setIsAddModalOpen(false)}
                            className="px-4 py-2 border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-wider hover:bg-stone-50 transition-colors cursor-pointer"
                          >
                            {isKo ? '취소' : 'Cancel'}
                          </button>
                          <button
                            type="submit"
                            className="px-5 py-2 bg-[#181512] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            {isKo ? '주소 저장' : 'Save Address'}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Tab 3: Orders */}
            {activeTab === 'orders' && (
              <div className="bg-white border border-stone-200/90 p-6 lg:p-8 shadow-2xs">
                <div className="pb-6 mb-6 border-b border-stone-200">
                  <h2 className="font-luxury text-2xl text-espresso-900 font-medium">
                    {isKo ? '주문 내역' : 'Order History'}
                  </h2>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {isKo ? '최근 골프웨어 및 장비 주문 상태' : 'Track your recent golf drops and clubhouse shipments'}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Order 1 */}
                  <div className="border border-stone-200 p-5">
                    <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-stone-100 gap-2">
                      <div>
                        <span className="font-mono text-xs font-bold text-espresso-900">#HIH-8492</span>
                        <span className="text-xs text-stone-400 ml-3">Oct 04, 2026</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 bg-amber-100 text-amber-900">
                        <Truck size={12} /> {isKo ? '배송 준비 중' : 'Preparing Dispatch'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <p className="font-medium text-espresso-900">Hub Lounge Quarter-Zip (Navy / Size L)</p>
                        <p className="text-stone-400">Qty: 1 • Express Fairway Delivery</p>
                      </div>
                      <span className="font-bold text-sm text-espresso-900">₱3,800</span>
                    </div>
                  </div>

                  {/* Order 2 */}
                  <div className="border border-stone-200 p-5">
                    <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-stone-100 gap-2">
                      <div>
                        <span className="font-mono text-xs font-bold text-espresso-900">#HIH-8104</span>
                        <span className="text-xs text-stone-400 ml-3">Sep 28, 2026</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 bg-emerald-100 text-emerald-900">
                        <Check size={12} /> {isKo ? '배송 완료' : 'Delivered'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <p className="font-medium text-espresso-900">Golf Glove Pro-Grip (Cabretta / ML)</p>
                        <p className="text-stone-400">Qty: 2 • Store Pickup (EK Building)</p>
                      </div>
                      <span className="font-bold text-sm text-espresso-900">₱1,300</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Wishlist / Locker */}
            {activeTab === 'wishlist' && (
              <div className="bg-white border border-stone-200/90 p-6 lg:p-8 shadow-2xs text-center py-16">
                <Heart size={32} className="text-[#D85A2A] mx-auto mb-3 opacity-60" />
                <h3 className="font-luxury text-xl text-espresso-900 mb-1">
                  {isKo ? '보관된 아이템이 없습니다' : 'Your Locker is Empty'}
                </h3>
                <p className="text-xs text-stone-500 mb-6">
                  {isKo ? '마음에 드는 골프 드롭을 락커룸에 저장해보세요.' : 'Save upcoming drops and clubhouse apparel to your personal locker.'}
                </p>
                <Link to="/shop" className="btn-primary text-xs uppercase tracking-wider inline-flex">
                  {isKo ? '골프 컬렉션 둘러보기' : 'Explore Drops'}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
