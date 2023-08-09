

    
var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;
const nav = document.getElementById("navul");
const btn = document.getElementById("menubutton");
const btnFood = document.getElementById("btnfood");
const btnDrink = document.getElementById("btndrink");
const showFood = document.getElementById("open-box-food");
const showDrink = document.getElementById("open-box-drink");
const showContent = document.getElementsByClassName("boxm");
const textdrink = document.getElementsByClassName("boxdrink");


window.onscroll = function() {myFunction()};
function myFunction(){
   if( window.pageYOffset >= sticky ){
       navbar.classList.add("sticky")
   } else {
       navbar.classList.remove('sticky');
   }
}
function closeNav(){
   nav.classList.toggle("open-nav");
   
   }
   
   

btnFood.addEventListener("click", showFoodWin) ;
btnFood.addEventListener("click", scrollMenuFood) ;
btn.addEventListener("click", closeNav  );
btnDrink.addEventListener("click", showDrinkWin);
btnDrink.addEventListener("click", scrollMenuDrink);



function showFoodWin(){

if(showDrink.classList.contains("open-box-drink") ){
   showDrink.classList.remove("open-box-drink");
   showFood.classList.add("open-box-food");
   for(let i= 0;showContent.length>i; i++)
        { showContent[i].style.display="flex";}
        for(let i= 0;textdrink.length>i; i++)
        { textdrink[i].style.display="none";}
 
}else if (showFood.classList.contains("open-box-food")){
   showFood.classList.remove("open-box-food");
   for(let i= 0;showContent.length>i; i++)
        { showContent[i].style.display="none";}   
}else{
   showFood.classList.add("open-box-food");
   for(let i= 0;showContent.length>i; i++)
        { showContent[i].style.display="flex";}  
}

}
function showDrinkWin(){

if(showFood.classList.contains("open-box-food")){
   showFood.classList.remove("open-box-food");
   showDrink.classList.add("open-box-drink");
   for(let i= 0;textdrink.length>i; i++)          {
       textdrink[i].style.display="flex";}
       for(let i= 0;showContent.length>i; i++)
        { showContent[i].style.display="none";}
}else if( showDrink.classList.contains("open-box-drink")){
   showDrink.classList.remove("open-box-drink");
   for(let i= 0;textdrink.length>i; i++)         
    {
       textdrink[i].style.display="none";   
}
}
else{
   showDrink.classList.add("open-box-drink");
   for(let i= 0;textdrink.length>i; i++)        
     {textdrink[i].style.display="flex";}
}

}
function scrollMenuFood(){
   if(showFood.classList.contains('open-box-food')){
      showFood.scrollIntoView({behavior:'smooth'});
}else{};
}
function scrollMenuDrink(){
   showDrink.scrollIntoView({behavior:'smooth'});
}



