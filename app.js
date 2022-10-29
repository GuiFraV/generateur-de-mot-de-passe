//Selectors:
const input = document.querySelector('input[type="range"]');
const number = document.querySelector('#number-length');
const header = document.querySelector('header p');
const button = document.querySelector('.generate');
const upper = document.querySelector('#uppercase');
const lower = document.querySelector('#lowercase');
const numb = document.querySelector('#number');
const symb = document.querySelector('#symbol');
const svg = document.querySelector('.copy-svg');
const firstSquare = document.getElementById('first');
const secondSquare = document.getElementById('second');
const thirdSquare = document.getElementById('third');
const forthSquare = document.getElementById('forth');
const checkbox = document.querySelectorAll('input[type="checkbox"]');

//Variables Globales:
let password = [];
const Alpha = 'abcdefhijklmnopqrstuvwxyz';
const Num = '0123456789';
const Special = '!$%&.';

//Logiques:
function valueInput(e){ // 1) Génère une longueur de mot de passe
    let lenght = e.target.value;
    number.innerHTML = lenght;
}

function generateLength(){ // 2) Définit la longueur dans la moulinette
    let characterLength = document.querySelector('#number-length');
    cryptoPassword(parseInt(characterLength.innerText));
}

function cryptoPassword(lenght){ // 3) Moulinette qui crée un mot de passe random

    for(let i = 0; i <= lenght; i++) {
        
        let randomNumber = Math.floor(Math.random()*26);
        let randomNumber2 = Math.floor(Math.random()*26);
        let randomNumber3 = Math.floor(Math.random()*10);
        let randomNumber4 = Math.floor(Math.random()*5);
            
        lowerCase(randomNumber)

        upperCase(randomNumber2);
    
        numberCase(randomNumber3);

        symbolCase(randomNumber4);
    
    }

    let pass = password.join('').slice(0,lenght);
    header.innerHTML = pass;
        
    strengthValue();
}

function lowerCase(randomNumber){ // Ajoute des minuscules
    if(lower.checked){
        password.unshift(Alpha[randomNumber]); 
    }
}

function upperCase(randomNumber2){ // Ajoute des Majuscules
    if(upper.checked){
        password.unshift(Alpha.toUpperCase()[randomNumber2]);
    }
}

function numberCase(randomNumber3){ // Ajoute des chiffres
    if(numb.checked){
        password.unshift(Num[randomNumber3]);  
    }
}

function symbolCase(randomNumber4){ // Ajoute des caractères spéciaux
    if(symb.checked){
        password.unshift(Special[randomNumber4]);
    }
}

function copyBoard(){ // Manipulation du password generator
    let copyText = header.innerHTML;
    navigator.clipboard.writeText(copyText); // Copie du mdp dans le presse-papier
    copied();
}

function copied(){ // Gestion du mot 'copied'
    const copiedWord = document.querySelector('.copied');
    copiedWord.classList.add('visible');

    setTimeout(() => { // Enlève le mot copied après 1seconde
        copiedWord.classList.remove('visible')
    ;}, 1000)
}

function strengthValue(){ // Gestion de la force du mdp (couleur + indication par mot)
    const textForce = document.querySelector('.text-medium');

    if(header.innerHTML.length <= 0){
        resetStrengthValue();
        textForce.innerHTML = '';
    }

    if(header.innerHTML.length >= 1 && header.innerHTML.length <= 5){
        resetStrengthValue();
        textForce.innerHTML = 'too weak!';
        firstSquare.classList.add('red');
    }

    if(header.innerHTML.length > 5 && header.innerHTML.length <= 10){
        resetStrengthValue();
        textForce.innerHTML = 'weak';
        firstSquare.classList.add('orange');
        secondSquare.classList.add('orange');
    }

    if(header.innerHTML.length > 10 && header.innerHTML.length <= 15){
        resetStrengthValue();
        textForce.innerHTML = 'medium';
        firstSquare.classList.add('yellow');
        secondSquare.classList.add('yellow');
        thirdSquare.classList.add('yellow');
    }

    if(header.innerHTML.length > 15 && header.innerHTML.length <= 20){
        resetStrengthValue();
        textForce.innerHTML = 'strong';
        firstSquare.classList.add('green');
        secondSquare.classList.add('green');
        thirdSquare.classList.add('green');
        forthSquare.classList.add('green');
    }

}

function resetStrengthValue(){

    firstSquare.classList.remove('green');
    secondSquare.classList.remove('green');
    thirdSquare.classList.remove('green');
    forthSquare.classList.remove('green');

    firstSquare.classList.remove('yellow');
    secondSquare.classList.remove('yellow');
    thirdSquare.classList.remove('yellow');
    forthSquare.classList.remove('yellow');
  
    firstSquare.classList.remove('orange');
    secondSquare.classList.remove('orange');
    thirdSquare.classList.remove('orange');
    forthSquare.classList.remove('orange');

    firstSquare.classList.remove('red');
    secondSquare.classList.remove('red');
    thirdSquare.classList.remove('red');
    forthSquare.classList.remove('red');
}

//Events:
input.addEventListener('change', valueInput);
input.addEventListener('mousemove', valueInput);
button.addEventListener('click', generateLength);
svg.addEventListener('click', copyBoard);
