# OliveWorld

A modern cleaning services platform that connects clients with professional cleaners for home and office cleaning services.

## 🌟 Features

- **Service Booking**: Easy booking system for various cleaning services
- **Professional Cleaners**: Verified and rated cleaning professionals
- **Location-Based Matching**: Connect with cleaners in your area
- **Secure Payments**: Company-managed payment system
- **Service Categories**: Home cleaning, office cleaning, and more

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Dera309/OliveWorld.git
cd OliveWorld

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build for production
npm run build:production

# Preview production build
npm run preview
```

## 📁 Project Structure

```
oliveworld/
├── public/                 # Static assets
├── src/                   # Source code
│   ├── components/        # React components
│   ├── sections/         # Page sections
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── docs/                 # Documentation
├── dist/                 # Build output
├── vite.config.js        # Vite configuration
├── package.json          # Dependencies and scripts
└── render.yaml          # Render deployment config
```

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **UI Components**: Base UI, Radix UI, Shadcn
- **Icons**: Lucide React
- **Fonts**: Fontsource (Playfair Display, Raleway, Geist)
- **Deployment**: Render (Static Site)

## 🎨 Design System

### Colors
- Primary: Olive green palette
- Secondary: Neutral grays
- Accent: Warm earth tones

### Typography
- Headings: Playfair Display
- Body: Raleway
- UI: Geist (variable font)

### Components
- Modular and reusable
- Consistent spacing and sizing
- Responsive design
- Dark/light theme support

## 📦 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for development |
| `npm run build:production` | Build optimized for production |
| `npm run preview` | Preview production build |
| `npm run type-check` | TypeScript type checking |

## 🚀 Deployment

### Render.com

The project is configured for automatic deployment to Render.com:

1. Connect your GitHub repository to Render
2. Create a new Static Site service
3. Render will automatically detect the `render.yaml` configuration
4. Deploy on every push to main branch

### Manual Deployment

```bash
# Build for production
npm run build:production

# Deploy the dist/ folder to your hosting service
```

## 🔧 Configuration

### Environment Variables

Create a `.env.production` file:

```env
NODE_ENV=production
VITE_APP_NAME=OliveWorld
VITE_APP_DESCRIPTION=A modern cleaning services platform
```

### Build Optimization

- **Code Splitting**: Automatic vendor chunk splitting
- **Minification**: ESBuild minification
- **Image Optimization**: WebP format support
- **Font Optimization**: Subset loading
- **Bundle Analysis**: Built-in bundle analyzer

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Development Guidelines

- Follow TypeScript best practices
- Use semantic HTML5
- Implement responsive design
- Write clean, maintainable code
- Test on multiple browsers
- Follow accessibility guidelines

## 🐛 Troubleshooting

### Common Issues

**Build fails on Render**
- Ensure all dependencies are in package.json
- Check that vite.config.js exists (not .ts)
- Verify render.yaml configuration

**TypeScript errors**
- Run `npm run type-check` locally
- Check tsconfig.app.json settings
- Ensure proper imports with correct extensions

**Styling issues**
- Verify Tailwind CSS is properly configured
- Check for conflicting styles
- Ensure responsive breakpoints are set

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- Create an issue in the GitHub repository
- Check the [documentation](./docs/)
- Review the [deployment guide](./DEPLOYMENT.md)

## 🌐 Live Demo

**🚀 Live Site**: https://oliveworld.onrender.com

Visit the deployed OliveWorld website to see the cleaning services platform in action!

---

Built with ❤️ using React, Vite, and Tailwind CSS
