import loadPage from './initload';
import loadHome from './home';
import loadContact from './contact';
import loadMenu from './menu';



function initialize(){
loadPage()
loadHome()   
addEvents() 
}

initialize()

function addEvents(){
    const home = document.getElementById('home')
    const menu = document.getElementById('menu')
    const contact = document.getElementById('contact')   
    
    home.addEventListener('click', loadHome)
    menu.addEventListener('click', loadMenu)
    contact.addEventListener('click', loadContact)
}




