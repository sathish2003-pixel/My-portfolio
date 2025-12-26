# Portfolio Customization Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Customizing Your Portfolio

### 1. Personal Information

Edit `config/content.ts` to update your personal details:

```typescript
export const personalInfo = {
  name: "Your Name",              // Your full name
  role: "Your Role",              // e.g., "Full Stack Developer"
  tagline: "Your tagline",        // Short description
  bio: "Your bio...",             // About section paragraph
  email: "your@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  resumeUrl: "/resume.pdf",       // Add your resume to /public folder
};
```

### 2. Skills

Update your skills in the same file:

```typescript
export const skills = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  // Add more skills...
];
```

**Available categories:**
- Frontend
- Backend
- Database
- Cloud
- DevOps
- Tools
- Language

### 3. Projects

Add your projects to showcase:

```typescript
export const projects = [
  {
    id: "unique-id",
    title: "Project Name",
    description: "Short description for card",
    longDescription: "Detailed description for modal",
    tags: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
    featured: true,  // Shows in featured section
  },
];
```

### 4. Experience

Update your work experience:

```typescript
export const experience = [
  {
    id: "1",
    title: "Job Title",
    company: "Company Name",
    location: "City, State",
    period: "2022 - Present",
    description: "Job description...",
    achievements: [
      "Achievement 1",
      "Achievement 2",
    ],
  },
];
```

### 5. SEO & Meta Tags

Update site metadata:

```typescript
export const siteMetadata = {
  title: "Your Name - Portfolio",
  description: "Your SEO description",
  url: "https://your-domain.com",
  image: "/og-image.jpg",          // Add OG image to /public
  author: "Your Name",
  keywords: "your, keywords, here",
};
```

## Styling Customization

### Colors

Edit `tailwind.config.ts` to change color schemes:

```typescript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    },
  },
}
```

### Animations

Adjust animation speeds in `tailwind.config.ts`:

```typescript
animation: {
  "fade-in": "fadeIn 0.5s ease-in-out",
  // Modify timing as needed
}
```

### Global Styles

Edit `app/globals.css` for:
- Glassmorphism effects (`.glass`, `.glass-card`)
- Gradient text (`.gradient-text`)
- Scrollbar styling
- Background animations

## Adding Images

1. **Project Images:** Add to `/public/projects/`
2. **OG Image:** Add to `/public/og-image.jpg` (1200x630px)
3. **Icons:** Add to `/public/icon-192.png` and `/public/icon-512.png`
4. **Resume:** Add to `/public/resume.pdf`

Update image paths in `config/content.ts`

## Theme Customization

The portfolio includes dark mode by default. To customize:

- **Default theme:** Change in `components/ThemeProvider.tsx` (line 15)
- **Theme colors:** Edit CSS variables in `app/globals.css`:
  ```css
  :root {
    --background: #ffffff;
    --foreground: #0a0a0a;
  }

  .dark {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
  ```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Build Locally

```bash
npm run build
npm run start
```

## Performance Tips

- Keep images optimized (use WebP format)
- Minimize custom fonts
- Remove unused dependencies
- Test with Lighthouse for performance scores

## Support

For issues or questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Framer Motion docs](https://www.framer.com/motion/) for animation customization
- Open an issue in the repository

---

Happy coding! 🚀
