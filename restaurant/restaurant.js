const image = document.querySelectorAll(".slide img");
const slide = document.querySelector(".slide");
const next = document.getElementById('next');
const stopbtn = document.getElementById("stop");

 var size = image[0].clientWidth;
  var counter = 1;
  var dotscounter = 1;
  const dots = document.getElementsByClassName("dots");
  var navbar = document.getElementById('navbar');
  var sticky = navbar.offsetTop;
  const galeria = document.querySelectorAll(".box");
  const allGaleri = document.querySelector(".galerie")
 const prev = document.querySelector(".prev-box");
 const esc = prev.querySelector(".icon");
 const selectimg = prev.querySelector("img");
 const inapoi = document.querySelector(".prev");
 const inainte = document.querySelector(".next");
 const container = document.querySelector(".container2");
 const black = document.getElementById("black");
 const curent = document.querySelector(".current-img");
 const total = document.querySelector(".total")

 //nav bar
  window.onscroll = function() {myFunction()};
    


  function myFunction(){
     if( window.pageYOffset >= sticky ){
         navbar.classList.add("sticky")
     } else {
         navbar.classList.remove('sticky');
     }
  }
     
     
  const nav = document.getElementById("navul");
const btn = document.getElementById("menubutton");
  const close = document.querySelector("body");

btn.addEventListener("click", openNav );

function openNav(){
nav.classList.toggle("open-nav");

}

  //slide carusel

 function slider (){
  slide.style.transition = " 1s ease-in-out 0.5s";
  slide.style.transform = "translateX("+(-size *counter)+"px)";
  counter++;
  console.log(counter);
  console.log(image[0].clientWidth);
 }
  



slide.addEventListener("transitionend",()=>{
  if(counter == image.length){
    counter = 0;
    slide.style.transition = "none";
    slide.style.transform = "translateX("+(-size *counter)+"px)";
    counter++;
    console.log(counter);
  }
});

function dot(){
  if(dotscounter == dots.length){
    dotscounter=0;
    dots[dotscounter].classList.add("active");
  dots[dots.length - 1].classList.remove("active");
  dots[dotscounter].classList.add("fa-sm");
  dots[dots.length - 1].classList.remove("fa-sm");
  dotscounter++;

  }else{
    dots[dotscounter].classList.add("fa-sm");
  dots[dotscounter - 1].classList.remove("fa-sm");
  dots[dotscounter].classList.add("active");
  dots[dotscounter-1].classList.remove("active");
  dotscounter++;}
}
let primucounter;
let secondcounter;

function resume(){
  primucounter = setInterval( slider , 5000 ); 
 secondcounter = setInterval(dot ,5000);
}


window.addEventListener("DOMContentLoaded", ()=>{
    resume();
  });

document.addEventListener("visibilitychange", () => {
if(document.hidden){
clearInterval(primucounter);
clearInterval(secondcounter);
return;
}
resume();
});

//galeria de imagini
window.onload = () =>  {

  for(let i = 0 ; i < galeria.length ; i++){
     

      galeria[i].onclick = ()=>{
          let newI = i;
          
          total.textContent = galeria.length;
          
          curent.textContent = newI +1;
          prev.classList.add("show");
          function img() {
               let select = galeria[newI].querySelector("img").src;
               selectimg.src = select;
               curent.textContent = newI +1;
             if(prev.classList.contains("show")){
              black.classList.add("black");
             }
               allGaleri.style['pointer-events'] = 'none';
               if(newI == 0){
                  inapoi.style.display = "none";
                  inainte.style.display = "block";
              }
              else if(newI == galeria.length-1){
                  inainte.style.display = "none";
                  inapoi.style.display = "block";
              }else{
                  inapoi.style.display = "block";
                  inainte.style.display = "block";
                 
              }
              

               console.log(newI);
          }
          img();
          inainte.addEventListener("click", () => {
              if(newI <= galeria.length-2){
                  inainte.style.display = "none";

              }
              newI++;
              img();
              console.log(newI);
              
          
          });
          inapoi.addEventListener("click", () => {
              if(newI == 1){
                  inapoi.style.display = "none";
              }
              newI--;
              img();
              
          
          });

      }
  }
}
esc.addEventListener("click", inchide);
function inchide(){

  prev.classList.remove("show");
  allGaleri.style['pointer-events'] = 'auto';
  black.classList.remove("black");
}
black.addEventListener("click",()=>{
  prev.classList.remove("show");
  black.classList.remove("black");
  allGaleri.style['pointer-events'] = 'auto';
});
