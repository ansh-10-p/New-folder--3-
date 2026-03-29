# Local Marketplace App

A modern Next.js application for a local marketplace, featuring a beautiful hero section to showcase local businesses and products.

## Features

- **Hero Section**: Eye-catching landing page with animated background and featured categories
- **Responsive Design**: Mobile-first layout that works on all devices
- **Tailwind CSS**: Modern styling with utility-first CSS framework
- **TypeScript**: Type-safe development experience
- **Next.js 15+**: Latest React framework with App Router

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm, yarn, pnpm, or bun

### Installation

1. Navigate to the project directory:
```bash
cd marketplace-app
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the hero section in your browser.

### Building for Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Project Structure

```
marketplace-app/
├── app/
│   ├── components/
│   │   └── HeroSection.tsx    # Main hero section component
│   ├── globals.css             # Global styles and animations
│   ├── layout.tsx              # Root layout component
│   └── page.tsx                # Home page
├── public/                      # Static assets
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
└── package.json                # Project dependencies
```

## Hero Section Features

The hero section includes:

- **Animated Background**: Smooth blob animations for visual interest
- **Category Cards**: 4 featured category cards with gradient backgrounds
  - Handmade Crafts
  - Fresh Produce
  - Services
  - Premium Items
- **Call-to-Action Buttons**: 
  - "Start Shopping" - Primary action
  - "Become a Seller" - Secondary action
- **Statistics Display**: Shows marketplace metrics (sellers, products, customers)
- **Responsive Typography**: Scales beautifully on all screen sizes

## Customization

### Modify Colors
Update the gradient colors in [HeroSection.tsx](app/components/HeroSection.tsx) by changing Tailwind color classes.

### Update Copy
Edit text content directly in the hero component or create a constants file for easier management.

### Add More Categories
Duplicate and modify the category card sections to add more options.

## Technologies Used

- **Next.js** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **React 19** - Latest React version

## License

MIT

## Support

For issues and questions, please refer to the Next.js documentation: https://nextjs.org/docs
