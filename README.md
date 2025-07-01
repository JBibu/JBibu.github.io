![portfolio-banner](https://github.com/user-attachments/assets/6cb88ef4-aed5-4798-a9f2-4db2b2ec59c4)

# shadcn/ui & Next.js Portfolio Website

A responsive portfolio website built with Next.js, Tailwind CSS, and shadcn/ui components. Features particle animation backgrounds, acrylic-effect navbar, and sections for showcasing skills and projects.

## Live Preview

Current state of the project: [Live Demo](https://jbibu.xyz)

Note: This is a work-in-progress.

## Quick Start

Clone and install:

```bash
git clone https://github.com/JBibu/shadcn-nextjs-portfolio.git
cd shadcn-nextjs-portfolio
npm install
npx next
```

Visit `http://localhost:3000` to view the website.

## Features

- UI with acrylic-effect navbar, particle animations and shadcn components
- Responsive layout for mobile, tablet, and desktop
- Dark/light mode support with Tailwind CSS
- Component-based architecture with Next.js and React
- Interactive sections for about, projects, skills, and contact
- SEO optimized structure
- Lucide Icons integration
- Customizable through component props

## Requirements

- Node.js 18.0 or higher
- npm or yarn package manager
- Basic React and Next.js knowledge
- Text editor (VS Code recommended)

## Customization

Customize the website through these components:

1. **Navbar Configuration**:
   - Update logo, menu items, and action buttons in the `AcrylicNavbar` component
   - Modify scroll threshold for acrylic effect

2. **Personal Information**:
   - Edit name, title, and bio in the `Hero` component
   - Update social media links and resume download button

3. **About Section**:
   - Modify professional experience and background information
   - Add or remove experience cards

4. **Projects Showcase**:
   - Update the `projects` array with your work
   - Each project includes: title, description, image, tags, and links

5. **Skills & Technologies**:
   - Edit the `skillCategories` object for your expertise
   - Organize skills by frontend, backend, and tools categories

6. **Contact Information**:
   - Update contact details and form settings
   - Customize contact form functionality

7. **Styling**:
   - Adjust colors, spacing, and typography through Tailwind CSS classes
   - Modify particle animation settings

## Sections

1. **Hero** - Introduction with profile picture, social links, and call-to-action buttons
2. **About** - Professional background with experience cards
3. **Projects** - Featured work with images and technology tags
4. **Skills** - Interactive tabs displaying technical expertise by category
5. **Contact** - Contact form and information
6. **Footer** - Copyright information and social links

## Technologies Used

- **Next.js** - React framework with server-side rendering
- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable UI components built with Radix UI and Tailwind
- **Lucide React** - Icon set
- **TypeScript** - Type-safe JavaScript

## License

GPL-3.0 License - see [LICENSE](LICENSE) file.
