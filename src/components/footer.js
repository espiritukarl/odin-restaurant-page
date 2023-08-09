import Icon from '../github_icon.png'
import { content } from '../index'

export const FooterComponent = () => {
    const footer = document.createElement('footer')
    footer.classList.add("footer")
    const a = document.createElement('a')
    const github_icon = new Image();
    github_icon.src = Icon;
    github_icon.classList.add("icon")

    a.innerHTML = 'Created by: Karl Espiritu '
    a.setAttribute('href', 'https://github.com/espiritukarl');

    a.append(github_icon)
    footer.append(a)
    
    content.appendChild(footer) 
}