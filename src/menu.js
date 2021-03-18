function createMenuArea(id){
    const menu = document.createElement('div')
    menu.setAttribute('id', id)
    
    return menu
}

function createMenuCategory(id, category){
    const menuCategoryArea = document.createElement('div')
    menuCategoryArea.setAttribute('id', id)
    
    const menuCategoryName = document.createElement('h1')
    menuCategoryName.innerText = category
    menuCategoryArea.appendChild(menuCategoryName)

    return menuCategoryArea
}

function createMenuItem(id, name, price){
    const menuItemArea = document.createElement('div')
    menuItemArea.setAttribute('id', id)

    const itemName = document.createElement('h2')
    itemName.innerText = name
    menuItemArea.appendChild(itemName)

    const itemPrice = document.createElement('h2')
    itemPrice.innerText = price
    menuItemArea.appendChild(itemPrice)

    return menuItemArea
}

function loadMenu(){
    const main = document.querySelector('#mainarea')
    main.innerHTML = '';
    
    const menu = createMenuArea('menu-area')
    main.appendChild(menu)

    const fish = createMenuCategory('menu-category', 'Fish')
    menu.appendChild(fish)

    const flake = createMenuItem('menuitem', 'flake', '6')
    menu.appendChild(flake)

    const barramundi = createMenuItem('menuitem', 'barramundi', '10')
    menu.appendChild(barramundi)

    const kingwhiting = createMenuItem('menuitem', 'king whiting', '12')
    menu.appendChild(kingwhiting)

    const chips = createMenuCategory('menu-category', 'Chips')
    menu.appendChild(chips)

    const minimumChips = createMenuItem('menuitem', 'minimum chips', '3')
    menu.appendChild(minimumChips)

    const potatoCake = createMenuItem('menuitem', 'potato cake', '1')
    menu.appendChild(potatoCake)
}

export default loadMenu;