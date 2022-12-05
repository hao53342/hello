module.exports = {
    // purge: [],
    purge: {
        enabled: true,
        content: ['./src/**/*.vue']
    },
    darkMode: 'media',
    theme: {
        extend: {
            lineHeight: {
                '11': '2.75rem'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [],
    separator: '_'
}
