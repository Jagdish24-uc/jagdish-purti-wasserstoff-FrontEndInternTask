# Collaborative Editor & Component Library

## Overview
- **Task 1**: A real-time collaborative text editor built with React, Quill, and TailwindCSS. Multiple browser tabs/windows can edit content, with changes synced via localStorage (simulated real-time). Users are identified by name and color.
- **Task 2**: A simple component library (`Button`, `Card`) used in two demo pages, focusing on reusability and clean code.

## How to Run
1. **Prerequisites**:
   - Node.js and npm installed
2. **Setup**:
   - Clone the repo: `git clone <your-repo-url>`
   - Navigate to the project: `cd collaborative-editor`
   - Install dependencies: `npm install`
   - Install Quill: `npm install quill`
   - Set up TailwindCSS:
     - `npm install -D tailwindcss`
     - `npx tailwindcss init`
     - Update `tailwind.config.js` to include content: `['./src/**/*.{js,jsx}']`
3. **Run**:
   - Start the app: `npm start`
   - Open multiple browser tabs to `http://localhost:3000` to test collaboration
4. **Demo Pages**:
   - Task 1: Editor is at the root (`/`)
   - Task 2: Manually test components by swapping `<App />` in `index.js` with `<DemoPage1 />` or `<DemoPage2 />`

## Approach
- **Task 1**: Uses Quill for the editor, localStorage for mock real-time sync, and a simple user prompt for identification. Changes and user presence are tracked and displayed.
- **Task 2**: Built reusable `Button` and `Card` components in `/lib`, styled with TailwindCSS classes, and demonstrated in two pages with minimal redundancy.
