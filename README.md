# Akaliza Racia - Professional Portfolio

A modern, responsive, and professional portfolio website built with React.js featuring smooth animations, dark mode support, and a clean design.

## Features

✨ **Modern Design** - Clean and professional UI with gradient backgrounds and smooth transitions
🎨 **Dark Mode** - Built-in dark/light theme toggle
📱 **Responsive** - Fully responsive design that works on all devices
⚡ **Fast Performance** - Optimized React components
🔍 **SEO Friendly** - Meta tags and proper semantic HTML
✅ **Contact Form** - Integrated contact form for inquiries
🎯 **Smooth Navigation** - Sticky navigation with smooth scrolling

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Education.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── data/
│   │   └── portfolioData.js
│   ├── styles/
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── Navigation.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Education.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to project directory:**
   ```bash
   cd c:\Users\RC\Desktop\portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   - The app will automatically open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization Guide

### 1. Update Personal Information

Edit `src/data/portfolioData.js`:

```javascript
export const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your Location",
  bio: "Your bio here...",
  // ... rest of the data
};
```

### 2. Add Your Photo

Replace the placeholder in `About` component with your image:
- Add your image to `public/images/` folder
- Update the image source in `src/components/About.js`

### 3. Update Projects

Edit the `projects` array in `portfolioData.js`:

```javascript
projects: [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    link: "https://project-link.com",
    image: "path/to/image.jpg"
  },
  // ... more projects
]
```

### 4. Customize Colors

Edit CSS variables in `src/styles/index.css`:

```css
:root {
  --primary-color: #2563eb;      /* Main brand color */
  --secondary-color: #1e40af;    /* Dark variant */
  --accent-color: #60a5fa;       /* Light variant */
  --text-dark: #1f2937;
  --text-light: #f9fafb;
  --bg-light: #f3f4f6;
  --bg-white: #ffffff;
}
```

### 5. Update Social Links

Edit social links in `portfolioData.js`:

```javascript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  twitter: "https://twitter.com/yourhandle",
  email: "your.email@example.com"
}
```

## Technologies Used

- **React.js** - UI library
- **CSS3** - Styling with custom properties and animations
- **JavaScript ES6+** - Modern JavaScript
- **Responsive Design** - Mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimizations

✅ Code splitting with lazy loading
✅ CSS optimizations
✅ Smooth animations with GPU acceleration
✅ Responsive images
✅ Semantic HTML

## Features Breakdown

### Navigation
- Sticky navigation bar
- Smooth scroll links
- Mobile hamburger menu
- Dark/light theme toggle

### Hero Section
- Full-screen hero with gradient background
- Animated text and buttons
- Floating background elements
- Scroll indicator

### About Section
- Personal information
- Contact details
- Profile image placeholder

### Skills Section
- Organized by categories (Frontend, Backend, Tools, etc.)
- Gradient badges with hover effects
- Responsive grid layout

### Projects Section
- Project cards with images
- Technology tags
- Hover overlay with project link
- Responsive grid

### Education Section
- Timeline view
- Organized chronologically
- Interactive markers
- Responsive layout

### Contact Section
- Contact information cards
- Contact form with validation
- Social links
- Gradient background

### Footer
- Copyright information
- Social links
- Clean, minimal design

## Future Enhancements

- [ ] Blog section
- [ ] Case studies
- [ ] Testimonials
- [ ] Newsletter signup
- [ ] Search functionality
- [ ] Blog search
- [ ] Comment system

## License

This project is open source and available under the MIT License.

## Author

Akaliza Racia - [Portfolio](https://your-portfolio.com)

---

**Happy coding! Feel free to customize and deploy your portfolio.** 🚀
