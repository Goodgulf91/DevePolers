# DevePolers Games - Business Website

Modern business website for DevePolers Games, specializing in asset sales and game development.

## 🚀 Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Typed JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Nodemailer** - Email functionality for contact form
- **ESLint** - Code quality linting

## 🎨 Features

### Page sections:
- **Hero Section** - Main section with logo and CTA buttons
- **About Us** - Company information and mission
- **Services** - Two main services:
  - Asset Sales (graphics, animations, effects, music, scripts)
  - Game Development (mobile, PC/Console, browser games, prototypes)
- **Contact** - Contact form with email functionality and information
- **Footer** - Footer with legal links

### Design:
- Modern dark theme with gradients
- Responsive design (mobile-first)
- Smooth animations and hover effects
- Logo placeholder ready (black background, white text)

## 🛠️ Installation and Setup

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Production build
npm run build

# Run production version
npm start
```

The application will be available at: `http://localhost:3000`

## � Email Configuration

The contact form sends emails to `devepolers@gmail.com`. To set this up:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password** in Google Account Settings → Security → 2-Step Verification → App passwords
3. **Update `.env.local`** with your credentials:

```env
EMAIL_USER=devepolers@gmail.com
EMAIL_PASS=your-16-character-app-password
```

**Important**: Replace `your-16-character-app-password` with the actual app password from step 2.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # Email API endpoint
│   ├── layout.tsx          # Main layout with metadata
│   ├── page.tsx           # Main page
│   ├── globals.css        # Global styles
│   └── favicon.ico        # Site icon
```

## 🎯 TODO - Next Steps

1. **Logo** - Add real company logo
2. **Content** - Add real portfolio/projects
3. **SEO** - Optimize meta tags and structured data
4. **Analytics** - Google Analytics integration
5. **Hosting** - Deploy to Vercel/Netlify

## 🎨 Colors and Branding

- **Main Colors**: 
  - Blue: `#2563eb` to `#3b82f6`
  - Purple: `#9333ea` to `#a855f7`
  - Black/Gray: `#000000` to `#374151`

- **Logo**: Placeholder ready on black background with white text

## 📱 Responsiveness

The site is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)  
- Mobile (320px - 767px)

## 🔧 Customization

To customize the site:

1. **Colors** - Edit `tailwind.config.js` or directly in component classes
2. **Content** - Modify `src/app/page.tsx`
3. **Metadata** - Update `src/app/layout.tsx`
4. **Styling** - Add styles in `src/app/globals.css`

## 📬 Contact Form Features

- Form validation (all fields required)
- Loading state during submission
- Success/error messages
- Professional HTML email format
- User email included for replies
- Automatic sending to devepolers@gmail.com

---

**DevePolers Games** - We create games, sell assets! 🎮✨
