const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.style.background="rgba(10,12,15,.72)";

    }else{

        navbar.style.background="rgba(12,14,18,.35)";

    }

});