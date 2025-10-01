# Hopasa Restaurant - MVP Application

A modern, responsive restaurant web application built with React and TypeScript.

## Features

- **Home Page**: Welcome section with hero banner and call-to-action buttons
- **Menu**: Comprehensive menu organized by categories (Appetizers, Mains, Desserts, Beverages)
- **Reservations**: Interactive reservation form with validation
- **Contact**: Business information including address, phone, email, and hours

## Technologies Used

- React 19
- TypeScript 5
- Vite 7 (build tool)
- Inline CSS styling (no external CSS dependencies)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/robinwate/hopasa.git
cd hopasa
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

The application will be available at `http://localhost:5173/`

### Build

Build the application for production:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Type Checking

Run TypeScript type checking:
```bash
npm run lint
```

## Project Structure

```
hopasa/
├── src/
│   ├── mvp_restaurant_app.tsx  # Main restaurant application component
│   ├── App.tsx                  # Root App component
│   └── main.tsx                 # Application entry point
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite configuration
└── README.md                    # This file
```

## Screenshots

### Home Page
![Home Page](https://github.com/user-attachments/assets/3cfe1b50-684a-46fd-9133-c31f4854396e)

### Menu
![Menu](https://github.com/user-attachments/assets/e46405f8-4a94-44f8-bde2-6c6027f65c62)

### Reservations
![Reservations](https://github.com/user-attachments/assets/3ed5fa51-54af-4863-ab76-4c0128dfee24)

### Contact
![Contact](https://github.com/user-attachments/assets/8fba9b3b-b497-4af3-bfba-90d3db2bf038)

## License

ISC