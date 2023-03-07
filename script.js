let screenWidth = window.innerWidth;


//this function will reverse the order of the experience box whenever the width of the sreen is more than 992
function experienceOrder (screenWidth){
   let boxes = document.querySelectorAll('.experience__box'); 
    if(screenWidth > 992) {
        boxes.forEach((e) => {e})
    }
}