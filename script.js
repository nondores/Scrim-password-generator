
const characters = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/';


let firstPasswordEl = document.getElementById('first-password-shelf');
let secondPasswordEl = document.getElementById('second-password-shelf');
let generateBtnEl = document.getElementById('generate-button');

const getPassword = length => {
    let result = '';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

generateBtnEl.addEventListener('click', () => {
    firstPasswordEl.textContent = getPassword(12);
    secondPasswordEl.textContent = getPassword(8);
})


// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];


// const generatePassword = (length) => {
//     let password = "";
//     for ( let i = 0; i < length; i++ ) {
//         const randomIndex = Math.floor(Math.random() * characters.length)
//         password += characters[randomIndex]
//     }
//     return password;
// }

// generateBtnEl.addEventListener('click', () => {
//     firstPasswordEl.textContent = generatePassword(16);
//     secondPasswordEl.textContent = generatePassword(8);
// });
