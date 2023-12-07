# React Native Project with Styled-Components, Redux Toolkit, and Light/Dark Mode

Welcome to our React Native project! This app is built using styled-components for styling, Redux Toolkit for state management, and supports both light and dark modes for a personalized user experience.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Styling with Styled-Components](#styling-with-styled-components)
- [State Management with Redux Toolkit](#state-management-with-redux-toolkit)
- [Light and Dark Mode](#light-and-dark-mode)

## Features

- Styled-components for a clean and maintainable styling approach.
- Redux Toolkit for efficient state management.
- Light and dark mode support for a personalized user experience.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- React Native CLI
- Xcode (for iOS development) or Android Studio (for Android development)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/synsoft-global/React-Native-Styled-Component.git


### Folder Structure
The project structure follows the Redux Toolkit best practices. Here's a brief overview:

- src
   - components: Reusable UI components.
   - pages: Individual screens of the app.
   - redux: 
      slices: Redux slices for managing state.
      store.js: Redux store configuration.
   - services: Api calling code   

### Usage
Feel free to explore the codebase, modify components, and add new features. Below are specific details on styling and state management.

### Styling with Styled-Components
We use styled-components for styling. Styles are defined directly in JavaScript files, making it easy to manage and reuse styles. For more information, refer to the styled-components documentation.

### State Management with Redux Toolkit
Redux Toolkit is employed for state management. Slices in the src/redux/slices folder define the reducers and actions. The global store configuration is in src/redux/store.js. Refer to the Redux Toolkit documentation for in-depth information.

### Light and Dark Mode
The app supports both light and dark modes for a personalized user experience. To toggle between modes, check the implementation in the components and styles. The mode can be managed globally through Redux state or using React Context.