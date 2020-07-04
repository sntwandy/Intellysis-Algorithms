// All the values with their keys
const numbers = [
    {
        key: 1,
        letters: '',
    },
    {
        key: 2,
        letters: 'ABC',
    },
    {
        key: 3,
        letters: 'DEF',
    },
    {
        key: 4,
        letters: 'GH',
    },
    {
        key: 5,
        letters: 'JKL',
    },
    {
        key: 6,
        letters: 'MNO',
    },
    {
        key: 7,
        letters: 'PRS',
    },
    {
        key: 8,
        letters: 'TUV',
    },
    {
        key: 9,
        letters: 'WXY',
    },
    {
        key: 0,
        letters: '',
    },
];

// Values to use to create combinations
let values= [];

// Message combinations
let messageCombinations = [];

// Main Function
const listMnemonics = str => {
    getNumbers(str);
    getCombinations();
};


// New array with numbers selected
const getNumbers = str => {
    for (let i =0; i <= str.length - 1; i++) {
        for (let j = 0; j <= numbers.length - 1; j++) {
            if (str[i] == numbers[j].key) {
                values.push(numbers[j]);
            };
        };
    };
};

// Get all combinations of string > 1 &&& <= 3
const getCombinations = () => {
    if (values.length > 1 && values.length <= 3) {
        for (let i = 0; i <= values[0].letters.length  - 1; i++) {
            for (let j = 0; j <= values[1].letters.length - 1; j++) {
                if (values.length > 2) {
                    for (let k = 0; k <= values[2].letters.length - 1; k++) {
                        messageCombinations.push(values[0].letters[i] + values[1].letters[j] + values[2].letters[k]);
                    }
                } else {
                    messageCombinations.push(values[0].letters[i] + values[1].letters[j]);
                }
            }
        }
    } else {
        alert('Try again, the number should be > 1 and <= 3');
    };
};

// listMnemonics('785');

// console.log(messageCombinations);