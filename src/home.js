function createAbout(id){
    const about = document.createElement('div')
    about.setAttribute('id', id)
    about.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    return about
}

function loadHome(){
    const main = document.querySelector('#mainarea')
    main.innerHTML = '';
    
    const about = createAbout('about')
    main.appendChild(about)
}

export default loadHome;