# 🎨 TaskManager Frontend

This is the frontend application for TaskManager - a modern note-taking app built with React and Vite.

## ✨ Features

- ⚛️ **React 19** - Latest React with concurrent features
- ⚡ **Vite** - Lightning-fast development and builds
- 🎨 **Tailwind CSS + DaisyUI** - Beautiful, responsive design
- 🧭 **React Router DOM** - Client-side routing with hash routing for GitHub Pages
- 🔔 **React Hot Toast** - Elegant notifications
- 🎯 **Lucide React** - Beautiful, consistent icons
- 📱 **PWA Ready** - Progressive Web App capabilities

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run preview      # Preview production build locally

# Production
npm run build        # Build optimized production bundle
npm run deploy       # Build and deploy to GitHub Pages

# Code Quality
npm run lint         # Run ESLint for code quality checks
```

## 🏗️ Project Structure

```
src/
├── 📁 components/      # Reusable UI components
│   ├── 📄 Navbar.jsx      # Navigation header
│   ├── 📄 NoteCard.jsx    # Individual note display
│   └── 📄 NotesNotFound.jsx # Empty state component
├── 📁 pages/          # Route-based page components
│   ├── 📄 HomePage.jsx     # Main notes listing page
│   ├── 📄 CreatePage.jsx   # Note creation form
│   └── 📄 NoteDetailPage.jsx # Note viewing/editing
├── 📁 lib/            # Utility functions and configurations
│   ├── 📄 axios.js         # API client configuration
│   ├── 📄 localStorage.js  # Local storage helper functions
│   └── 📄 utils.js         # General utility functions
├── 📄 App.jsx         # Main application component
├── 📄 main.jsx        # Application entry point
└── 📄 index.css       # Global styles and Tailwind imports
```

## 🎨 Styling

This project uses:
- **Tailwind CSS** for utility-first styling
- **DaisyUI** for pre-built component themes
- **Custom CSS** for specific animations and layouts

### Color Scheme
- Primary: Indigo/Blue tones
- Secondary: Green accent
- Background: Light gray gradients
- Text: Dark gray with good contrast

## 🔌 API Integration

The frontend communicates with the backend through:
- **Axios** for HTTP requests
- **Environment variables** for API endpoint configuration
- **LocalStorage fallback** for demo functionality when backend is unavailable

### Environment Variables

```bash
# .env.local (development)
VITE_API_BASE_URL=http://localhost:5001/api

# .env.production (production)
VITE_API_BASE_URL=https://your-backend-url.com/api
```

## 🚀 Deployment

### GitHub Pages (Current)
The app is configured for GitHub Pages deployment with:
- Hash-based routing for compatibility
- Optimized build process
- Automatic deployment via GitHub Actions

```bash
# Deploy to GitHub Pages
npm run deploy
```

### Other Deployment Options

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## 🔧 Configuration

### Vite Configuration
The `vite.config.js` includes:
- React plugin for JSX support
- Tailwind CSS plugin
- Base path configuration for GitHub Pages
- Build optimization settings

### Router Configuration
Using `HashRouter` for GitHub Pages compatibility:
- Home: `/#/`
- Create: `/#/create`
- Note Detail: `/#/note/:id`

## 🧪 Development Tips

### Hot Reload
Vite provides instant hot module replacement (HMR) for:
- React components
- CSS changes
- Configuration updates

### Debugging
- React DevTools for component inspection
- Browser DevTools for network and performance
- Console logging for development debugging

### Code Quality
- ESLint configuration for consistent code style
- Prettier integration for code formatting
- Git hooks for pre-commit checks

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔗 Related

- [Backend Repository](../backend) - Node.js API server
- [Live Demo](https://riteshkumar34.github.io/TaskManager/) - Production deployment
- [GitHub Repository](https://github.com/riteshkumar34/TaskManager) - Source code

---

Built with ❤️ using React + Vite
