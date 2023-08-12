const mobile_menu = document.querySelector('.menu-icons');
const header = document.querySelector('#header');

// Toggle menu
const MobileToggle = () =>{
    header.classList.toggle('active');
}
mobile_menu.addEventListener('click',()=>MobileToggle());