let currentSlide = 0;
let imgSrc = "";
let imgSrc2 = "";
function whatSlide(){
    if(currentSlide == 1) {
      
      imgSrc = "Images/Graphics/Reviews.svg"
      imgSrc1 = "Images/Graphics/Reviews (1).svg"
      
    }else if(currentSlide == 2){
      
      imgSrc = "Images/Graphics/Reviews (2).svg"
      imgSrc1 = "Images/Graphics/Reviews (3).svg"
      
    }else if(currentSlide == 3){
      
      imgSrc = "Images/Graphics/Reviews (4).svg"
      imgSrc1 = "Images/Graphics/Reviews (4).svg"
      
    }else if(currentSlide < 0){
       currentSlide = 3;
       whatSlide();
    }else if(currentSlide ==4){
      currentSlide = 1;
      whatSlide();
    }
}


function slideforward() {
    currentSlide++;
    whatSlide();
    document.getElementById("review1").src = imgSrc;
    document.getElementById("review2").src = imgSrc1;
 }

 function slidebackward() {
    currentSlide--;
    whatSlide();
    document.getElementById("review1").src = imgSrc;
    document.getElementById("review2").src = imgSrc1;
 }
