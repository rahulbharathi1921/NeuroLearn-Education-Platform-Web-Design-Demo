# 🧠 NeuroLearn - Futuristic E-Learning Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-2.0.0-brightgreen)]()
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-orange)]()

> Enterprise-grade e-learning platform with AI personalization, 3D virtual campus, gamification, and social learning features.

## ✨ Features

### 🎓 Learning Experience
- **Course Catalog** - Browse courses by category with filtering and search
- **AI-Powered Recommendations** - Personalized course suggestions based on learning patterns
- **Progress Tracking** - Visual progress circles and statistics
- **Skill Badges** - Earn verified credentials for completed skills

### 🎮 Gamification
- **XP System** - Earn experience points for learning activities
- **Achievements** - Unlock badges and rewards
- **Daily Challenges** - Complete tasks for bonus XP
- **Leaderboards** - Compete with other learners
- **Learning Streaks** - Maintain daily learning habits

### 🏫 Virtual Campus
- **3D Canvas** - Interactive virtual learning environment
- **Hotspots** - Navigate different learning zones (AI Lab, Library, Arena, Studio)
- **Immersive Experience** - Visual exploration of course materials

### 👥 Social Learning
- **Discussion Feed** - Share thoughts and ask questions
- **Study Groups** - Collaborate with peers
- **Peer Q&A** - Community-driven question answering
- **Live Activity** - Real-time learning activity feed

### 🏢 Enterprise Features
- **Multi-Tenant Portals** - Separate portals for Engineering, Sales, HR, Leadership
- **Analytics Dashboard** - Engagement heatmaps, completion rates, performance comparison
- **API Connectivity** - REST API, GraphQL, Webhooks, SSO/SAML support
- **Compliance** - GDPR, ISO 27001, SOC 2 Type II, WCAG 2.1 AA compliant

### 📱 Progressive Web App
- **Offline Access** - Learn without internet connection
- **Push Notifications** - Get reminders and updates
- **Install to Home Screen** - App-like experience
- **Background Sync** - Automatic progress synchronization

### ♿ Accessibility
- **High Contrast Mode** - Enhanced visibility
- **Font Size Controls** - Adjustable text sizes
- **Reduced Motion** - Disable animations
- **Keyboard Navigation** - Full keyboard support
- **Screen Reader Support** - ARIA labels and live regions

### 🎨 Dual Theme System
- **Dark Theme** - Cyberpunk-inspired neon design
- **Light Theme** - Professional enterprise colors
- **Smooth Transitions** - Animated theme switching

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/neurolearn.git
cd neurolearn
```

2. **Start a local server**
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

3. **Open in browser**
```
http://localhost:8000/src/index.html
```

## 📁 Project Structure

```
NeuroLearn/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   ├── css/
│   │   ├── variables.css      # CSS custom properties & themes
│   │   ├── base.css           # Reset & base styles
│   │   ├── components.css     # Reusable UI components
│   │   ├── layout.css         # Navigation, footer, grid
│   │   ├── sections.css       # Page section styles
│   │   ├── animations.css     # Keyframe animations
│   │   ├── responsive.css     # Media queries
│   │   └── styles.css         # Main CSS entry point
│   ├── js/
│   │   ├── modules/
│   │   │   ├── theme.js       # Theme switching
│   │   │   ├── navigation.js  # Navbar & menu
│   │   │   ├── courses.js     # Course catalog
│   │   │   ├── dashboard.js   # Progress tracking
│   │   │   ├── gamification.js # XP & achievements
│   │   │   ├── campus.js      # 3D virtual campus
│   │   │   ├── ai-engine.js   # AI recommendations
│   │   │   ├── social.js      # Social features
│   │   │   ├── enterprise.js  # Enterprise portal
│   │   │   ├── pwa.js         # PWA functionality
│   │   │   ├── accessibility.js # A11y features
│   │   │   └── performance.js # Performance monitoring
│   │   ├── utils/
│   │   │   ├── helpers.js     # Utility functions
│   │   │   └── constants.js   # App constants
│   │   └── app.js             # Main entry point
│   └── index.html             # Main HTML file
├── public/
│   ├── manifest.json          # PWA manifest
│   └── sw.js                  # Service worker
├── backup.html                # Backup of original file
├── README.md                  # Project documentation
└── .gitignore                 # Git ignore rules
```

## 🛠️ Technologies

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **JavaScript (ES6+)** - Modules, Classes, Async/Await
- **Canvas API** - 3D virtual campus rendering
- **Service Workers** - Offline functionality
- **Web App Manifest** - PWA installation

## 🎨 Color Palette

### Dark Theme (Cyberpunk)
- Background: `#0a0a14`
- Accent Blue: `#00f3ff`
- Accent Pink: `#ff00ff`
- Accent Purple: `#9d00ff`
- Accent Orange: `#ff6b00`

### Light Theme (Enterprise)
- Background: `#ffffff`
- Accent Blue: `#0066ff`
- Accent Purple: `#6b4cff`
- Accent Pink: `#e91e8c`
- Text: `#1a1a2e`

## 📊 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for Orbitron and Inter typography
- Unsplash for course images
- The open-source community for inspiration

## 📞 Contact

- **GitHub**: [@your-username](https://github.com/your-username)
- **Email**: contact@neurolearn.com
- **Website**: [neurolearn.com](https://neurolearn.com)

---

Made with 💙 by the NeuroLearn Team