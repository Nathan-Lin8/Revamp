# Portfolio Website 3.0

A modern, responsive portfolio website built with React, TypeScript, and styled-components. The design features a clean whiteboard theme with smooth animations and transitions.

## Features

- Responsive design that works on all devices
- Modern whiteboard theme with subtle grid patterns
- Smooth animations using Framer Motion
- TypeScript for type safety
- Styled-components for CSS-in-JS
- Contact form
- Project showcase
- Skills section
- About me section
- Social media links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-3.0
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

The application will open in your default browser at `http://localhost:3000`.

## Customization

### Personal Information

1. Update the content in each component:
   - `LandingPage.tsx`: Update the welcome message
   - `AboutMe.tsx`: Update your personal information
   - `Skills.tsx`: Modify the skills list
   - `Works.tsx`: Add your projects
   - `Contact.tsx`: Update contact information
   - `Footer.tsx`: Update social media links and copyright

2. Update the website title and meta information in `public/index.html`

### Styling

The project uses styled-components for styling. You can customize the theme by modifying the styled components in each file. The main color scheme and typography can be adjusted in the respective component files.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build files will be created in the `build` directory.

## Technologies Used

- React
- TypeScript
- Styled Components
- Framer Motion
- React Scripts

## License

This project is licensed under the MIT License - see the LICENSE file for details.