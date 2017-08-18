exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    suites: {
        general: ['testfile.js'],
        footer: ['a.js','b.js']
    },
    params: {
        global: {
            userName: "Immfly"
        }
    }
}