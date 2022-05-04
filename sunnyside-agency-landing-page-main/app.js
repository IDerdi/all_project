let navLink=document.querySelector("#nav-link");
let dropDown=document.querySelector(".dropdown")

navLink.addEventListener("click" , function() {
    
   if (navLink.className=="") {
    navLink.classList.add("is-active");
    dropDown.style.display="flex"
    dropDown.style.transition = " 2s";

   }else{
       navLink.classList.remove("is-active")
       dropDown.style.display="none"
      
   }
})