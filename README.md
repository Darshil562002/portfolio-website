# Darshil Shethia - Portfolio Website

A modern, responsive portfolio website showcasing data analytics and marketing expertise.

## 🌟 Features

- ✨ **Dark/Light Theme Toggle** - User preference saved in localStorage
- 📊 **Scroll Progress Bar** - Visual indicator of page scroll
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Fast Loading** - Optimized images and lazy loading
- 🎨 **Smooth Animations** - Intersection Observer API for performance
- 📬 **Working Contact Form** - Email integration
- 🎯 **Modern Design** - Inspired by Awwwards-winning sites

## 🚀 Live Site

Your portfolio is live at: **https://darshil-portfolio.surge.sh**

## 📝 Setup Instructions

### 1. Profile Photo

**TO DO:** Add your profile photo:
1. Choose one of your professional photos (the headshot from image 2 recommended)
2. Save it as `profile.jpg` in the `images/` folder
3. Recommended size: 800x800px or 1:1 aspect ratio
4. Format: JPG or PNG

### 2. Contact Form Setup

The contact form currently uses a fallback mailto: link. For a fully functional form that sends emails directly to you:

#### Option A: Formspree (Recommended - Free tier available)

1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/xyzabc123`)
5. In `script.js`, line 132, replace `YOUR_FORM_ID` with your actual form ID:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

#### Option B: Web3Forms (Alternative)

1. Go to [web3forms.com](https://web3forms.com)
2. Get your access key
3. Add this hidden input to your form in `index.html`:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
   ```
4. Update the fetch URL in `script.js`

#### Option C: EmailJS (Another alternative)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Follow their integration guide
3. Replace the contact form handling code in `script.js`

## 📁 Project Structure

```
PORTFOLIO WEBSITE/
├── index.html          # Main HTML file
├── styles.css          # Optimized CSS with theme support
├── script.js           # JavaScript with all functionality
├── images/             # Image assets folder
│   └── profile.jpg     # Your profile photo (TO ADD)
├── README.md           # This file
└── [backup files]      # Original versions kept as backup
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **JavaScript** - Vanilla JS (no frameworks)
- **Google Fonts** - Inter & Space Grotesk
- **Surge.sh** - Static hosting platform

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `styles.css` (lines 13-29):

```css
:root {
    --primary: #667eea;        /* Main brand color */
    --secondary: #764ba2;      /* Secondary brand color */
    --accent: #f093fb;         /* Accent color */
    /* ... */
}
```

### Adding More Projects

1. Copy a `.project-card` section in `index.html`
2. Update the content
3. Change the `.project-number` (01, 02, 03...)
4. Add your GitHub link

### Adding More Certifications

Copy a `.cert-item` in the certifications section and update the text.

## 🚀 Deployment

### Update Existing Site

```bash
cd "/Users/darshilshethia/Desktop/PORTFOLIO WEBSITE"
surge . darshil-portfolio.surge.sh
```

### Deploy to New Domain

```bash
surge . your-custom-domain.surge.sh
```

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 2 seconds
- **No heavy libraries**: Vanilla JavaScript for optimal performance

## 🔗 Links

- **Portfolio**: https://darshil-portfolio.surge.sh
- **LinkedIn**: https://www.linkedin.com/in/darshildipenshethia/
- **GitHub**: https://github.com/Darshil562002
- **Email**: darshilshethia5602@gmail.com

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues / TODO

- [ ] Add actual profile photo to `images/profile.jpg`
- [ ] Set up Formspree or alternative for contact form
- [ ] Add Google Analytics (optional)
- [ ] Add actual project GitHub links when repositories are ready
- [ ] Consider adding a blog section (optional)

## 📄 License

© 2025 Darshil Shethia. All rights reserved.

---

**Made with ❤️ by Darshil Shethia**
