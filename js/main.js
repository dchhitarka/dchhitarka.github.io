// Menu Show/Hide in Mobile
// let menuIcon = document.querySelector('.bar-icon');
// let crossIcon = document.querySelector('.cross-icon');
// let sideBar = document.querySelector('.side-bar');
// // Show SIDEBAR
// menuIcon.addEventListener('click', () => {
//     sideBar.style.left = '0';

// })
// // Hide SIDEBAR
// crossIcon.addEventListener('click', () => {
//     sideBar.style.left = '-500px';
// })
// // Change active menu bgc dynamically
// let navItem = document.querySelectorAll('.navigation_item');
// for(let i = 0; i < navItem.length; i++){
//     navItem[i].addEventListener('click', function(){
//         let current = document.querySelector('.nav-active');
//         current.classList.remove('nav-active');
//         navItem[i].classList.add('nav-active');
//     });
// }
// // Important Function
// window.onscroll = function changeColor(){
//     let scrollPos = window.pageYOffset | document.body.scrollTop;

//     let home = document.querySelector('#home');
//     let homeTop = home.getBoundingClientRect().top;
//     let homeBot = home.getBoundingClientRect().bottom;

//     let about = document.querySelector('#about');
//     let aboutTop = about.getBoundingClientRect().top;
//     let aboutBot = about.getBoundingClientRect().bottom;
//     let project = document.querySelector('#project');
//     let projectTop = project.getBoundingClientRect().top;
//     let projectBot = project.getBoundingClientRect().bottom;
//     let contact = document.querySelector('#contact');
//     let contactTop = contact.getBoundingClientRect().top;
//     let contactBot = contact.getBoundingClientRect().bottom;
//     let current = document.querySelector('.nav-active');

//     if(homeTop <= 0 && homeBot > 0){
//         current.classList.remove('nav-active');
//         navItem[2].classList.add('nav-active');
//     }
//     else if(aboutTop <= 0 && aboutBot > 0){
//         current.classList.remove('nav-active');
//         navItem[3].classList.add('nav-active');
//     }
//     else if(projectTop <= 0 && projectBot > 0){
//         current.classList.remove('nav-active');
//         navItem[4].classList.add('nav-active');
//      }
//     else if(contactTop <= 0 && contactBot > 0) {
//         current.classList.remove('nav-active');
//         navItem[5].classList.add('nav-active');
//     }
//     else if(contactBot <= 0){
//         current.classList.remove('nav-active');
//         navItem[6].classList.add('nav-active');
//     }
// }


// function sendEmail() {
//     let from = document.querySelector('#email').value;
//     subject = document.querySelector('#subject').value;
//     body = document.querySelector('#message').value;
//     body += `  From - ${from}`;
//     window.location.href = `mailto:hikikunwritter@gmail.com?Subject=${subject}&Body=${body}`;
// }
window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
        document.querySelector(".modal").style.display = "none";
        stopConfetti();
    }
})
document.querySelector(".modal").addEventListener('click', () => {
    document.querySelector(".modal").style.display = "none";
    stopConfetti();
})

function congrats(){
    document.querySelector(".modal").style.display = "flex";
    startConfetti();
}