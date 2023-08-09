window.onscroll = function() {myFunction()};
    
         var navbar = document.getElementById('navbar');
         var sticky = navbar.offsetTop;
    
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