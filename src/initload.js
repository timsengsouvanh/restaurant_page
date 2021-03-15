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

function createAbout(id){
    const about = document.createElement('div')
    about.setAttribute('id', id)
    about.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    return about
}

function loadPage() {
    const content = document.getElementById('content')
    
    const header = createHeader('header')
    content.appendChild(header)

    const restName = createRestName('rest-name', 'Kiosk')
    header.appendChild(restName)

    const navBar = createNavBar('nav-bar')
    header.appendChild(navBar)

    const about = createAbout('about')
    content.appendChild(about)
}

export default loadPage;