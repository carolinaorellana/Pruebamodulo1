//Navbar con cambio de color en background 
//Bootstrap 5.1 y javascript 

var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    if(window.pageYOffset >100){
        nav.classList.add('bg-info', 'shadow');
    }else{
        nav.classList.remove('bg-info', 'shadow');
    }
})
