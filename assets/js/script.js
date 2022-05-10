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

//tooltip (en cards e iconos de redes sociales) 
/*Bootstrap 5.1*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
