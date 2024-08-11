
<h1 align="center">My VSCode Theme Portfolio</h1>

<p align="center"><img src="https://github.com/user-attachments/assets/af2968e7-a0fc-4b14-b787-a76274c4eb61" alt="project"></p>

<p>This project is a personal portfolio built with React and TypeScript, showcasing custom components and theming inspired by Visual Studio Code. It allows users to toggle between different themes and features various UI components that reflect the style and functionality of a developer's environment.</p>

<h2>🚀 Demo</h2>

[https://shahar.website/](https://shahar.website/)

<h2>🧐 Features</h2>

Here're some of the project's best features:

* Theming: Toggle between light and dark themes, with persistent settings stored in local storage.
* Responsive Design: Fully responsive design that adapts to various screen sizes.
* Custom Components: Reusable components including headers, footers, navigations, and more.
* Portfolio Showcase: A section dedicated to displaying portfolio projects.

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the repository</p>

```bash
git clone https://github.com/shahar-shemesh/my-vscode-theme-portfolio
```

<p>2. Install the dependencies</p>

```bash
npm install
```

<p>3. Start the development server</p>

```bash
npm start
```

<h2>Project Structure</h2>

- **src/**: Contains the source code of the application.
  - **components/**: Reusable components used throughout the app.
  - **store/**: Redux store and slices for managing global state.
  - **index.tsx**: The main entry point for the React application.
  - **App.tsx**: The root component of the app.
- **public/**: Public assets and the main HTML file.
- **package.json**: Contains scripts and dependencies for the project.
- **tsconfig.json**: TypeScript configuration file.


## Components Overview

### Header
- Located at `src/components/Header/Header.tsx`
- Contains the site's main navigation and theme toggle functionality.

### Footer
- Located at `src/components/Footer/Footer.tsx`
- Displays footer information and a terminal-style message component.

### Portfolio
- Located at `src/components/Portfolio/Portfolio.tsx`
- Renders a grid of portfolio projects with details and links.

### Line Numbers
- Located at `src/components/LineNumbers/LineNumbers.tsx`
- Simulates the appearance of line numbers, with interactive shrinking functionality.


<h2>🍰 Contribution Guidelines:</h2>

Please contribute using [GitHub Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and open a pull request.

<h2>🛡️ License:</h2>

This project is licensed under the MIT License.