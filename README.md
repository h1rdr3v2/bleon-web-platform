# Bleon Co Ltd - Technology Solutions Portfolio

A modern, responsive portfolio website showcasing Bleon Co Ltd's technology services, VTU solutions, and featured projects. Built with Next.js 15, React 19, and Tailwind CSS.

## 🚀 Overview

Bleon Co Ltd is a leading technology company based in Umuahia, Abia State, Nigeria, specializing in innovative digital solutions, VTU services, and cutting-edge technology services. This portfolio website serves as a comprehensive showcase of our capabilities and completed projects.

## ✨ Features

### Core Services
- **VTU Services** - Reliable airtime and data services for all networks
- **Web Development** - Custom websites and web applications
- **Cybersecurity** - Comprehensive security solutions
- **Digital Transformation** - End-to-end modernization services
- **IT Consulting** - Strategic technology consulting
- **Data Analytics** - Business intelligence solutions
- **Payment Solutions** - Secure financial technology
- **Chatbot Development** - Intelligent automation solutions

### Featured Projects
- **MyCGPA** - Comprehensive GPA calculator and academic management tool
- **AirlyPay** - Advanced VTU service platform with innovative giveaway features

### Technical Features
- Responsive design optimized for all devices
- Smooth animations and transitions using Framer Motion
- Modern UI/UX with Tailwind CSS
- SEO optimized with Next.js metadata
- Fast performance with Next.js 15 and Turbopack

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2
- **Language**: TypeScript 5
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion 12.23.12
- **Icons**: Lucide React 0.542.0
- **Development**: ESLint, Turbopack

## 📁 Project Structure

```
bleon-nextjs/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── airlypay/          # AirlyPay project pages
│   │   ├── mycgpa/            # MyCGPA project pages
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   └── components/            # Reusable components
│       ├── About.tsx          # About section
│       ├── AnimatedWrapper.tsx # Animation wrapper
│       ├── Contact.tsx        # Contact section
│       ├── Footer.tsx         # Footer component
│       ├── Hero.tsx           # Hero section
│       ├── Navbar.tsx         # Navigation
│       └── Services.tsx       # Services showcase
├── public/                    # Static assets
├── package.json               # Dependencies
└── tailwind.config.js        # Tailwind configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bleon-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Key Components

### Hero Section
- Compelling headline with gradient text effects
- Company statistics (500+ clients, 1000+ projects, 24/7 support)
- Call-to-action buttons
- Animated background patterns

### Services Showcase
- Grid layout of 8 core services
- Interactive hover effects
- Icon-based visual representation
- Detailed service descriptions

### Featured Projects
- **MyCGPA**: Academic management tool with GPA calculation
- **AirlyPay**: VTU platform with giveaway features
- Project-specific landing pages
- Feature highlights and contact information

### Navigation & Layout
- Responsive navigation bar
- Smooth scrolling between sections
- Mobile-optimized design
- Consistent branding throughout

## 🎨 Design Features

- **Color Scheme**: Blue and purple gradients with professional grays
- **Typography**: Inter font family for modern readability
- **Animations**: Smooth scroll animations and hover effects
- **Responsiveness**: Mobile-first design approach
- **Accessibility**: Semantic HTML and proper contrast ratios

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Customization

### Adding New Services
Edit `src/components/Services.tsx` to add new services to the grid.

### Adding New Projects
1. Create a new project page in `src/app/`
2. Add project details to the projects array in `Services.tsx`
3. Update navigation if needed

### Styling Changes
- Modify `tailwind.config.js` for theme customization
- Edit `src/app/globals.css` for global styles
- Update component-specific styles in individual component files

## 📊 Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Core Web Vitals**: Fast loading and smooth interactions
- **Bundle Size**: Optimized with Next.js 15 and Turbopack
- **Image Optimization**: Next.js Image component for optimal delivery

## 📞 Contact & Support

- **Company**: Bleon Co Ltd
- **Location**: Umuahia, Abia State, Nigeria
- **Email**: support@bleon.co

## 📄 License

This project is proprietary software owned by Bleon Co Ltd. All rights reserved.

## 🤝 Contributing

This is a company portfolio website. For business inquiries or collaboration opportunities, please contact us through the channels listed above.

## 📈 Future Enhancements

- Blog section for company updates
- Client testimonials and case studies
- Interactive project demos
- Multi-language support
- Advanced analytics dashboard
- E-commerce integration for services

---

**Built with ❤️ by Bleon Co Ltd**

*Transforming businesses through innovative technology solutions*
