export const HeaderComponent = (div, home, menu, contact, navbarComponents) => {
    const header = document.createElement('header')
    const ul = document.createElement('ul')


    home.innerHTML = navbarComponents.home
    menu.innerHTML = navbarComponents.menu
    contact.innerHTML = navbarComponents.contact
    div.innerHTML = navbarComponents.name

    ul.append(home)
    ul.append(menu)
    ul.append(contact)

    header.append(div)
    header.append(ul)

    return header
}