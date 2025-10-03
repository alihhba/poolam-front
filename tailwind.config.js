/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: '#0046FF',
                    200: '#D3DBFF'
                },
                background: {
                    100: '#EFF4FE'
                },
                base : {
                    100 : '#1E1F4B'
                },
                border: {
                    100: '#64748B'
                },
                warning: {
                    100: '#DFD800'
                },
                light: {
                    100: '#FFFFFF'
                }
            }
        },
        // height: {
        //     25 : '6.25rem'  //100px
        // }
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
}

