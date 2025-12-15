# snu-happetite-expo-study
![Static Badge](https://img.shields.io/badge/status-done-brightgreen?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/type-learning_project-blue?style=for-the-badge)

A React Native Expo application demonstrating complex navigation patterns using React Navigation, featuring stack, bottom tab, and material top tab navigators.

## How to Start

### Environment
- Node.js (v14 or higher recommended)
- npm or yarn
- Expo CLI (installed globally or via npx)
- iOS Simulator (for iOS) or Android Emulator (for Android), or Expo Go app on physical device

### Quick Start

```bash
# Clone the repository
git clone https://github.com/<username>/snu-happetite-expo-study.git
cd snu-happetite-expo-study

# Install dependencies
npm install

# Run the application
npm start

# Or run for specific platform
npm run ios      # iOS Simulator
npm run android  # Android Emulator
npm run web      # Web browser
```

## Key Features
1. **Stack Navigation** – Authentication flow with signin and signup screens
2. **Bottom Tab Navigation** – Main app navigation with multiple tab sections
3. **Material Top Tab Navigation** – Horizontal tab navigation within sections
4. **Multi-level Navigation** – Nested navigation structure combining stack, bottom tabs, and top tabs
5. **Cross-platform Support** – Runs on iOS, Android, and Web

## Technical Stack
- **React Native** – Mobile application framework
- **Expo** – Development platform and toolchain
- **React Navigation** – Navigation library with stack, bottom tabs, and material top tabs
- **Firebase** – Authentication and backend services
- **React** – UI library

## Project Structure
```
snu-happetite-expo-study/
├── App.js                      # Main application component
├── Navigation.js               # Navigation configuration and setup
├── index.js                    # Expo root component registration
├── app.json                    # Expo configuration
├── package.json                # Dependencies and scripts
├── screens/                    # Screen components
│   ├── signin.js              # Sign in screen
│   ├── signup.js              # Sign up screen
│   ├── screen1.js             # Screen 1 component
│   ├── screen2.js             # Screen 2 component
│   ├── screen3.js             # Screen 3 component
│   ├── screen4.js             # Screen 4 component
│   ├── screen5.js             # Screen 5 component
│   └── screen6.js             # Screen 6 component
├── assets/                     # Images and icons
│   ├── icon.png               # App icon
│   ├── adaptive-icon.png      # Android adaptive icon
│   ├── splash-icon.png        # Splash screen icon
│   └── favicon.png            # Web favicon
└── README.md                   # Project documentation
```
