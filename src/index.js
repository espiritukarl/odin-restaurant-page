import './style.css'
import { navbarComponents, div, home, menu, contact } from './components/data'
import { HomeComponent } from './pages/home'
import { MenuComponent } from './pages/menu'
import { ContactComponent } from './pages/contact'
import { HeaderComponent } from './components/header'
import { FooterComponent } from './components/footer'

export const content = document.querySelector("#content")

const removeElementsByClass = (className) => {
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

const deleteContent = (active, inactive1, inactive2) => {
    removeElementsByClass("home")
    removeElementsByClass("menu")
    removeElementsByClass("contact")
    removeElementsByClass("footer")
    active.classList.add('active')
    inactive1.classList.remove('active')
    inactive2.classList.remove('active')
}

const mainComponent = () => {
    content.append(HeaderComponent(div, home, menu, contact, navbarComponents))

    HomeComponent()
    FooterComponent()
    home.classList.add('active')

    div.onclick = () => {
        deleteContent(home, menu, contact)
        HomeComponent()
        FooterComponent()
    }

    document.body.querySelectorAll("li").forEach(element => {
        element.addEventListener('click', (e) => {

            if (e.target.textContent === navbarComponents.home) {
                deleteContent(home, menu, contact)
                HomeComponent()
            }
            else if (e.target.textContent === navbarComponents.menu) {
                deleteContent(menu, home, contact)
                MenuComponent()
            }
            else if (e.target.textContent === navbarComponents.contact) {
                deleteContent(contact, home, menu)
                ContactComponent()
            }

            FooterComponent()
        })
    })

    document.body.appendChild(content)
}

mainComponent()