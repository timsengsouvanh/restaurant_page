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



function loadPage() {

}