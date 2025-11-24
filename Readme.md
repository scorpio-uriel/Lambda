# Lambda - Intelligent Goal Achievement App

Lambda is a React Native mobile application that transforms your goals into achievable actions using AI-powered task decomposition and gamified progress tracking.

## 🎯 Project Overview

This project is developed as part of a final engineering school project by **Uriel Arthur MILLOGO**, student at Junia ISEN Lille, specializing in software development.

### Core Features

- **AI-Powered Goal Decomposition**: Automatically breaks down complex goals into manageable tasks
- **Gamified Progress System**: Earn XP, unlock levels, and maintain streaks
- **Offline-First Architecture**: Works completely without internet connection
- **Intuitive UX/UI**: Clean, modern interface following Material Design principles

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lambda-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
```bash
# Android
npm run android

# iOS
npm run ios

# Web (for testing)
npm run web
```

## 📁 Project Structure

```
src/
├── app/                    # Main application logic
│   ├── screens/           # All screen components
│   └── navigation/        # Navigation configuration (future)
├── components/            # Reusable UI components
├── services/              # Business logic and external services
│   ├── aiService.ts       # Local AI task generation
│   └── storageService.ts  # AsyncStorage wrapper
├── store/                 # Zustand state management
├── theme/                 # Design system (colors, typography, spacing)
├── utils/                 # Helper functions and utilities
└── index.ts              # Main exports
```

## 🛠 Technology Stack

- **Frontend**: React Native + Expo + TypeScript
- **State Management**: Zustand
- **Styling**: React Native StyleSheet + Custom Theme System
- **Data Validation**: Zod
- **Local Storage**: AsyncStorage
- **Development Tools**: ESLint, Prettier, Husky

## 📋 Development Roadmap

### Phase 1 - MVP Foundation (Current)
- [x] Project structure setup
- [x] Basic theme system
- [x] Core screens scaffolding
- [x] State management setup
- [ ] Navigation setup
- [ ] Basic UI components

### Phase 2 - Core Features
- [ ] Goal creation and management
- [ ] Local AI task generation
- [ ] Task completion and XP system
- [ ] Data persistence

### Phase 3 - Polish & Testing
- [ ] Notifications
- [ ] Performance optimization
- [ ] User testing
- [ ] Bug fixes

## 🎨 Design System

The app follows a carefully crafted design system based on:

- **Colors**: Defined brand palette with light/dark theme support
- **Typography**: Poppins for headings, Inter for body text, JetBrains Mono for stats
- **Spacing**: Consistent spacing scale (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80)
- **Components**: Modular, reusable UI components

## 🔧 Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android emulator/device
- `npm run ios` - Run on iOS simulator/device
- `npm run web` - Run in web browser (for testing)
- `npm run reset-project` - Reset to fresh Expo project

## 📱 Target Platforms

- **Primary**: Android (API 24+)
- **Secondary**: iOS (14.0+)
- **Testing**: Web browser (limited functionality)

## 👨‍💻 Author

**Uriel Arthur MILLOGO**
- Engineering Student at Junia ISEN Lille
- Specialization: Software Development
- Project Duration: 10-12 weeks (MVP)
- Weekly Time Commitment: 10-15 hours

## 📄 License

This project is developed as an academic project. All rights reserved.

## 🤝 Contributing

This is currently a solo development project for academic purposes. However, feedback and suggestions are welcome!

---

**Note**: This is the initial setup (Sprint 0). The application will evolve significantly during the development phases.