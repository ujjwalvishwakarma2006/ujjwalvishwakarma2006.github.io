# Ujjwal Vishwakarma - Portfolio Website

A modern, elegant, and responsive portfolio website built with React, Vite, and Framer Motion. Features a dark/light theme toggle, smooth animations, and mobile-first design.

![Portfolio Preview](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Portfolio+Preview)

## 🌟 Features

- ✨ **Modern Design**: Clean, minimalist interface with smooth animations
- 🌓 **Dark/Light Theme**: Toggle between themes with persistent storage
- 📱 **Responsive Design**: Mobile-first approach, works on all devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎭 **Smooth Animations**: Powered by Framer Motion
- 🧭 **Easy Navigation**: Smooth scroll navigation between sections
- 📧 **Contact Form**: Functional contact form for inquiries
- 🔗 **Social Integration**: Links to GitHub, LinkedIn, and other platforms
- 📚 **Content Sections**: Projects, Experience, Education, Articles, and more

## 🏗️ Project Structure

```
myPortfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── FeaturedProjects/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── Navigation/
│   │   ├── ProfileLinks/
│   │   └── ScrollToTop/
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── Articles/
│   │   ├── Contact/
│   │   ├── Education/
│   │   ├── Experience/
│   │   ├── Home/
│   │   └── Projects/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .github/
│   └── copilot-instructions.md
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ujjwalvishwakarma2006/ujjwalvishwakarma2006.github.io
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🎨 Customization Guide

### 1. Personal Information

Update your personal information in the following files:

**Hero Section (`src/components/Hero/Hero.jsx`)**:
```jsx
// Update name, role, and description
<h1 className="hero-name">
  <span className="name-highlight">Your Name</span>
</h1>
```

**Contact Information (`src/pages/Contact/Contact.jsx`)**:
```jsx
// Update email, phone, and location
<p>your.email@example.com</p>
```

### 2. Social Links

Update social media links in:
- `src/components/Hero/Hero.jsx`
- `src/components/ProfileLinks/ProfileLinks.jsx`
- `src/components/Footer/Footer.jsx`

### 3. Projects

Add your projects in `src/components/FeaturedProjects/FeaturedProjects.jsx` and `src/pages/Projects/Projects.jsx`:

```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    technologies: ['React', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://yourproject.com'
  }
];
```

### 4. Experience & Education

Update your professional experience in `src/pages/Experience/Experience.jsx` and education in `src/pages/Education/Education.jsx`.

### 5. Theme Colors

Customize colors in `src/App.css`:

```css
:root {
  --accent-light: #your-color;
  --accent-dark: #your-color;
  /* Add more custom colors */
}
```

### 6. Content Sections

Each page component is modular and can be easily customized:
- **Home**: Main landing page with hero, featured projects, and stats
- **Projects**: Portfolio projects with filtering
- **Experience**: Professional work history
- **Education**: Academic background and certifications
- **Articles**: Blog posts and research papers
- **Contact**: Contact form and information

## 📦 Deployment

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy scripts to package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist",
       "predeploy": "npm run build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure custom domain (optional)

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **React** | UI library for building components |
| **Vite** | Build tool and development server |
| **Framer Motion** | Animation library |
| **React Router** | Client-side routing |
| **Lucide React** | Icon library |
| **CSS3** | Styling and animations |

## 🎯 Performance Features

- ⚡ **Lazy Loading**: Images and components load as needed
- 🗜️ **Code Splitting**: Automatic code splitting with Vite
- 📱 **Mobile Optimized**: Mobile-first responsive design
- 🎨 **CSS Optimization**: Optimized CSS with custom properties
- 🔄 **Smooth Animations**: GPU-accelerated animations

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Features

- Touch-friendly navigation
- Optimized images for mobile
- Fast loading on slow connections
- Responsive typography

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help customizing the portfolio:

- **Email**: ujjwal@example.com
- **GitHub**: [ujjwalvishwakarma](https://github.com/ujjwalvishwakarma)
- **LinkedIn**: [ujjwalvishwakarma](https://linkedin.com/in/ujjwalvishwakarma)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Placeholder images from [placeholder.com](https://placeholder.com/)

---

**Made with ❤️ by Ujjwal Vishwakarma**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
