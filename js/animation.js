let divCave = document.querySelector('.div-img-cave');
let imgMountain = document.querySelector('.div-img-mountain-1 img');
let imgMountain2 = document.querySelector('.div-img-mountain-2 img');
let divText = document.querySelectorAll('.p-text');
let screen = window.screen.width;
let menu = document.getElementById('btn')
let menuItems = document.querySelector('.ul-navbar');

console.log(menu)
menu.addEventListener("click", () => {
    menuItems.classList.toggle("show");
});



setTimeout(() => {
    divText.forEach((element, index) => {
       
        let numberSign = index == 0 ? "-" : "";
        let axis = screen > 768 ? "X" : "Y";
        element.style.transform=`translate${axis}(${numberSign}1000%)`;  
        element.style.opacity="0"  
     
   
        
    });
    divCave.style.maxWidth="1300px";
    divCave.style.flex="1";
    imgMountain.style.top="61%";
    imgMountain2.style.top="56%";
}, 3000); // 3000ms = 3 segundos
