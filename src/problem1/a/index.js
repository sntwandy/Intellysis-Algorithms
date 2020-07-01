// Problem number 1, section: a

let addressBook = [];

const firstValidation = (firstName, lastName, fn) => {
    for(let i = 0; i < addressBook.length; i++){
        if (addressBook[i].lastName === lastName) {
            return fn(firstName);
        }
    };
};

const secondValidation = firstName => {
    for(let i = 0; i < addressBook.length; i++){
        if (addressBook[i].firstName === firstName) {
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