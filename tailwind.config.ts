import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A3D2E', // Vert foncé
          light: '#FFB84D',   // Orange (CTA)
          foreground: '#FFFFFF', // Blanc
        },
        secondary: {
          DEFAULT: '#F9F7F3', // Beige très clair
          foreground: '#1F1F1F', // Texte principal
        },
        accent: {
          DEFAULT: '#FFB84D', // Orange
          foreground: '#1F1F1F',
        },
        muted: {
          DEFAULT: '#F9F7F3', // Beige très clair
          foreground: '#555555', // Texte secondaire
        },
        background: '#FFFFFF',
        foreground: '#1F1F1F',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1F1F1F',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#1F1F1F',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
        border: '#E5E7EB',
        input: '#E5E7EB',
        ring: '#0A3D2E',
        chart: {
          '1': '#0A3D2E',
          '2': '#FFB84D',
          '3': '#F9F7F3',
          '4': '#1F1F1F',
          '5': '#555555'
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'sans-serif'
        ],
        heading: [
          'Poppins',
          'sans-serif'
        ]
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      fontSize: {
        'display': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }], // H1
        'heading-1': ['2rem', { lineHeight: '1.25', fontWeight: '700' }], // H2
        'heading-2': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }], // H3
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // Body text
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // Small text
      },
      spacing: {
        section: '5rem',
        'section-lg': '8rem'
      },
      borderRadius: {
        DEFAULT: '0.75rem', // 12px - default border radius
        lg: '1rem', // 16px - large border radius
        md: '0.5rem', // 8px - medium border radius
        sm: '0.375rem', // 6px - small border radius
        full: '9999px' // full rounded
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 4px 12px rgba(0, 0, 0, 0.05)', // Default shadow
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
