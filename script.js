let currentSlide =1;

let imgSrc = "";
let imgSrc2 = "";
let name1 = "";
let name2 = "";
let Rtext1 = "";
let Rtext2 = "";



let isDown = false;
let isDown2 = false;
let isDown3 = false;
let isDown4 = false;
let border1 = false;
let border2 = false;


var dropdowns = document.getElementById("dropdown1");
var dropdownContent = document.getElementById("dropdown-content1");
var dropdowns2 = document.getElementById("dropdown2");
var dropdownContent2 = document.getElementById("dropdown-content2");
var dropdowns3 = document.getElementById("dropdown3");
var dropdownContent3 = document.getElementById("dropdown-content3");
var dropdowns4 = document.getElementById("dropdown4");
var dropdownContent4 = document.getElementById("dropdown-content4");


function whatSlide(){
    if(currentSlide == 1) {
      
      imgSrc = "Images/Icons/onur.jpg";
      name1 = "Onur Oztaskiran";
      Rtext1 = "“Can a WordPress + WooCommerce + WPML website be this unreal fast(practically was impossible with those active to date)? Yes.”" ;
      border1 = true;
      
      imgSrc2 = "Images/Icons/Avatar.svg";
      name2 = "Richard Lofthouse";
      Rtext2 = "“I made the switch to WordPress and discovered the power of Flux, a game-changing decentralized cloud platform! My transition to #WordPress and Flux not only saved me money but also opened the door to a world of customization and improved website performance. The result? A more professional, responsive, and engaging online presence.”";
      border2 = false;
      
    }else if(currentSlide == 2){
      
      imgSrc = "Images/Icons/Avatar 2.svg";
      name1 = "Jiří Vlček";
      Rtext1 = "“I chose WordPress FLUX WEB3 Cloud mainly because of redundancy and the ability to scale using geolocation. I was also very pleased with the feature that ensures that my project will always be deployed on at least 3 nodes. All this at an unbeatable price. Thank you FLUX.”";
      
      imgSrc2 = "Images/Icons/onur.jpg";
      name2 = "Onur Oztaskiran";
      Rtext2 = "“Can a WordPress + WooCommerce + WPML website be this unreal fast(practically was impossible with those active to date)? Yes.”";
      border2 = true;
      border1 = false;
    
    
    }else if(currentSlide == 3){
      
      imgSrc = "Images/Icons/Avatar.svg";
      name1 = "Richard Lofthouse";
      Rtext1 = "“I made the switch to WordPress and discovered the power of Flux, a game-changing decentralized cloud platform! My transition to #WordPress and Flux not only saved me money but also opened the door to a world of customization and improved website performance. The result? A more professional, responsive, and engaging online presence.”";
      imgSrc2 = "Images/Icons/Avatar 2.svg";
      name2 = "Jiří Vlček";
      Rtext2 = "“I chose WordPress FLUX WEB3 Cloud mainly because of redundancy and the ability to scale using geolocation. I was also very pleased with the feature that ensures that my project will always be deployed on at least 3 nodes. All this at an unbeatable price. Thank you FLUX.”";
      border1 = false;
      border2 = false;

    }else if(currentSlide <= 0){
       currentSlide = 3;
       whatSlide();
    }else if(currentSlide === 4){
      currentSlide = 1;
      whatSlide();
    }
}


function slideforward() {
    currentSlide++;
    whatSlide();
    document.getElementById("reviewicon1").src = imgSrc;
    document.getElementById("reviewicon2").src = imgSrc2;
    
    document.getElementById("reviewText1").innerHTML = Rtext1;
    document.getElementById("reviewText2").innerHTML = Rtext2;
    
    document.getElementById("name1").innerHTML = name1;
    document.getElementById("name2").innerHTML = name2;

    if(document.getElementById("name1").innerHTML == "Onur Oztaskiran"){
      document.getElementById("twittervid").classList.remove("hideVid");
      document.getElementById("twittervid").classList.add("showVid");
    }else{
      document.getElementById("twittervid").classList.remove("showVid");
      document.getElementById("twittervid").classList.add("hideVid");
    }

    if(document.getElementById("name2").innerHTML == "Onur Oztaskiran"){
      document.getElementById("twittervid2").classList.remove("hideVid");
      document.getElementById("twittervid2").classList.add("showVid");
    }else{
      document.getElementById("twittervid2").classList.remove("showVid");
      document.getElementById("twittervid2").classList.add("hideVid");
    }
    
    if(border1 === true){
      document.getElementById("reviewicon1").classList.add("border");
    }else if(border1 === false){
      document.getElementById("reviewicon1").classList.remove("border");
    }
    if(border2 === true){
      document.getElementById("reviewicon2").classList.add("border");
    }else if(border2 === false){
      document.getElementById("reviewicon2").classList.remove("border");
    }

 }

 function slidebackward() {
    currentSlide--;
    whatSlide();
    document.getElementById("reviewicon1").src = imgSrc;
    document.getElementById("reviewicon2").src = imgSrc2;
    
    document.getElementById("reviewText1").innerHTML = Rtext1;
    document.getElementById("reviewText2").innerHTML = Rtext2;
    
    document.getElementById("name1").innerHTML = name1;
    document.getElementById("name2").innerHTML = name2;
    
    if(border1 === true){
      document.getElementById("reviewicon1").classList.add("border");
    }else if(border1 === false){
      document.getElementById("reviewicon1").classList.remove("border");
    }
    if(border2 === true){
      document.getElementById("reviewicon2").classList.add("border");
    }else if(border2 === false){
      document.getElementById("reviewicon2").classList.remove("border");
    }
 }

 
 function dropdown(num) {
  if(num == 1){
     if(isDown===false){
    
    isDown=true;
    
    document.getElementById("pocs").src = "Images/Icons/chevron-up.svg";
    
    dropdownContent.classList.remove("dropdown-content-raised");
    dropdownContent.classList.add("dropdown-content-dropped");
      
      
    dropdowns.classList.remove("dropdown-raised");
    dropdowns.classList.add("dropdown-dropped");
      
    }else if(isDown===true){
    
    isDown=false;
    
    document.getElementById("pocs").src = "Images/Icons/chevron-down.svg";

    dropdownContent.classList.add("dropdown-content-raised");
    dropdownContent.classList.remove("dropdown-content-dropped");

    dropdowns.classList.add("dropdown-raised");
    dropdowns.classList.remove("dropdown-dropped");
  }
  }else if(num == 2){
    if(isDown2===false){
    
    isDown2=true;
    
    document.getElementById("pocs2").src = "Images/Icons/chevron-up.svg";
    
    dropdownContent2.classList.remove("dropdown-content-raised");
    dropdownContent2.classList.add("dropdown-content-dropped");
      
      
    dropdowns2.classList.remove("dropdown-raised");
    dropdowns2.classList.add("dropdown-dropped");
      
    }else if(isDown2===true){
    
    isDown2=false;
    
    document.getElementById("pocs2").src = "Images/Icons/chevron-down.svg";

    dropdownContent2.classList.add("dropdown-content-raised");
    dropdownContent2.classList.remove("dropdown-content-dropped");

    dropdowns2.classList.add("dropdown-raised");
    dropdowns2.classList.remove("dropdown-dropped");
  }
  }else if(num == 3){
    if(isDown3===false){
    
    isDown3=true;
    
    document.getElementById("pocs3").src = "Images/Icons/chevron-up.svg";
    
    dropdownContent3.classList.remove("dropdown-content-raised");
    dropdownContent3.classList.add("dropdown-content-dropped");
      
      
    dropdowns3.classList.remove("dropdown-raised");
    dropdowns3.classList.add("dropdown-dropped");
      
    }else if(isDown3===true){
    
    isDown3=false;
    
    document.getElementById("pocs3").src = "Images/Icons/chevron-down.svg";

    dropdownContent3.classList.add("dropdown-content-raised");
    dropdownContent3.classList.remove("dropdown-content-dropped");

    dropdowns3.classList.add("dropdown-raised");
    dropdowns3.classList.remove("dropdown-dropped");
  }
  }else if(num == 4){
    if(isDown4===false){
    
    isDown4=true;
    
    document.getElementById("pocs4").src = "Images/Icons/chevron-up.svg";
    
    dropdownContent4.classList.remove("dropdown-content-raised");
    dropdownContent4.classList.add("dropdown-content-dropped");
      
      
    dropdowns4.classList.remove("dropdown-raised");
    dropdowns4.classList.add("dropdown-dropped");
      
    }else if(isDown4===true){
    
    isDown4=false;
    
    document.getElementById("pocs4").src = "Images/Icons/chevron-down.svg";

    dropdownContent4.classList.add("dropdown-content-raised");
    dropdownContent4.classList.remove("dropdown-content-dropped");

    dropdowns4.classList.add("dropdown-raised");
    dropdowns4.classList.remove("dropdown-dropped");
  }
  }
 }

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("dropdowna").classList.toggle("dropdowna-hover");

}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
  var dropdowna = document.getElementById("dropdowna");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
    if (myDropdown.classList.contains('dropdowna-hover')) {
      myDropdown.classList.remove('dropdowna-hover');
    }
  }
}

const debounce = (fn) => {
    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;

    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) {
            cancelAnimationFrame(frame);
        }

        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
            // Call our function and pass any params we received
            fn(...params);
        });
    };
};

const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
};

// Listen for new scroll events
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();