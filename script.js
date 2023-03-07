let medianScreen = window.screen.width;

//this function will reverse the order of the experience box whenever the width of the sreen is more than 992
function boxReverser (medianScreen){ 
   let boxes = document.querySelectorAll('.experience__box'); 
    if(medianScreen > 992) {
        for(let i = 0; i < boxes.length; i++){
            if(i % 2 == 0) boxes[i].classList.toggle('experience__box__reverse')
        }    
    } 
};

window.addEventListener('resize', boxReverser(medianScreen));