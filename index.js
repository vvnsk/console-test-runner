module.exports = (name, fn, useCases) => {
    console.log(`%c ${name.toUpperCase()} `, 'background: black; color: white; display: block;');
    let useCaseResult = useCases.map((uc) => {
        let actual = Array.isArray(uc.input) ? fn.call(this, ...uc.input) : fn(uc.input);
        return JSON.stringify(uc.expected) == JSON.stringify(actual);
    });
    logResult(useCaseResult.filter((uc) => uc).length, useCases.length);
}

logResult = (passCases, totalCases) => {
    if (passCases === totalCases) {
        console.log('%c PASS ', 'background: green; color: white; display: block;');
        console.log(`%c${passCases} cases passed of ${totalCases}`, 'color: green; font-weight: bold;');
    } else if (passCases !== 0) {
        console.log('%c PASS ', 'background: yellow; color: black; display: block;');
        console.log(`%c${passCases} cases passed of ${totalCases}`, 'color: yellow; font-weight: bold;');
    } else {
        console.log('%c FAIL ', 'background: red; color: white; display: block;');
        console.log(`%c${passCases} cases passed of ${totalCases}`, 'color: red; font-weight: bold;');
    }
}