const randomNum = parseInt(Math.random()*100+1)
console.log(randomNum)
const submit = document.querySelector('#subt')
const inputNum = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const prevNumber= document.querySelector('.lastResult')
const loworhi= document.querySelector('.lowOrHi')

let prevElem=[]
let guessdNum=1
let gameAccess = true
const p= document.getElementById('para')

if(gameAccess){
    submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(inputNum.value);
    console.log(guess)
    validate(guess)
    })
}

function validate(guess){
    if(isNaN(guess)){
        alert("enter valid number")
    } else if(guess<=0 && guess>100){
        alert("Enter constraint number")
    }
    else{
        prevElem.push(guess);
        if(guessdNum>10){
            //displayguess(guess)
            displaymassage(`game over : Random numer was ${guess}`)
            gameEnd()
        } else{
            displayguess(guess)
            checkguess(guess)
        }
    }

}
function checkguess(guess){
 if(guess == randomNum){
    displaymassage("Your guess it right")
    gameEnd()
 }
 else if(guess>randomNum){
    displaymassage("number is High")
 }
 else if(guess>randomNum){
    displaymassage("number is low")
 }
}
function displayguess(guess){
    inputNum.value=''
   guessSlot.innerHTML += `${guess}   `
   guessdNum++;
   prevNumber.innerHTML = `${11-guessdNum}`

}
function displaymassage(massage){
 loworhi.innerHTML= `<span>${massage}</span>`;
}
function gameEnd(){

    prevNumber.innerHTML="Game has been end"
   inputNum.setAttribute('disabled', '')
   p.classList.add('button')
   p.innerHTML=`<h2 id="newGAme" > Start new game </h2>`;
   gameAccess=false
  gamestartagain()
}
function gamestartagain(){
    const newGAmebutton=document.querySelector('#newGAme')
    newGAmebutton.addEventListener('click',function(e){
       const randomNum = parseInt(Math.random()*100+1)
        prevElem=[]
        guessdNum=1
        guessSlot.innerHTML=''
        prevNumber.innerHTML = `${11-guessdNum}`
        p.innerHTML=''
        inputNum.removeAttribute('disabled', '')
        gameAccess = true
    })
}