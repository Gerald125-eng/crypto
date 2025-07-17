const slides = document.querySelectorAll('.charting_area');
let index = 0;

function showSlide(){
    slides.forEach((charting_area, i) =>{
        charting_area.classList.remove('active');
        if(i === index){
         charting_area.classList.add('active');

        }
    })
    index = (index + 1) % slides.length

}

showSlide()

setInterval(showSlide, 2000)




const images = [
    'url("WhatsApp Image 2025-07-10 at 05.00.20.jpeg")',
    'url("moein-ghezelbash-J0uTfdQ_Qnc-unsplash.jpg")',
    'url("WhatsApp Image 2025-07-10 at 04.57.45.jpeg")'
  ];

  let current = 0;
  const hero = document.getElementById("hero");

  function changeBackground() {
    hero.style.backgroundImage = images[current];
    current = (current + 1) % images.length;
  }

  // Initial call
  changeBackground();
  // Change every 3 seconds
  setInterval(changeBackground, 2000);




let OIP_removebg = document.querySelector('.OIP-removebg')
let nav_second = document.querySelector('.nav_second')
let icons8_close = document.querySelector('.icons8-close')

OIP_removebg.addEventListener('click', () =>{
    nav_second.style.display = "flex"
    icons8_close.style.display = "block"
    OIP_removebg.style.display = "none"
})


icons8_close.addEventListener('click', () =>{
    nav_second.style.display = "none"
    OIP_removebg.style.display = "block"
    icons8_close.style.display = "none"
})