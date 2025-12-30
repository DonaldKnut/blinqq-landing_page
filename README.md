# 🚀 Blinqq Landing Page

A modern, world-class landing page for **Blinqq** - an all-in-one fintech platform for instant digital payments, investments, and financial growth.

![Blinqq Landing Page](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 Design & UI
- **Modern, sleek design** inspired by premium fintech platforms
- **Smooth animations** with Intersection Observer for scroll-triggered effects
- **Gradient backgrounds** with animated blobs and glassmorphism effects
- **Responsive design** - Mobile-first approach, works perfectly on all devices
- **Custom typography** - Poppins for body text, Space Grotesk for headings
- **Beautiful color scheme** - Emerald, blue, and purple gradients

### 🎯 Sections

1. **Hero Section**
   - Split layout with compelling headline
   - Interactive phone mockup with app preview
   - Animated background elements
   - Dual CTAs (Download App + Learn More)
   - Trust indicators with user avatars

2. **Stats Section**
   - Animated stat cards with hover effects
   - Key metrics: 100K+ users, ₦10B+ transactions, 150+ countries, 99.9% uptime

3. **Features Section**
   - 12 feature cards with gradient icons
   - Hover animations and color transitions
   - Staggered entrance animations

4. **Benefits Section**
   - Three main benefit cards
   - Feature lists with checkmarks
   - Gradient backgrounds on hover

5. **How It Works**
   - 4-step onboarding process
   - Connecting line visualization (desktop)
   - Number badges with gradients

6. **CTA Section**
   - Download buttons for App Store & Google Play
   - Trust indicators
   - Animated gradient background

7. **Footer**
   - Organized link columns
   - Social media links
   - Contact information

### 🎭 Animations

- **Scroll-triggered animations** using Intersection Observer
- **Hover effects** on interactive elements
- **Floating animations** for decorative elements
- **Gradient shifts** and color transitions
- **Blob animations** for background elements
- **Smooth transitions** throughout

## 🛠️ Tech Stack

- **[Next.js 16.1](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/blinqq-landing.git
   cd blinqq-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
blinqq-landing/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main page component
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── Stats.tsx            # Statistics section
│   ├── Features.tsx        # Features grid
│   ├── Benefits.tsx         # Benefits section
│   ├── HowItWorks.tsx       # How it works steps
│   ├── CTA.tsx              # Call-to-action section
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.mjs       # PostCSS configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    green: "#16a34a",
    orange: "#f97316",
    blue: "#3b82f6",
  },
}
```

### Content

Update content in the component files:
- `components/Hero.tsx` - Hero section content
- `components/Features.tsx` - Feature list
- `components/Benefits.tsx` - Benefits content

### Fonts

Fonts are configured in `app/layout.tsx`. Currently using:
- **Poppins** - Body text
- **Space Grotesk** - Headings

## 🌐 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Other Platforms

Build the project and deploy the `.next` folder to any static hosting service.

## 📱 Features Showcase

### Blinqq Platform Features

- 💸 **Instant Transfers** - Send money using @username
- 💰 **Multi-Currency Wallets** - NGN, USD, EUR, GBP, USDC, USDT
- 💳 **Bill Payments** - Utilities, airtime, expenses
- 📈 **Invest & Earn** - Investment plans with returns
- 🎁 **Earn Rewards** - Cashback and loyalty points
- 🌍 **Crypto Support** - USDC/USDT with multi-network
- 🔒 **Bank-Level Security** - 2FA, biometric, fraud detection
- ⚡ **Lightning Fast** - Instant processing
- 💵 **Loans & Credit** - Flexible borrowing options
- 🔐 **Fund Locking** - Savings goals
- 📊 **Analytics Dashboard** - Track spending and earnings
- 📱 **Mobile First** - Beautiful mobile app

## 🎯 Performance

- ⚡ **Fast Loading** - Optimized with Next.js
- 🎨 **Smooth Animations** - 60fps animations
- 📱 **Mobile Optimized** - Responsive design
- ♿ **Accessible** - Semantic HTML and ARIA labels
- 🔍 **SEO Friendly** - Meta tags and structured data

## 📄 License

This project is private and proprietary.

## 👥 Contributing

This is a private project. For inquiries, please contact the repository owner.

## 📞 Contact

- **Email**: support@blinqq.com
- **Phone**: +234 800 BLINQQ
- **Location**: Lagos, Nigeria

---

Built with ❤️ for Blinqq
