
let firstButton=document.querySelector(".first")
let secondButton=document.querySelector(".second")
let thirdButton=document.querySelector(".third")

let screen=document.querySelector(".screen")
let buttons=document.querySelectorAll(".button")
let reset=document.querySelector(".reset").addEventListener("click", function(){screen.innerHTML="0";  smallScreen.innerHTML=""; işaret.innerHTML=""})
let smallScreen=document.querySelector(".smal-screen")
let eşittir=document.querySelector(".eşittir")
let toplama=document.querySelector(".toplama")
let işaret=document.querySelector(".işaret")
let cıkarma=document.querySelector(".cıkma")
let bölme=document.querySelector(".bölme")
let çarpma=document.querySelector(".çarpma")
let del=document.querySelector(".del")


del.addEventListener("click", function(){
    screen.innerHTML = screen.innerHTML.toString().slice(0, -1)
})

buttons.forEach(button => {
    button.addEventListener("click", function(){
        
        if (screen.innerHTML=="0") {
            screen.innerHTML=""
        }
      

        if (button.className=="button") {
            screen.innerHTML+=button.innerHTML
        }
    })
});

toplama.addEventListener("click", function(){

  smallScreen.innerHTML=screen.innerHTML
  işaret.innerHTML="+"
  screen.innerHTML="0"

})

cıkarma.addEventListener("click", function(){

    smallScreen.innerHTML=screen.innerHTML
    işaret.innerHTML="-"
    screen.innerHTML="0"
  

})


bölme.addEventListener("click", function(){

    smallScreen.innerHTML=screen.innerHTML
    işaret.innerHTML="%"
    screen.innerHTML="0"
  
})

çarpma.addEventListener("click", function(){

    smallScreen.innerHTML=screen.innerHTML
    işaret.innerHTML="x"
    screen.innerHTML="0"
  
})

eşittir.addEventListener("click", function(){
 
    if (işaret.innerHTML==="+") {
       screen.innerHTML=Number(screen.innerHTML)+Number(smallScreen.innerHTML)
    }

    if (işaret.innerHTML==="-") {
        screen.innerHTML=Number(smallScreen.innerHTML)-Number(screen.innerHTML)
     }

     if (işaret.innerHTML==="%") {
      screen.innerHTML=Math.floor(Number(smallScreen.innerHTML)/Number(screen.innerHTML))
     }
 
     if (işaret.innerHTML==="x") {
        screen.innerHTML=Math.floor(Number(smallScreen.innerHTML)*Number(screen.innerHTML))
       }

    smallScreen.innerHTML=""
  })
  
  









//-------THEME--------

firstButton.addEventListener("click", function(){

    firstButton.style.visibility="hidden"
    secondButton.style.visibility="visible"
    document.querySelector("body").style.backgroundColor="hsl(0, 0%, 90%)"
    document.querySelector(".calculator-theme").style.color="black"
    document.querySelector(".theme-button-radius").style.backgroundColor="hsl(0, 5%, 81%)"
    document.querySelector(".screen").style.backgroundColor="hsl(0, 0%, 93%)"
    document.querySelector(".screen").style.color="black"
    document.querySelector(".buttons").style.backgroundColor="hsl(0, 5%, 81%)"
    document.querySelector(".button:nth-child(4)").style.backgroundColor="hsl(185, 58%, 25%)"
    document.querySelector(".button:nth-child(17)").style.backgroundColor="hsl(185, 58%, 25%)"
    document.querySelector(".button:nth-child(18)").style.backgroundColor="hsl(25, 98%, 40%)"

})

secondButton.addEventListener("click", function(){

    thirdButton.style.visibility="visible"
    secondButton.style.visibility="hidden"
    thirdButton.style.backgroundColor="hsl(176, 100%, 44%)"
    document.querySelector("body").style.backgroundColor="hsl(268, 75%, 9%)"
    document.querySelector(".calculator-theme").style.color="hsl(52, 100%, 62%)"
    document.querySelector(".theme-button-radius").style.backgroundColor="hsl(268, 71%, 12%)"
    document.querySelector(".screen").style.backgroundColor="hsl(268, 71%, 12%)"
    document.querySelector(".screen").style.color="hsl(52, 100%, 62%)"
    document.querySelector(".buttons").style.backgroundColor="hsl(268, 47%, 21%)"
    document.querySelector(".button:nth-child(4)").style.backgroundColor=" hsl(290, 70%, 36%)"
    document.querySelector(".button:nth-child(4)").style.boxShadow="0px 4px hsl(285, 91%, 52%)"
    document.querySelector(".button:nth-child(17)").style.backgroundColor=" hsl(290, 70%, 36%)"
    document.querySelector(".button:nth-child(17)").style.boxShadow="0px 4px hsl(285, 91%, 52%)"
    document.querySelector(".button:nth-child(18)").style.backgroundColor="hsl(176, 100%, 44%)"
    document.querySelector(".button:nth-child(18)").style.boxShadow="0px 4px hsl(177, 92%, 70%)"
    document.querySelector(".button:nth-child(18)").style.color="black"
    
    let button=document.querySelectorAll(".button")

   button.forEach(button => {
    if (button.className=="button") {
           button.style.backgroundColor=" hsl(281, 89%, 26%)"
           button.style.color="hsl(52, 100%, 62%)"
           button.style.boxShadow="0px 4px hsl(290, 70%, 36%)"
    }
   });
})

thirdButton.addEventListener("click", function(){
    
    firstButton.style.visibility="visible"
    thirdButton.style.visibility="hidden"
    secondButton.style.visibility="hidden"
    thirdButton.style.backgroundColor=""
    document.querySelector("body").style.backgroundColor=""
    document.querySelector(".calculator-theme").style.color=""
    document.querySelector(".theme-button-radius").style.backgroundColor=""
    document.querySelector(".screen").style.backgroundColor=""
    document.querySelector(".screen").style.color=""
    document.querySelector(".buttons").style.backgroundColor=""
    document.querySelector(".button:nth-child(4)").style.backgroundColor=""
    document.querySelector(".button:nth-child(4)").style.boxShadow=""
    document.querySelector(".button:nth-child(17)").style.backgroundColor=""
    document.querySelector(".button:nth-child(17)").style.boxShadow=""
    document.querySelector(".button:nth-child(18)").style.backgroundColor=""
    document.querySelector(".button:nth-child(18)").style.boxShadow=""
    document.querySelector(".button:nth-child(18)").style.color=""
    
    const button=document.querySelectorAll(".button")

   button.forEach(button => {
    if (button.className=="button") {
           button.style.backgroundColor=""
           button.style.color=""
           button.style.boxShadow=""
    }
   });
})