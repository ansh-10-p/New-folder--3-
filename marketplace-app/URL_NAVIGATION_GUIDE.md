# 🗺️ LocalHub - Complete URL Navigation Guide

## 📍 Home & Main Pages

| Route | Name | Description |
|-------|------|-------------|
| `/` | Home Page | Landing page with all sections, navbar with auth links |

---

## 🔐 Authentication Pages

| Route | Name | Description | Features |
|-------|------|-------------|----------|
| `/auth/login` | Login | User authentication | Buyer/Seller toggle, password toggle, social login, remember me |
| `/auth/signup` | Sign Up | New user registration | 4-step process, role selection, password strength, verification |

---

## 👥 Buyer Section

### Dashboard
| Route | Name | Description |
|-------|------|-------------|
| `/dashboard/buyer` | Buyer Dashboard | Main buyer interface |

**Dashboard Tabs:**
- 📊 Overview - Stats, recent orders, quick metrics
- 🛒 Orders - Order history with filtering
- ❤️ Wishlist - Saved items grid
- 💬 Messages - Merchant communications
- 🎯 Recommendations - Suggested products
- ⭐ Reviews - User ratings and feedback

**Features:**
- Search bar for products and merchants
- Notifications with alerts
- User profile
- Sidebar navigation (collapsible on mobile)

---

## 🏪 Seller Section

### Dashboard
| Route | Name | Description |
|-------|------|-------------|
| `/dashboard/seller` | Seller Dashboard | Main seller interface |

**Dashboard Tabs:**
- 📊 Overview - Analytics, charts, recent orders
- 📦 Products - Product management grid
- 🛍️ Orders - Order fulfillment interface
- 📊 Analytics - Detailed performance metrics
- 💳 Payouts - Payment history and balance
- 🎨 Storefront - Store customization (placeholder)

**Features:**
- Sales trend visualization
- Top products tracking
- Order status management
- Revenue analytics
- Search and notifications
- Payout management

---

## 🎯 Onboarding Flows

### Seller Onboarding
| Route | Steps | Time |
|-------|-------|------|
| `/onboarding/seller` | 6 steps | ~5-10 minutes |

**Steps:**
1. Welcome introduction
2. Email/Phone/Document verification
3. Payment method setup
4. First product creation
5. Storefront customization
6. Launch confirmation

### Buyer Onboarding
| Route | Steps | Time |
|-------|-------|------|
| `/onboarding/buyer` | 6 steps | ~3-5 minutes |

**Steps:**
1. Welcome with features
2. Profile completion
3. Category preferences
4. Delivery address
5. Payment method selection
6. Ready to shop

---

## 🧭 Navigation Flow Diagram

```
┌─ Home (/)
│
├─ Navbar with Auth Links
│  ├─ Sign In → /auth/login
│  └─ Join Now → /auth/signup
│
├─ /auth/signup
│  ├─ Select Role (Buyer/Seller)
│  ├─ Enter Details
│  ├─ Additional Info
│  └─ Review & Complete
│     ├─ → /onboarding/buyer
│     └─ → /onboarding/seller
│
├─ /auth/login
│  ├─ Select Role
│  ├─ Enter Email/Password
│  └─ Authenticated
│     ├─ → /dashboard/buyer
│     └─ → /dashboard/seller
│
├─ /onboarding/seller (6 Steps)
│  └─ Complete Setup
│     └─ → /dashboard/seller
│
├─ /onboarding/buyer (6 Steps)
│  └─ Complete Setup
│     └─ → /dashboard/buyer
│
├─ /dashboard/buyer
│  ├─ Overview
│  ├─ Orders
│  ├─ Wishlist
│  ├─ Messages
│  ├─ Recommendations
│  └─ Reviews
│
└─ /dashboard/seller
   ├─ Overview (Analytics & Charts)
   ├─ Products (Management)
   ├─ Orders (Fulfillment)
   ├─ Analytics (Detailed)
   ├─ Payouts (Billing)
   └─ Storefront (Customization)
```

---

## 🎨 Design & Features by Page

### 🔵 Buyer Pages (Blue/Indigo Theme)
- **Login**: Blue gradient backgrounds, animated blobs
- **Signup**: Smooth multi-step process
- **Dashboard**: Clean white cards on blue gradient background
- **Onboarding**: Light blue gradients, feature cards

### 🟢 Seller Pages (Emerald/Cyan Theme)
- **Login**: Same as buyer
- **Signup**: Same as buyer
- **Dashboard**: Analytics-focused with charts and data visualization
- **Onboarding**: 6-step guided setup with progress tracking

---

## 📱 Mobile Experience

All pages include:
- ✅ Hamburger menu navigation
- ✅ Stack-based layout
- ✅ Responsive cards and forms
- ✅ Touch-friendly buttons (44px+ height)
- ✅ Mobile-optimized input fields
- ✅ Collapsible sidebars

---

## 🔄 User Journey Examples

### New Buyer Journey
```
1. Visit / (Home)
2. Click "Join Now" → /auth/signup
3. Select "Buyer" role
4. Fill in personal details
5. Set preferences
6. Complete onboarding → /onboarding/buyer
7. Access dashboard → /dashboard/buyer
```

### New Seller Journey
```
1. Visit / (Home)
2. Click "Join Now" → /auth/signup
3. Select "Seller" role
4. Fill in business details
5. Add category
6. Complete onboarding → /onboarding/seller
7. Access dashboard → /dashboard/seller
8. Add products and start selling
```

### Returning User Journey
```
1. Visit / (Home)
2. Click "Sign In" → /auth/login
3. Select role and enter credentials
4. Redirected to appropriate dashboard
   - Buyer → /dashboard/buyer
   - Seller → /dashboard/seller
```

---

## 🎯 Quick Actions by Role

### Buyer Quick Actions
From dashboard:
- View recent orders
- Check notifications
- Browse wishlist items
- Message merchants
- Track shipments
- View recommendations

### Seller Quick Actions
From dashboard:
- View sales analytics
- Manage inventory
- Process orders
- Check payouts
- Monitor ratings
- Add new products

---

## 🔐 Protected Routes (Future Implementation)

Once authentication is connected, these routes should be protected:
```
✅ /dashboard/buyer (requires buyer login)
✅ /dashboard/seller (requires seller login)
✅ /onboarding/seller (requires seller signup)
✅ /onboarding/buyer (requires buyer signup)
❌ /auth/login (should redirect if already logged in)
❌ /auth/signup (should redirect if already logged in)
```

---

## 💾 State Management

Currently using **React State** with `useState` and `useEffect`.

For production, consider:
- **Redux** or **Zustand** for global state
- **React Query** for server state
- **Next.js sessions** for authentication
- **localStorage** for user preferences

---

## 🚀 Deployment URL Structure

### Development
```
localhost:3000/
localhost:3000/auth/login
localhost:3000/dashboard/buyer
```

### Production Example
```
https://localhub.com/
https://localhub.com/auth/login
https://localhub.com/dashboard/buyer
```

---

## 📊 Component Hierarchy

```
Root Layout
├── Navbar
├── Home Page
│  ├── HeroSection (with auth links)
│  ├── StatsSection
│  ├── TestimonialSection
│  ├── PricingSection
│  ├── UsedBySection
│  ├── FAQSection
│  └── FooterSection
├── Auth Pages
│  ├── LoginPage
│  └── SignUpPage
├── Dashboards
│  ├── BuyerDashboard
│  └── SellerDashboard
└── Onboarding
   ├── BuyerOnboarding
   └── SellerOnboarding
```

---

## 🎨 Color Theme Reference

### Buyer Theme (Blue/Indigo)
- Primary: `#4F46E5` (Indigo-600)
- Secondary: `#2563EB` (Blue-600)
- Light BG: `from-blue-50 via-white to-indigo-50`

### Seller Theme (Emerald/Cyan)
- Primary: `#059669` (Emerald-600)
- Secondary: `#06B6D4` (Cyan-500)
- Light BG: `from-emerald-50 via-white to-cyan-50`

### Auth Theme (Purple/Pink)
- Primary: `#9333EA` (Purple-600)
- Secondary: `#EC4899` (Pink-600)
- Light BG: `from-purple-50 via-white to-pink-50`

---

## ⚡ Performance Tips

1. **Code Splitting**: Each dashboard is a separate page (auto-split by Next.js)
2. **Image Optimization**: Using emojis instead of images (faster load)
3. **Animation Performance**: CSS animations (GPU-accelerated)
4. **Lazy Loading**: Implement with `next/dynamic` for heavy components

---

## 📞 Support & Help

For questions about routes and features, refer to:
- `MARKETPLACE_FEATURES.md` - Detailed feature documentation
- Component files for implementation details
- `globals.css` for animation definitions

---

**Happy navigating! 🚀**
