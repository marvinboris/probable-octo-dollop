import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Display', ...defaultTheme.fontFamily.sans],
                display: ['Readex Pro', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                ...defaultTheme.colors,
                primary: '#088A15',
                secondary: '#F17300',
                whatsapp: '#2AA000',
                telegram: '#0093E3',
                skype: '#04B4FF',
                danger: '#C8102E',
                like: '#00890E',
                dislike: '#FF4A3F',
                body: '#4A4A4A',
                star: '#D89A00',
                purple: "#8749D4"
            }
        },
    },

    plugins: [forms],
};
