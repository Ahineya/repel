/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(function ({addUtilities, matchUtilities, theme}) {
            const newUtilities = {
                // Main utilities
                '.repel': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                '.attract': {
                    /*
                        element.style.justifyContent = 'space-between';
                        element.style.alignItems = 'center';
                        element.style.flexWrap = 'wrap';
                        for (const child of element.children) {
                          child.style.flexGrow = '1';
                        }
                     */
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',

                    '> *': {
                        flexGrow: '1',
                    }

                    // Somehow need to iterate over children. In tailwind, this is not possible.
                    // Or is it? https://tailwindcss.com/docs/just-in-time-mode#customizing-variants
                    // TODO: Figure this out.
                },
                '.inflate': {
                    display: 'flex',
                    flexGrow: '1',
                },
                // Modifiers

                // Repel
                '.repel-l': {
                    // Unused
                },
                '.repel-r': {
                    // Unused
                },
                '.repel-t': {
                    // Unused
                },
                '.repel-b': {
                    // Unused
                },
                '.repel-h': {
                    display: 'flex',
                    justifyContent: 'center',
                },
                '.repel-v': {
                    display: 'flex',
                    flexDirection: 'column',
                },
                '.repel-i': {
                    display: 'flex',
                    justifyContent: 'space-between',
                },

                '.repel-\\[\\d+\\]': {
                    display: 'flex',
                    padding: 'var(--tw-repel)',
                },

                // Attract
                '.attract-l': {
                    display: 'flex',
                    justifyContent: 'flex-start',
                },
                '.attract-r': {
                    display: 'flex',
                    justifyContent: 'flex-end',
                },
                '.attract-t': {
                    display: 'flex',
                    justifyContent: 'flex-start',
                },
                '.attract-b': {
                    display: 'flex',
                    justifyContent: 'flex-end',
                },
                '.attract-h': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    '> *': {
                        flexGrow: '1',
                    },
                },
                '.attract-v': {
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    '> *': {
                        flexGrow: '1',
                    },
                },

                // Inflate
                '.inflate-l': {
                    // Unused
                },
                '.inflate-r': {
                    // Unused
                },
                '.inflate-t': {
                    // Unused
                },
                '.inflate-b': {
                    // Unused
                },
                '.inflate-h': {
                    display: 'flex',
                    flexGrow: '1',
                    width: '100%',
                    minWidth: '100%',
                },
                '.inflate-v': {
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: '1',
                    height: '100%',
                },
                '.inflate-h-\\[\\d+\\]' : {
                    width: 'var(--tw-inflate-h)',
                }

            }

            addUtilities(newUtilities, {
                variants: ['responsive', 'hover'],
            });

            matchUtilities(
                {
                    'inflate-h': (value) => ({
                        width: value,
                        display: 'flex',
                        flexGrow: '0',
                    }),
                },
                {
                    values: theme('spacing'),
                    supportsNegativeValues: false,
                }
            );

            matchUtilities(
                {
                    'repel': (value) => ({
                        display: 'flex',
                        padding: value,

                        '&:not(.attract):not(.attract-h)': {
                            justifyContent: 'center',
                        },
                    }),
                },
                {
                    values: theme('spacing'),
                    supportsNegativeValues: false,
                }
            );

            matchUtilities(
                {
                    'repel-i': (value) => ({
                        display: 'flex',
                        gap: value,
                    }),
                },
                {
                    values: theme('spacing'),
                    supportsNegativeValues: false,
                }
            );
        }),
    ],
}

