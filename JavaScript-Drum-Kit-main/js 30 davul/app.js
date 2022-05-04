window.addEventListener("keydown",function (e) {
   const aud=document.querySelector(`audio[data-key="${e.keyCode}"]`)
   const key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
   if(!aud) return;
   aud.currentTime=0;
   aud.play()
   key.classList.add("played")
   console.log(aud)
})

function removeTransition(e){
     if(e.propertyName !== "transform") return;
     this.classList.remove("played")
}
const keys=document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

//click//

keys.forEach(key => key.addEventListener("click", function(e){
     
 if (key.id === "clap") {
      const clapSound=document.querySelector(`audio[data-key="${65}"]`);
      clapSound.currentTime=0;
      clapSound.play()
   }

 if (key.id === "nihat") {
    const nihatSound=document.querySelector(`audio[data-key="${83}"]`);
    nihatSound.currentTime=0;
    nihatSound.play()
 }

 if (key.id === "kick") {
    const kickSound=document.querySelector(`audio[data-key="${68}"]`);
    kickSound.currentTime=0;
    kickSound.play()
 }

 if (key.id === "openhat") {
    const openhatSound=document.querySelector(`audio[data-key="${70}"]`);
    openhatSound.currentTime=0;
    openhatSound.play()
 }

 if (key.id === "boom") {
    const boomSound=document.querySelector(`audio[data-key="${71}"]`);
    boomSound.currentTime=0;
    boomSound.play()
 }

 if (key.id === "sticks") {
    const sticksSound=document.querySelector(`audio[data-key="${72}"]`);
    sticksSound.currentTime=0;
    sticksSound.play()
 }

 if (key.id === "ride") {
    const rideSound=document.querySelector(`audio[data-key="${74}"]`);
    rideSound.currentTime=0;
    rideSound.play()
 }

 if (key.id === "tom") {
    const tomSound=document.querySelector(`audio[data-key="${75}"]`);
    tomSound.currentTime=0;
    tomSound.play()
 }

 if (key.id === "snare") {
    const snareSound=document.querySelector(`audio[data-key="${76}"]`);
    snareSound.play()
    snareSound.currentTime=0;
 }
    
    key.classList.toggle("played")

})) ;
   
   
