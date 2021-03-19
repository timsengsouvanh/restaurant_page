function createContactArea(id){
    const contact = document.createElement('div')
    contact.setAttribute('id', id)
    return contact
}

function createTelNumber(id, telnumber){
    const telNumber = document.createElement('p')
    telNumber.setAttribute('id', id)
    telNumber.innerText = telnumber

    return telNumber
}

function createAddress(id, l1, l2, l3){
    const addressArea = document.createElement('div')
    addressArea.setAttribute('id', id)

    const line1 = document.createElement('p')
    line1.innerText = l1
    addressArea.appendChild(line1)
    const line2 = document.createElement('p')
    line2.innerText = l2
    addressArea.appendChild(line2)
    const line3 = document.createElement('p')
    line3.innerText = l3
    addressArea.appendChild(line3)

    return addressArea
}


function loadContact() {
    const main = document.getElementById('mainarea')
    main.innerHTML = '';
    
    const contact = createContactArea('contact-area')
    main.appendChild(contact)

    const address = createAddress('address-area', 'Unit 1/16 Orchid Street', 'Heathmont, Victoria', '3135')
    contact.appendChild(address) 

    const tel = createTelNumber('tel-number', 'tel: 98931399')
    address.appendChild(tel)
}

export default loadContact;