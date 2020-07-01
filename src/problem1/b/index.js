// Problem number 1, section: b

let addressBook = [];

const firstValidation = (firstName, lastName, fn) => {
    for(let i = 0; i < addressBook.length; i++){
        if (addressBook[i].lastName.toLowerCase() === lastName.toLowerCase()) {
            return fn(firstName);
        }
    };
};

const secondValidation = firstName => {
    for(let i = 0; i < addressBook.length; i++){
        if (addressBook[i].firstName.toLowerCase() === firstName.toLowerCase()) {
            return true;
        }
    };
};

const addFriend = (firstName, lastName) => {

    firstValidation(firstName, lastName, secondValidation) ?
        console.log('This user is already registered')
        :
        addressBook = [ ...addressBook, {
            firstName,
            lastName,
        } ];
        console.log(addressBook);
};