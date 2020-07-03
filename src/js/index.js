const sampleWeights = [1, 3];
let counter = 0;

const measure = (target, sampleWeights) => {
    if (counter <= sampleWeights.length) {
        if (target === sampleWeights[counter]) {
            return true;
        } else {
            counter++;
            return measure(target, sampleWeights);
        };
    }

    if (target === sampleWeights[0] + sampleWeights[1]) {
        return true;
    } else {
        return false;
    }
}

console.log(measure(2, sampleWeights));