const lengthEl = document.getElementById('length');
const symbolEl = document.getElementById('symbol');
const numberEl = document.getElementById('number');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const upperCaseCharacterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseCharacterArray = convertToLower(upperCaseCharacterArray);
const specialCharacters = ['!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
const numericCharacters = Math.floor(Math.random() * 10);
function convertToLower(upperArray) {
    let lowerArrary = [];
    for (let z = 0; z < upperArray.length; z++) {
        lowerArrary.push(upperArray[z].toLowerCase());
    }
    return lowerArrary;
}

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    // number: getRandomNumber,
    // symbol: getRandomSymbol
};
window.onload = function() {
const buttonEl = document.getElementById('generate');
const resultEl = document.getElementById('password');
buttonEl.addEventListener('click', (e) => { 
    var length = prompt(" How long do you want your password to be?");
   var password = generatePassword(length);
   // e.stopPropagation();
   // let length;
    // length += lengthEl.value;
    //const hasLower = lowercaseEl.checked;
    //const hasUpper = uppercaseEl.checked;
   // const hasNumber = numbersEl.checked;
   // const hasSymbol = symbolEl.checked;

    resultEl.innerHTML = password; // generatePassword(
        // hasLower, hasUpper, hasNumber, hasSymbol, length);
});
}
function generatePassword(length) {
let generatePassword = '';
console.log('generatePassword');

var typesArr = ['lower', 'upper', 'number', 'symbol'];

for(let i = 0; i <= length ; i ++ ) { 
    currentOption = Math.floor(Math.random() * typesArr.length); 
            currentCharacter = typesArr[currentOption];
            generatePassword.trim();
            switch (currentCharacter) {
                case 'number':
                    let num = Math.floor(Math.random() * 10);
                    generatePassword += num.toString();
                    break;
                case 'lower':
                    generatePassword += lowercaseCharacterArray[Math.floor(Math.random() * lowercaseCharacterArray.length)];
                    break;
                case 'upper':
                    generatePassword += upperCaseCharacterArray[Math.floor(Math.random() * upperCaseCharacterArray.length)];
                    break;
                case 'symbol':
                    generatePassword+= specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
            }
    // typesArr.forEach(type => {
    //     const funcName = Object.keys(type)[0];

    //     console.log('funcName:', funcName);
        
    //     generatePassword += randomFunc[funcName]();
    //     });
}

return generatePassword;

}
// Generator Function - http://www.net-comber.com/charset.html

function getRandomLower() {
    return lowercaseCharacterArray[Math.floor(Math.random() * lowercaseCharacterArray.length)];

}

function getRandomUpper() {
    return uppercaseCharacterArray[Math.floor(Math.random() * uppercaseCharacterArray.length)];
}

function getRandomNumeric() {
    return Math.floor(Math.random() * 10);
}

function getRandomSpecial() {
    var symbols = '!@#$%^&*';
    return symbols[Math.floor(Math.random() * symbols.length)];
}