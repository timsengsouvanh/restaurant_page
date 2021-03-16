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
    const home = document.getElementById('homebtn')
    const menu = document.getElementById('menubtn')
    const contact = document.getElementById('contactbtn')   
    
    home.addEventListener('click', loadHome)
    menu.addEventListener('click', loadMenu)
    contact.addEventListener('click', loadContact)
}




