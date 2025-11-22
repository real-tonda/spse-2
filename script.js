
function init() {
    let possibleValues = [1,1,2,2,3,3,4,4,5,5];
    let znamky = [];
    while (znamky.length < 7) {
        let idx = Math.floor(Math.random() * possibleValues.length);
        znamky.push(possibleValues[idx]);
        possibleValues.splice(idx,1);
    }
    console.log("Starting arithmetic calculations with " + znamky);
    return znamky;
}

function calculateMean() {
    console.log("Calculating arithmetic mean...");
    let aritmetickyPrumer = znamky.reduce((a, b) => a + b, 0) / znamky.length;
    if (aritmetickyPrumer.toString().length > 4) {
        aritmetickyPrumer = Number(aritmetickyPrumer.toFixed(2));
    }
    setTimeout(() => {
        console.log("Arithmetic mean: " + aritmetickyPrumer);
    }, 1000); // #pro efekt
    return aritmetickyPrumer;
}

let znamky = init();
calculateMean(znamky);


