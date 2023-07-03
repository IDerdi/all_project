let navLink=document.querySelector("#nav-link");
let dropDown=document.querySelector(".dropdown1")
let main=document.querySelector("main")


//  CIRCULAR PROGRESS

let circularProgressHtml=document.querySelector(".circular-progressshtml"),
    progressValueHtml=document.querySelector(".progress-valuehtml"),

    circularProgressJs=document.querySelector(".circular-progresssjs"),
    progressValueJs=document.querySelector(".progress-valuejs"),

    circularProgressBs=document.querySelector(".circular-progresssbs"),
    progressValueBs=document.querySelector(".progress-valuebs"),

    circularProgressRt=document.querySelector(".circular-progresssrt"),
    progressValueRt=document.querySelector(".progress-valuert"),

    progressValuePyt=document.querySelector(".progress-valuepyt"),
    circularProgressPyt=document.querySelector(".circular-progressspyt"),

    progressValueDj=document.querySelector(".progress-valuedj"),
    circularProgressDj=document.querySelector(".circular-progresssdj"),

    progressValueWp=document.querySelector(".progress-valuewp"),
    circularProgressWp=document.querySelector(".circular-progressswp");
 



// HTML

let progressStartValueHtml=0,
    progressEndValueHtml=90,
    speedhtml= 40;
    

let progressHtml = setInterval(()=>{
    progressStartValueHtml++;
    
    progressValueHtml.innerHTML=`${progressStartValueHtml}%`
    circularProgressHtml.style.background=`conic-gradient(#94e044 ${progressStartValueHtml * 3.6 }deg , #ededed 0deg)`

    if(progressStartValueHtml == progressEndValueHtml ){
        clearInterval(progressHtml)
    }

}, speedhtml)

// JAVASCRİPT

let progressStartValueJs=0,
    progressEndValueJs=70,
    speedJs= 60;
    

let progressJs = setInterval(()=>{
    progressStartValueJs++;
    
    progressValueJs.innerHTML=`${progressStartValueJs}%`
    circularProgressJs.style.background=`conic-gradient(#ffb000 ${progressStartValueJs * 3.6 }deg , #ededed 0deg)`

    if(progressStartValueJs == progressEndValueJs ){
        clearInterval(progressJs)
    }

}, speedJs)

// BOOTSTRAP

let progressStartValueBs=0,
    progressEndValueBs=90,
    speedBs= 50;

    let progressBs = setInterval(()=>{
        progressStartValueBs++;
        
        progressValueBs.innerHTML=`${progressStartValueBs}%`
        circularProgressBs.style.background=`conic-gradient(rgb(255, 102, 172) ${progressStartValueBs * 3.6 }deg , #ededed 0deg)`
    
        if(progressStartValueBs == progressEndValueBs ){
            clearInterval(progressBs)
        }
    
    }, speedBs)

// REACT

let progressStartValueRt=0,
    progressEndValueRt=30,
    speedRt= 100;

    let progressRt = setInterval(()=>{
        progressStartValueRt++;
        
        progressValueRt.innerHTML=`${progressStartValueRt}%`
        circularProgressRt.style.background=`conic-gradient(rgb(11, 116, 100) ${progressStartValueRt* 3.6 }deg , #ededed 0deg)`
    
        if(progressStartValueRt == progressEndValueRt ){
            clearInterval(progressRt)
        }
    
    }, speedRt)


// PYTHON


let progressStartValuePyt=0,
    progressEndValuePyt=40,
    speedPyt= 100;

    let progressPyt = setInterval(()=>{
        progressStartValuePyt++;
        
        progressValuePyt.innerHTML=`${progressStartValuePyt}%`
        circularProgressPyt.style.background=`conic-gradient(#ee8754 ${progressStartValuePyt* 3.6 }deg , #ededed 0deg)`
    
        if(progressStartValuePyt == progressEndValuePyt ){
            clearInterval(progressPyt)
        }
    
    }, speedPyt)





// DJANGO

let progressStartValueDj=0,
    progressEndValueDj=50,
    speedDj= 100;

    let progressDj = setInterval(()=>{
        progressStartValueDj++;
        
        progressValueDj.innerHTML=`${progressStartValueDj}%`
        circularProgressDj.style.background=`conic-gradient(#957195 ${progressStartValueDj* 3.6 }deg , #ededed 0deg)`
    
        if(progressStartValueDj == progressEndValueDj ){
            clearInterval(progressDj)
        }
    
    }, speedDj)







// WORDPRESS

let progressStartValueWp=0,
    progressEndValueWp=20,
    speedWp= 100;

    let progressWp = setInterval(()=>{
        progressStartValueWp++;
        
        progressValueWp.innerHTML=`${progressStartValueWp}%`
        circularProgressWp.style.background=`conic-gradient(#1a1411 ${progressStartValueWp* 3.6 }deg , #ededed 0deg)`
    
        if(progressStartValueWp == progressEndValueWp ){
            clearInterval(progressWp)
        }
    
    }, speedWp)











navLink.addEventListener("click" , function() {
    
   if (navLink.className=="") {
    navLink.classList.add("is-active");
    dropDown.style.display="flex"
    dropDown.style.opacity="1"
    dropDown.style.visibility="visible"
    dropDown.style.transition = " 1.5s"
    dropDown.style.height = " 380px"
    main.style.zIndex = "-1"
    

   }else{
       navLink.classList.remove("is-active")
       dropDown.style.opacity="0"
       dropDown.style.height = " 0px" 
       main.style.zIndex = "0"
       main.style.transition = " 1.5s"
   }
})