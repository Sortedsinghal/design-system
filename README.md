# 📘 Front-End Design System Assignment

This is a complete front-end UI design system assignment built with:

- ⚛️ React + TypeScript
- 🎨 Tailwind CSS
- 📦 Storybook (with live deployment)
- ✅ Fully validated multi-step form
- 📊 Interactive data table with filters, pagination, selection
- 🦴 Bonus: Loading skeletons and Storybook deployment

---

## 🔗 Live Demo

- 🌐 **Main App:** [design-system-nine-rho.vercel.app](https://design-system-nine-rho.vercel.app)
- 📚 **Storybook:** [design-system-storybook.vercel.app](https://design-system-storybook-1amk5dlr9-krishna-singhals-projects.vercel.app)

---

## 🧩 Features

### ✅ Wizard Form
- 3-step flow: Name → Email → Password
- Form validation on each step
- Navigation with “Next” and “Back” buttons

### ✅ Data Table
- Lists user records with: ID, Name, Email, Role
- Features:
  - Pagination (5 items per page)
  - Role-based filter dropdown
  - Selectable rows (checkboxes)
  - Column sorting

### ✅ Loading Skeleton
- Skeleton shown while data is loading

### ✅ Storybook
- All UI components documented in isolation
- View and test independently
- Live Storybook deployment included

---

## 📁 Folder Structure

<pre>
design-system/ 
├── .storybook/ 
│ ├── main.ts 
│ └── preview.ts 
├── public/ 
│ ├── favicon.ico 
│ ├── index.html 
│ └── ...
├── src/ 
│ ├── components/ 
│ │ ├── DataTable/ 
│ │ │ ├── DataTable.tsx 
│ │ │ └── DataTable.stories.tsx
│ │ └── WizardForm/ 
│ │ ├── WizardForm.tsx 
│ │ └── WizardForm.stories.tsx 
│ ├── stories/ 
│ │ ├── Button.tsx 
│ │ ├── Button.stories.ts 
│ │ ├── Header.tsx 
│ │ ├── Header.stories.ts 
│ │ ├── Page.tsx 
│ │ └── Page.stories.ts 
│ ├── App.tsx 
│ ├── App.test.tsx 
│ ├── index.tsx 
│ ├── index.css 
│ ├── react-app-env.d.ts 
│ ├── reportWebVitals.ts 
│ └── setupTests.ts 
├── storybook-static/ # (Only generated after `npm run build-storybook`) 
├── tailwind.config.js 
├── postcss.config.js 
├── tsconfig.json 
├── package.json 
├── package-lock.json 
├── .gitignore 
└── README.md 
 </pre>


---

## 🛠 Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Vercel](https://vercel.com/)

---

## 🚀 Getting Started Locally
``` bash
git clone https://github.com/Sortedsinghal/design-system.git

cd design-system

npm install

npm run dev      # Start app

npm run storybook  # Launch Storybook
```

## To build Storybook for deployment:
npm run build-storybook
