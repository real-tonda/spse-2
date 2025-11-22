
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
