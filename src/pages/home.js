import { content } from '../index'
import { createModal } from '../components/modal'

const readModal = () => {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("myBtn");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
    modal.style.display = "block";
    }

    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

export const HomeComponent = () => {
    const main = document.createElement('main')
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    const button = document.createElement('button')
    main.classList.add("home")
    button.setAttribute("id", "myBtn")

    h1.innerHTML = "It's not where you go, it's how you get there."
    h2.innerHTML = "The sky is no longer the limit."
    button.innerHTML = "Order now!"

    main.append(h1)
    main.append(h2)
    main.append(button)
    main.append(createModal())
    
    content.appendChild(main)

    window.onload = readModal()
}

