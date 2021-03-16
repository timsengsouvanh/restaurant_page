function createHeader(id) {
    const header = document.createElement('header');
    header.setAttribute('id', id)
    return header
}

function createRestName(id, text) {
    const restName = document.createElement('div');
    restName.setAttribute('id', id)
    restName.textContent = text
    return restName
}

function createButton(id, text) {
    const btn = document.createElement('button')
    btn.setAttribute('id', id)
    btn.textContent = text;
    return btn
} 

function createNavBar(id) {
    const navBar = document.createElement('div');
    navBar.setAttribute('id', id)

    const homeBtn = createButton('home', 'Home')
    const menuBtn = createButton('menu', 'Menu')
    const contactBtn = createButton('contact', 'Contact')
    
    navBar.appendChild(homeBtn)
    navBar.appendChild(menuBtn)
    navBar.appendChild(contactBtn)

    return navBar
}

function createMainArea(id) {
    const mainarea = document.createElement('div');
    mainarea.setAttribute('id', id)
    return mainarea
}



function loadPage() {
    const content = document.getElementById('content')

    const header = createHeader('header')
    content.appendChild(header)

    const restName = createRestName('rest-name', 'Kiosk')
    header.appendChild(restName)

    const navBar = createNavBar('nav-bar')
    header.appendChild(navBar)

    const createMain = createMainArea('mainarea')
    content.appendChild(createMain)
}

export default loadPage;