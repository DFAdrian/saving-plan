const btn = document.querySelector('button');
const contDisplay = document.querySelector('.container__display')
const save = document.querySelector('.save')
let pickedNumbers = [];

if(!localStorage.getItem('picked')){
    localStorage.setItem('picked', JSON.stringify(pickedNumbers));
}

pickedNumbers = JSON.parse(localStorage.getItem("picked"));

function randomNumber(){
    let random = Math.floor(Math.random()*71)+1; 
    if(!pickedNumbers.includes(random)){
        pickedNumbers.push(random)
        localStorage.setItem('picked',JSON.stringify(pickedNumbers))
        return random
    }else{
        return randomNumber()
    }
}

function displayNumber(){
    contDisplay.textContent = randomNumber()
}

function savingCalc(){
    let result = 0;
    pickedNumbers.map(el=>{
        result += el
    })
    return save.textContent = `$${result}`
}

btn.addEventListener('click',()=>{
    if(pickedNumbers.length < 71){
        displayNumber()
        savingCalc()
    }else{
        contDisplay.textContent = 'You already saved the money for the tutor!!!';
        setTimeout(() => {
            localStorage.clear();
            location.reload();
        }, 5000);
    }
})