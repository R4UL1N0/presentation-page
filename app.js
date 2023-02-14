import { execTyping } from "./functions/typingFunction.js";


document.addEventListener('DOMContentLoaded', () => {
    initApp()
})

function initApp() {
    console.log('APP IS INITIALIZED')   
    window.onscroll = ()  => {
        console.log('scrolling')
        showGoToTopButton()
        execTyping()

        const btnScrollUp = document.getElementById('btn-top').addEventListener('click', scrollToTheTop)
      };
        
}   

let hasScrolledBefore = false;

function showGoToTopButton() {
    let mybutton = document.getElementById("btn-top");

    const opacityToOne = [
        { opacity: 0 },
        { opacity: 1 }
      ];
    
      
      const btnTime = {
        duration: 2000,
        iterations: 1,
      }

    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        mybutton.style.display = "block";
        if (!hasScrolledBefore) {
            mybutton.animate(opacityToOne, btnTime)
            hasScrolledBefore = true
        }
      } else {
        hasScrolledBefore = false
        mybutton.style.display = "none";
  
      }

}

function scrollToTheTop() {
    console.log('HI')
    window.scrollTo({top: 0, behavior: 'smooth'});
}



function oi() {
    console.log('oi')
}

function uploadPages() {
    
}
