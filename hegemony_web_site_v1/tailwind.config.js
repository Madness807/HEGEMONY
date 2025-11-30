import tokens from './src/components/ions/design-tokens.json';


// Sanitize spacing to remove non-string values (like container object)
const spacing = Object.fromEntries(
    Object.entries(tokens.spacing).filter(([_, value]) => typeof value === 'string')
);

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ...tokens.colors,
                surface: {
                    primary: tokens.colors.surface.primary,
                    secondary: tokens.colors.surface.secondary,
                    tertiary: tokens.colors.surface.tertiary,
                    board: tokens.colors.surface.board
                },
                // Aliases for cleaner usage
                class: tokens.colors.classes,
                policy: tokens.colors.policies,
            },
            fontFamily: tokens.typography.fontFamily,
            fontSize: tokens.typography.fontSize,
            fontWeight: tokens.typography.fontWeight,
            lineHeight: tokens.typography.lineHeight,
            letterSpacing: tokens.typography.letterSpacing,
            spacing: spacing,
            width: tokens.sizing.width,
            height: tokens.sizing.height,
            borderRadius: tokens.borderRadius,
            boxShadow: {
                glass: "0 4px 16px rgba(0, 0, 0, 0.3)",
                ...Object.fromEntries(
                    Object.entries(tokens.shadows).filter(([_, value]) => typeof value === 'string')
                ),
                // Flatten elevation shadows
                ...Object.fromEntries(
                    Object.entries(tokens.shadows.elevation || {}).map(([key, value]) => [`elevation-${key}`, value])
                )
            },
            opacity: tokens.opacity,
            zIndex: tokens.zIndex,
            transitionDuration: tokens.transitions.duration,
            transitionTimingFunction: tokens.transitions.ease,

            // Keep existing keyframes
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" }
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 }
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out"
            }
        },
    },
    plugins: [],
}
