function createContact(id){
    const contact = document.createElement('div')
    contact.setAttribute('id', id)
    contact.innerText = 'Kiosk contact test'
    return contact
}

function loadContact() {
    const main = document.getElementById('mainarea')
    main.innerHTML = '';
    
    const contact = createContact('contact')
    main.appendChild(contact)
}

export default loadContact;