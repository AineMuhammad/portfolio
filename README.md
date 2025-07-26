# Ain e Muhammad - Portfolio

A modern, professional portfolio website built with React, TypeScript, and React Three Fiber. Features a beautiful 3D background, interactive elements, and a responsive design with light/dark theme support.

## 🚀 Features

- **3D Background**: Animated floating geometric shapes using React Three Fiber
- **Theme Toggle**: Light and dark theme support with smooth transitions
- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Elements**: Hover effects and smooth animations throughout
- **Professional Sections**: About, Experience, Skills, Projects, and Contact
- **GitHub Integration**: Ready for GitHub API integration to showcase real projects
- **Modern UI**: Clean, corporate design with excellent UX

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **3D Graphics**: React Three Fiber, Three.js
- **Styling**: CSS-in-JS with CSS Variables for theming
- **Icons**: Lucide React
- **Animations**: Framer Motion (ready for implementation)
- **Build Tool**: Create React App

## 📦 Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.tsx` - Name and title
- `src/components/About.tsx` - Personal description and stats
- `src/components/Experience.tsx` - Work experience
- `src/components/Contact.tsx` - Contact information and social links

### GitHub Integration

To integrate with your GitHub account:

1. Replace the placeholder projects in `src/components/Projects.tsx` with actual GitHub API calls
2. Update the GitHub username in the social links
3. Add your GitHub API token for authenticated requests (optional)

### Styling

The portfolio uses CSS variables for theming. You can customize colors in `src/index.css`:

- Light theme colors are in `:root`
- Dark theme colors are in `[data-theme="dark"]`

## 📱 Sections

### Hero

- Animated introduction with call-to-action buttons
- Smooth scroll indicator

### About

- Personal description and background
- Education and language information
- Quick stats

### Experience

- Timeline-based work experience
- Company details and achievements
- Resume download option

### Skills

- Categorized skills display
- Interactive 3D visualization
- Hover effects on skill tags

### Projects

- 3D project cards with rotation
- GitHub integration ready
- Project statistics and topics

### Contact

- Contact form with validation
- Contact information cards
- Social media links

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

1. Add `"homepage": "https://yourusername.github.io/portfolio"` to `package.json`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. Deploy: `npm run deploy`

### Deploy to Netlify/Vercel

- Connect your GitHub repository
- Set build command: `npm run build`
- Set publish directory: `build`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

Ain e Muhammad

- Email: ainemuhammad903@gmail.com
- Phone: +92 3365596394
- Location: Islamabad, Pakistan

---

Built with ❤️ using React and React Three Fiber
