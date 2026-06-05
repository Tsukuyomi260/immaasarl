# IMMAA Sarl - Excellence en Restauration & Formation

## Description

IMMAA Sarl is a professional website for a catering and training company based in Benin. The platform showcases high-end catering services and professional hospitality-restaurant training programs. Features include service presentation, testimonials, contact forms with email notifications, and mobile-responsive design.

**Services:**
- Restauration Collective (Catering for events)
- Cuisine Appliquée (Applied Cooking Training)
- Pâtisserie & Boulangerie (Pastry & Bakery Training)

## Tech Stack

**Frontend:**
- React 18.3.1
- Vite 5.2.0
- Tailwind CSS 3.4.1
- Framer Motion 12.40.0
- Lucide React (icons)

**Backend:**
- Node.js + Express.js
- Nodemailer (email service)
- CORS
- dotenv

**Deployment:**
- Frontend: Vercel
- Backend: Render

## Features

- ✨ Scroll reveal animations on all sections
- 📱 Fully responsive mobile design (375px - 1440px)
- 🎨 Modern UI with glassmorphism effects
- 💬 Animated testimonials with infinite scroll
- 📧 Contact form with automated email notifications
- 🎯 Strategic accent color (red) for CTAs and interactions
- 📊 Animated counters in "Pourquoi Choisir IMMAA" section
- 🖼️ Image galleries for services and training programs

## Project Structure

```
src/
├── components/
│   ├── Header.jsx           # Navigation with scroll animation
│   ├── AnimatedHero.jsx     # Hero section with CTA buttons
│   ├── Services.jsx         # Catering services showcase
│   ├── Programs.jsx         # Training programs with images
│   ├── WhyImmaa.jsx        # Why choose IMMAA (animated counters)
│   ├── Testimonials.jsx    # Client/student testimonials
│   ├── Contact.jsx         # Contact form with backend integration
│   └── Footer.jsx          # Footer with scroll-to-top button
├── App.jsx
└── main.jsx

server.js                   # Express backend for email service
vercel.json                # Vercel build configuration
package.json              # Dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Install backend dependencies (already in package.json)
npm install
```

### Development

**Run frontend + backend together:**
```bash
npm run dev-all
```

**Or run separately:**
```bash
npm run dev          # Frontend on http://localhost:5173
npm run server       # Backend on http://localhost:5000
```

### Build

```bash
npm run build        # Build for production (dist/)
npm run preview      # Preview production build
```

## Email Configuration

### Setup Gmail SMTP

1. Enable 2FA on Gmail account
2. Generate app-specific password: https://myaccount.google.com/apppasswords
3. Create `.env` file:
```
PORT=5000
EMAIL_USER=maisonimmaa@gmail.com
EMAIL_PASSWORD=your_app_specific_password
```

See `BACKEND_SETUP.md` for detailed instructions.

## Deployment

### Frontend (Vercel)
- Deployed at: https://immaasarl.vercel.app
- Connected to GitHub repo
- Auto-deploys on push to main branch

### Backend (Render)
- Deployed at: https://immaa-backend.onrender.com
- API endpoint: `/api/contact`
- Environment variables configured on Render dashboard

## Contact Information

**Location:** Calavi Zogbadjè, Chapelle St.Jean Eudes, Benin  
**Email:** maisonimmaa@gmail.com  
**Phone:** +229 0149299999  
**Hours:** Mon-Fri 8h-18h

## License

© 2026 IMMAA Sarl. All rights reserved.

---

Built with ❤️ by Claude Code
