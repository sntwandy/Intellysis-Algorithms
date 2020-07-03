const pairA = ['A', 'B', 'C'];
const pairB = ['X', 'Y'];
let cartesianResult = [];

const cartesianProduct = (A, B) => {
    for (let i = 0; i <= A.length - 1; i++) {
        for (let j = 0; j <= B.length - 1; j++) {
            cartesianResult.push(`${A[i] + B[j]}`);
        }
    }
}

// cartesianProduct(pairA, pairB)

// console.log( { cartesianResult } );