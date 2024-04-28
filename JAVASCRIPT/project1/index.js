const body=document.querySelector("body")
const tempdiv=document.querySelector(".canvas")
const buttons=document.querySelectorAll(".button")
buttons.forEach( function(button){
    
    button.addEventListener('mouseover',function(e){
        
     body.style.backgroundColor=e.target.id;
     tempdiv.style.backgroundColor=e.target.id;
   
    })

})