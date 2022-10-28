//Selectors:
const input = document.querySelector('input[type="range"]');
const number = document.querySelector('#number-length');
const header = document.querySelector('header p');
const button = document.querySelector('.generate');

//Variables Globales:
let password = [];
const Alpha = 'abcdefhijklmnopqrstuvwxyz';
const Num = '0123456789';
const Special = '!$%&.';

//Logiques:
function valueInput(e){ // 1) Génère une longueur de mot de passe
    let lenght = e.target.value
    number.innerHTML = lenght;
}

function generatePassword(){ // 2) Définit la longueur dans la moulinette
    let characterLength = document.querySelector('#number-length');
    cryptoPassword(parseInt(characterLength.innerText));
}

function cryptoPassword(lenght){ // 3) Moulinette qui crée un mot de passe

    for(let i = 0; i <= lenght; i++) {
        
        let randomNumber = Math.floor(Math.random()*26);
        let randomNumber2 = Math.floor(Math.random()*26);
        let randomNumber3 = Math.floor(Math.random()*26);
        let randomNumber4 = Math.floor(Math.random()*26);
    
        password.push(Alpha[randomNumber]);   
    
        if(randomNumber < randomNumber2){
            password.unshift(Alpha.toUpperCase()[randomNumber]);
        }
    
        if(randomNumber < randomNumber3){
            password.unshift(Num[randomNumber]);  
        }
         
        if(randomNumber < randomNumber4){
            password.unshift(Special[randomNumber]);
        }
    }

    let pass = password.join('').slice(0,lenght);
    header.innerHTML = pass;
}

//Events:
input.addEventListener('change', valueInput);
input.addEventListener('mousemove', valueInput);
button.addEventListener('click', generatePassword);







