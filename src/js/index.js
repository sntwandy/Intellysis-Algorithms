const string = 'Hola';

const reverseString = str => {
    if (str === '') {
        return str;
    } else {
        return reverseString(str.substr(1)) + str[0];
    }
};

// console.log(reverseString(string));