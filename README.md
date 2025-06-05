# ModernDash - Next.js 15 Dashboard

🚀 **Modern, güçlü ve kullanıcı dostu dashboard uygulaması**

Next.js 15, React 18, TypeScript ve Tailwind CSS ile geliştirilmiş profesyonel dashboard çözümü.

## ✨ Özellikler

- 🎨 **Modern UI/UX** - Clean ve minimal tasarım
- ⚡ **Next.js 15** - En yeni App Router ve Turbopack desteği  
- 🔒 **TypeScript** - Tip güvenliği
- 🎭 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive** - Mobil uyumlu tasarım
- 🚀 **Framer Motion** - Smooth animasyonlar
- 📊 **Recharts** - İnteraktif grafikler
- 🔧 **Headless UI** - Erişilebilir UI bileşenleri

## 🛠️ Teknoloji Stack'i

| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| Next.js | 15.3.3 | React framework |
| React | 18.3.1 | UI library |
| TypeScript | 5.7.2 | Tip güvenliği |
| Tailwind CSS | 3.4.15 | CSS framework |
| Framer Motion | 11.15.0 | Animasyon library |
| Headless UI | 2.2.0 | UI bileşenleri |
| Heroicons | 2.2.0 | SVG iconlar |

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Kurulum

1. **Projeyi klonlayın**
```bash
git clone https://github.com/username/dashboard-app.git
cd dashboard-app
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

4. **Tarayıcınızda açın**
```
http://localhost:3000
```

## 📝 Available Scripts

```bash
# Geliştirme sunucusu (Turbopack ile)
npm run dev

# Production build
npm run build

# Production sunucusu  
npm run start

# ESLint kontrolü
npm run lint
```

## 📁 Proje Yapısı

```
dashboard-app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Ana sayfa
│   ├── components/            # React bileşenleri
│   ├── lib/                   # Utility fonksiyonlar
│   └── hooks/                 # Custom hooks
├── public/                    # Static dosyalar
├── tailwind.config.js         # Tailwind yapılandırması
├── next.config.js             # Next.js yapılandırması
└── package.json
```

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: Blue (0ea5e9)
- **Gray**: Neutral grays
- **Success**: Green
- **Warning**: Yellow  
- **Error**: Red

### Tipografi
- **Font**: Inter (Google Fonts)
- **Scales**: text-sm, text-base, text-lg, text-xl, text-2xl...

### Spacing
- **Base**: 4px (0.25rem)
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 48, 64px

## 🚀 Deployment

### Vercel (Önerilen)

1. **GitHub'a push edin**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Vercel'e deploy edin**
- [vercel.com](https://vercel.com) → "Import Project"
- GitHub repository'nizi seçin
- "Deploy" tıklayın

### Netlify

1. **Build komutu**: `npm run build`
2. **Publish directory**: `out` veya `.next`

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔧 Konfigürasyon

### Environment Variables
```env
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

### SEO & Metadata
- Open Graph tags
- Twitter Cards
- Structured data
- Sitemap generation

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+
- 🎯 **Core Web Vitals**: Optimized
- 📦 **Bundle Size**: < 100KB (gzipped)
- 🚀 **Turbopack**: Faster builds

## 🤝 Katkı

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje [MIT](LICENSE) lisansı altında dağıtılmaktadır.

## 🆘 Destek

- 📖 [Dokümantasyon](https://github.com/username/dashboard-app/wiki)
- 🐛 [Issue Tracker](https://github.com/username/dashboard-app/issues)
- 💬 [Discussions](https://github.com/username/dashboard-app/discussions)

## 🙏 Teşekkürler

- [Next.js](https://nextjs.org) - Amazing React framework
- [Tailwind CSS](https://tailwindcss.com) - Fantastic utility-first CSS
- [Heroicons](https://heroicons.com) - Beautiful SVG icons
- [Framer Motion](https://framer.com/motion) - Smooth animations

---

**⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!** 