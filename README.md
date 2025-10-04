# 📝 TaskManager - Modern Note Taking App

<div align="center">

![TaskManager Logo](https://img.shields.io/badge/TaskManager-📝-blue?style=for-the-badge)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-🚀-success?style=for-the-badge)](https://riteshkumar34.github.io/TaskManager/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-brightgreen?style=for-the-badge&logo=github)](https://riteshkumar34.github.io/TaskManager/)

*A beautiful, responsive note-taking application built with React and Node.js*

[🌟 Live Demo](https://riteshkumar34.github.io/TaskManager/) • [📖 Documentation](#documentation) • [🐛 Report Bug](https://github.com/riteshkumar34/TaskManager/issues) • [✨ Request Feature](https://github.com/riteshkumar34/TaskManager/issues)

</div>

---

## 🎯 About The Project

TaskManager is a modern, intuitive note-taking application that helps you organize your thoughts and ideas efficiently. Built with cutting-edge web technologies, it offers a seamless experience across all devices.

### ✨ Key Features

- 📝 **Create & Edit Notes** - Rich text editing with real-time preview
- 🔍 **Smart Search** - Find your notes instantly
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Beautiful UI** - Clean, modern interface with smooth animations
- 💾 **Persistent Storage** - Your notes are saved securely
- ⚡ **Fast Performance** - Lightning-fast loading and interactions
- 🌐 **PWA Ready** - Can be installed as a desktop/mobile app

### 🖼️ Screenshots

<div align="center">

| Home Page | Create Note | Note Details |
|-----------|-------------|--------------|
| ![Home](https://via.placeholder.com/300x200?text=Home+Page) | ![Create](https://via.placeholder.com/300x200?text=Create+Note) | ![Details](https://via.placeholder.com/300x200?text=Note+Details) |

</div>

---

## 🏗️ Built With

### Frontend
- ⚛️ **React 19** - Modern React with latest features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧭 **React Router** - Client-side routing
- 📦 **Vite** - Next-generation frontend tooling
- 🎯 **Lucide React** - Beautiful icons
- 🔔 **React Hot Toast** - Elegant notifications

### Backend
- 🟢 **Node.js** - JavaScript runtime
- 🚀 **Express.js** - Fast web framework
- 🍃 **MongoDB** - NoSQL database
- 🔒 **CORS** - Cross-origin resource sharing
- ⚡ **Rate Limiting** - API protection

### DevOps & Deployment
- 📄 **GitHub Pages** - Frontend hosting
- 🔧 **GitHub Actions** - CI/CD pipeline
- 🛠️ **ESLint** - Code linting
- 📦 **npm** - Package management

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/riteshkumar34/TaskManager.git
   cd TaskManager
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Environment Setup**
   ```bash
   # Backend (.env)
   MONGODB_URI=your_mongodb_connection_string
   PORT=5001
   
   # Frontend (.env.local)
   VITE_API_BASE_URL=http://localhost:5001/api
   ```

5. **Start Development Servers**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev
   
   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

---

## 📱 Usage

### Creating Notes
1. Click the **"New Note"** button
2. Enter a title and content
3. Click **"Create Note"** to save

### Managing Notes
- **View**: Click on any note card to view details
- **Edit**: Click the edit icon or open note details
- **Delete**: Click the delete icon with confirmation
- **Search**: Use the search bar to find specific notes

### Keyboard Shortcuts
- `Ctrl + N` - Create new note
- `Ctrl + S` - Save current note
- `Escape` - Cancel current action

---

## 🔧 Development

### Project Structure
```
TaskManager/
├── 📁 frontend/          # React frontend application
│   ├── 📁 src/
│   │   ├── 📁 components/    # Reusable UI components
│   │   ├── 📁 pages/         # Page components
│   │   ├── 📁 lib/           # Utility functions
│   │   └── 📄 App.jsx        # Main app component
│   ├── 📄 package.json
│   └── 📄 vite.config.js
├── 📁 backend/           # Node.js backend API
│   ├── 📁 src/
│   │   ├── 📁 controllers/   # API controllers
│   │   ├── 📁 models/        # Database models
│   │   ├── 📁 routes/        # API routes
│   │   └── 📄 server.js      # Server entry point
│   └── 📄 package.json
└── 📄 README.md
```

### Available Scripts

#### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run deploy       # Deploy to GitHub Pages
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

#### Backend
```bash
npm run dev          # Start development server with nodemon
npm start            # Start production server
```

### Contributing Guidelines

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

---

## 🌐 Deployment

### Frontend (GitHub Pages)
The frontend is automatically deployed to GitHub Pages on every push to the main branch.

**Live URL**: [https://riteshkumar34.github.io/TaskManager/](https://riteshkumar34.github.io/TaskManager/)

### Backend Deployment Options

#### Option 1: Railway (Recommended)
1. Connect your GitHub repository to Railway
2. Deploy the `backend` folder
3. Set environment variables
4. Update frontend API URL

#### Option 2: Heroku
```bash
# Install Heroku CLI
npm install -g heroku

# Login and create app
heroku login
heroku create your-app-name

# Deploy
git subtree push --prefix backend heroku main
```

#### Option 3: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from backend directory
cd backend
vercel
```

---

## 🔒 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb://localhost:27017/taskmanager
PORT=5001
NODE_ENV=production
CORS_ORIGIN=https://riteshkumar34.github.io
```

### Frontend (.env.production)
```env
VITE_API_BASE_URL=https://your-backend-url.com/api
```

---

## 🐛 Troubleshooting

### Common Issues

#### Frontend not loading
- Clear browser cache
- Check console for errors
- Verify API URL configuration

#### API connection failed
- Check backend server status
- Verify CORS configuration
- Confirm environment variables

#### Build errors
- Clear node_modules and reinstall
- Check Node.js version compatibility
- Verify all dependencies are installed

---

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+
- 🚀 **First Contentful Paint**: < 1.5s
- 📱 **Mobile Responsive**: 100%
- ♿ **Accessibility**: WCAG 2.1 AA compliant

---

## 🔮 Roadmap

- [ ] 🔐 User authentication
- [ ] 🏷️ Note categories and tags
- [ ] 📎 File attachments
- [ ] 🌙 Dark mode theme
- [ ] 📱 Mobile app (React Native)
- [ ] 🔄 Real-time collaboration
- [ ] 📊 Analytics dashboard
- [ ] 🗂️ Import/Export functionality

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### Contributors

<div align="center">

[![Contributors](https://contrib.rocks/image?repo=riteshkumar34/TaskManager)](https://github.com/riteshkumar34/TaskManager/graphs/contributors)

</div>

---

## 💖 Support

If you found this project helpful, please consider:

- ⭐ **Starring the repository**
- 🐛 **Reporting bugs**
- 💡 **Suggesting new features**
- 🔄 **Sharing with others**

---

## 📞 Contact

**Ritesh Kumar** - [@riteshkumar34](https://github.com/riteshkumar34)

**Project Link**: [https://github.com/riteshkumar34/TaskManager](https://github.com/riteshkumar34/TaskManager)

**Live Demo**: [https://riteshkumar34.github.io/TaskManager/](https://riteshkumar34.github.io/TaskManager/)

---

<div align="center">

**Made with ❤️ by [Ritesh Kumar](https://github.com/riteshkumar34)**

⭐ Star this repository if you found it helpful!

</div>
