# React Native Navigation Practical
## 31 Dec 2024

# Multi-Screen React Native Navigation App

A React Native application demonstrating navigation between multiple screens using React Navigation, featuring a home screen, contact form, and about us page.

## 🚀 Technologies Used

- **React Native**: A framework for building native apps using React
- **Expo**: An open-source platform for making universal native apps
- **React Navigation**: Navigation library for React Native apps
- **React Native Paper**: Material Design components for React Native
- **Safe Area Context**: Ensures content is displayed within safe boundaries

## 🔧 Key Features

- Stack navigation between multiple screens
- Custom header styling
- Material Design components
- Form handling with keyboard avoidance
- Scrollable content on all screens
- Image display capabilities
- Navigation patterns including push, pop, and popToTop

## 📱 Screens

### Home Screen
- Welcome message
- Sample content
- Navigation buttons to Contact and About screens
- Styled with React Native Paper components

### Contact Us Screen
- Contact form with input fields for:
  - Name
  - Email
  - Phone number
  - Message
- Keyboard-aware scrolling
- Real-time input handling
- Navigation to About Us screen

### About Us Screen
- Company history
- University logo display
- Navigation demo buttons
- Footer with copyright information

## 🎯 Navigation Features

- Stack-based navigation
- Custom header styling with purple theme
- Multiple navigation methods:
  - Standard navigation
  - Push navigation
  - Pop navigation
  - Pop to top

## 💻 Code Structure

```
appenv/
├── App.js              # Main application file with navigation setup
├── components/
│   ├── Home.js         # Home screen component
│   ├── ContactUs.js    # Contact form screen
│   └── AboutUs.js      # About us screen with history
└── assets/
    └── uovlogo.png     # University logo image
```

## 🎨 Styling

- Consistent styling across all screens
- Responsive layouts
- Proper spacing and padding
- Image centering and sizing
- Keyboard-aware adjustments
- ScrollView implementation for content overflow

## ⚙️ Setup and Usage

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Expo development server:
   ```bash
   expo start
   ```
4. Use an emulator or scan the QR code with Expo Go app

## 🔑 Key Code Features

- Navigation state management
- Form input handling
- Keyboard avoiding behavior
- Image resource management
- Screen layout organization
- Custom styling implementation