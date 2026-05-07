# 🎨 HABiBi Digital Studio
 
A modern, responsive **portfolio website** for HABiBi Digital Studio — built with React and Vite, and deployed live on GitHub Pages.
 
🌐 **Live Site:** [mr-mangoranda.github.io/HABiBi-Digital-Studio](https://mr-mangoranda.github.io/HABiBi-Digital-Studio)
 
---
 
## 📖 About
 
HABiBi Digital Studio is a personal portfolio website showcasing creative digital work. The site features smooth UI interactions, a Swiper-powered carousel, and a clean design built entirely with React and CSS.
 
---
 
## 🛠️ Tech Stack
 
| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [Vite 7](https://vite.dev/) | Build tool & dev server |
| [Swiper 12](https://swiperjs.com/) | Carousel / slider component |
| [gh-pages](https://github.com/tschaub/gh-pages) | GitHub Pages deployment |
| [ESLint](https://eslint.org/) | Code linting |
 
---
 
## 🚀 Getting Started
 
### Prerequisites
 
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)
### Installation
 
```bash
# 1. Clone the repository
git clone https://github.com/mr-mangoranda/HABiBi-Digital-Studio.git
 
# 2. Navigate into the project folder
cd HABiBi-Digital-Studio
 
# 3. Install dependencies
npm install
```
 
### Development
 
Start the local development server with hot module replacement (HMR):
 
```bash
npm run dev
```
 
The app will be available at `http://localhost:5173` by default.
 
### Build for Production
 
```bash
npm run build
```
 
The production-ready files will be output to the `dist/` folder.
 
---
 
## 📦 Deployment
 
This project is configured to deploy automatically to **GitHub Pages** using the `gh-pages` package.
 
```bash
npm run deploy
```
 
This command will:
1. Run `npm run build` to generate the `dist/` folder
2. Push the built files to the `gh-pages` branch on GitHub
> **Note:** The `homepage` field in `package.json` is already set to the correct GitHub Pages URL.
 
---
 
## 📁 Project Structure
 
```
HABiBi-Digital-Studio/
├── .github/
│   └── workflows/        # GitHub Actions CI/CD workflows
├── public/               # Static assets (images, fonts, etc.)
├── src/                  # React source files
│   ├── components/       # Reusable UI components
│   ├── assets/           # Images and other assets used in code
│   ├── App.jsx           # Root application component
│   └── main.jsx          # Entry point
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── package.json          # Project metadata and scripts
```
 
---
 
## 📜 Available Scripts
 
| Script | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run deploy` | Build and deploy to GitHub Pages |
 
---
 
## 🤝 Contributing
 
Contributions, issues, and feature requests are welcome! Feel free to open an [issue](https://github.com/mr-mangoranda/HABiBi-Digital-Studio/issues) or submit a pull request.
 
1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request
---
 
## 📄 License
 
This project is private. All rights reserved © HABiBi Digital Studio.
 
---
 
*Made with ❤️ by [mr-mangoranda](https://github.com/mr-mangoranda)*
