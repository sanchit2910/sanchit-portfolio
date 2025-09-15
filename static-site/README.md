# Sanchit Khandelwal - Portfolio Website

A static portfolio website for Sanchit Khandelwal, Android Developer with 4+ years of experience.

## Features

- 🌙 Dark/Light theme toggle
- 📱 Fully responsive design
- ⚡ Smooth scrolling navigation
- 🎨 Modern UI with animations
- 📧 Contact form integration
- 🚀 Static site - fast loading

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, grid, flexbox
- **Vanilla JavaScript** - Theme toggle, navigation, form handling
- **Lucide Icons** - Beautiful icon library
- **Google Fonts** - Inter & Poppins typography

## Setup Instructions

1. **Clone or download** the static-site folder
2. **Update contact form**: Replace `your-form-id` in `index.html` with your actual Formspree form ID
3. **Deploy**: Upload to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Contact Form Setup

The contact form uses [Formspree](https://formspree.io/) for handling form submissions:

1. Sign up at [formspree.io](https://formspree.io/)
2. Create a new form
3. Copy your form ID 
4. Replace `your-form-id` in the form action URL in `index.html`

## File Structure

```
static-site/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles and theme variables
├── js/
│   └── script.js       # JavaScript functionality
├── assets/
│   ├── profile.jpg     # Profile image
│   └── favicon.ico     # Site favicon
└── README.md           # This file
```

## Key Features Implemented

### Theme System
- CSS custom properties for consistent theming
- JavaScript toggle with localStorage persistence
- Smooth transitions between themes

### Navigation
- Fixed header with backdrop blur
- Active section highlighting
- Mobile hamburger menu
- Smooth scrolling to sections

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 1024px
- Grid layouts that adapt to screen size

### Performance
- Vanilla JavaScript (no frameworks)
- Optimized images and assets
- Minimal dependencies

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Deployment

This is a static site that can be deployed to any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Import from Git repository
- **GitHub Pages**: Push to repository and enable Pages
- **AWS S3**: Upload files to S3 bucket with static hosting
- **Any web server**: Upload files to public directory

## Customization

### Colors
Edit CSS custom properties in `css/styles.css` under `:root` and `[data-theme="dark"]`

### Content
Update content directly in `index.html`

### Styling
Modify styles in `css/styles.css`

### Functionality
Add features in `js/script.js`

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Sanchit Khandelwal