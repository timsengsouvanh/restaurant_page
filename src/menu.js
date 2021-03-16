function createMenuArea(id){
    const menu = document.createElement('div')
    menu.setAttribute('id', id)
    menu.innerText = 'Fish and Chips $1,000,000'
    
    return menu
}

function loadMenu(){
    const main = document.querySelector('#mainarea')
    main.innerHTML = '';
    
    const menu = createMenuArea('menu-area')
    main.appendChild(menu)
}

export default loadMenu;