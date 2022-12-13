// sticky header ********************************************************************************************************************************
window.addEventListener("scroll", function () {
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// arrow up**************************************************************************************************************************
let arrowup = document.querySelector(".arrow");
window.onscroll = function () {
    // console.log(this.scrollY);
    if (this.scrollY >= 10) {
        arrowup.classList.add("show");

    }
    else {
        arrowup.classList.remove("show");
    }
};
arrowup.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

// slider background****************************************************88
var myimg = document.getElementById('sec1');
var pic = ['pic1.jpg', 'pic3.jpg', 'pic12.jpg'];

// function changeimg(pic){
    setInterval(function(){
        myrandom = Math.floor(Math.random() * pic.length);
        // myimg.src = pic[myrandom];
        myimg.style.background = `url(img/${pic[myrandom]})`;
        myimg.style.backgroundRepeat = `no-repeat`;
        myimg.style.backgroundPosition = `top center`;
        myimg.style.backgroundSize = `cover`;
        myimg.style.width = `100%`;
        myimg.style.height = `100vh`;
    }, 5000);

// bar of menu
// var menu = document.querySelector("nav");
// var openbtn = document.querySelector(".toggle-open");
// var closebtn = document.querySelector(".toggle-close");

// openbtn.onclick = () => {
//     menu.classList.add("active");
// };
// closebtn.onclick = () => {
//     menu.classList.remove("active");
// };


// accordion*******************************************************************
const accordion = document.getElementsByClassName('contentBX');
for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        // accordion[i].style.display = 'block';
        this.classList.toggle('active');
    })
}

// swiper******************************************************************************************************************************************************
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 8500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });