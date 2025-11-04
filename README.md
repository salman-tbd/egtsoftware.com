# EGT Software Website

A modern, SEO-optimized Next.js website for EGT Software - IT Analytics & Business Intelligence Solutions.

## 🚀 Features

- ✅ **SEO Optimized** - Complete metadata, structured data, sitemap, and robots.txt
- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Performance** - Built with Next.js 16 for optimal speed
- ✅ **Accessibility** - WCAG compliant with proper ARIA labels
- ✅ **Modern UI/UX** - Beautiful gradient designs and smooth animations
- ✅ **Type Safety** - Full TypeScript support

## 📋 Project Information

- **Domain**: egtsoftware.com
- **Industry**: IT/Analytics
- **Established**: 2003
- **Tech Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
egtsoftware/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── privacy/            # Privacy policy page
│   │   ├── terms/              # Terms of service page
│   │   ├── sitemap.ts          # XML sitemap
│   │   ├── robots.ts           # Robots.txt
│   │   └── opengraph-image.tsx # Open Graph image
│   └── components/
│       ├── Header.tsx          # Navigation header
│       └── Footer.tsx          # Site footer
├── public/                     # Static assets
└── package.json
```

## 🎨 Sections

1. **Hero Section** - Compelling introduction with key statistics
2. **Services Section** - 6 core IT analytics services with detailed features
3. **About Section** - Company history and achievements since 2003
4. **Contact Section** - Contact form and business information
5. **Footer** - Links, social media, and company details

## 🔧 Configuration

### SEO Settings

Update the following in `src/app/layout.tsx`:
- Meta descriptions
- Open Graph images
- Twitter cards
- Google verification code

### Contact Information

Update contact details in:
- `src/components/Footer.tsx`
- `src/app/page.tsx` (Contact section)

## 📊 Analytics

To add analytics:
1. Update Google Analytics ID in layout.tsx
2. Add tracking scripts as needed
3. Configure Google Tag Manager if required

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
Build the project and deploy the `.next` folder along with:
- `package.json`
- `public` folder
- `.env` files (if needed)

## 📝 Content Updates

### Updating Services
Edit the services array in `src/app/page.tsx`

### Changing Colors
Modify CSS variables in `src/app/globals.css`

### Adding Pages
Create new folders under `src/app/` with `page.tsx` files

## 🔒 Security

- All forms should be validated server-side
- Environment variables for sensitive data
- Regular dependency updates
- HTTPS required in production

## 📄 License

© 2003-2025 EGT Software. All rights reserved.

## 📞 Support

For questions or support:
- Email: info@egtsoftware.com
- Website: https://egtsoftware.com

---

**Built with ❤️ by the EGT Software Team**
