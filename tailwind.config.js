/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
          colors: {
            primary: 'var(--color-primary)',
            secondary: 'var(--color-secondary)',
            tertiary: 'var(--color-tertiary)',
      
            success: 'var(--color-success)',
            info: 'var(--color-info)',
            warning: 'var(--color-warning)',
            error: 'var(--color-error)',
      
            bg: 'var(--color-bg)',
            surface: 'var(--color-surface)',
            border: 'var(--color-border)',
            text: 'var(--color-text)',
          },
        },
      }
    }      