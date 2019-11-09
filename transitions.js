
document.addEventListener("DOMContentLoaded", ready);

function ready(){

    let cards=document.querySelectorAll(".card");
    cards.forEach(card=>{
      card.addEventListener("click", cardAnimation);
      card.addEventListener("mouseout", cardAniRemove);
      
    })
    let footer=document.querySelector("footer");
    footer.addEventListener("mouseover",footerAni);
    footer.addEventListener("mouseout",footerAniRemove);
    
    let header=document.querySelector("header");
    header.addEventListener("mouseover",headerAni);
    header.addEventListener("mouseout",headerAniRemove);
  
}

function cardAnimation(){ 
    this.classList.add("swing","animated");
}

function cardAniRemove(){
  this.classList.remove('swing',"animated");
}

function footerAni(){
  this.classList.add("flash","animated");
}
function footerAniRemove(){
  this.classList.remove("flash","animated");
}

function headerAni(){
  this.classList.add("rubberBand","animated");
}
function headerAniRemove(){
  this.classList.remove("rubberBand","animated");
}