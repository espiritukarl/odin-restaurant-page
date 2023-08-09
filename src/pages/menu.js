import { content } from '../index'
import { products, gradientDirections } from '../components/data'
import Product1 from '../menu_items/product 1.jpg'
import Product2 from '../menu_items/product 2.jpg'
import Product3 from '../menu_items/product 3.jpg'
import Product4 from '../menu_items/product 4.jpg'


const changeBackgroundGradient = (element) => {
    let colors = 'rgba(69,44,99,1) 0%, rgb(71 27 71) 35%, rgba(0,45,98,1) 100%'
    element.style.backgroundImage = `linear-gradient(${gradientDirections[Math.floor(Math.random() * gradientDirections.length)]}, ${colors})`;
}

const createPhotoElement = (container, image, product) => {
    const section = document.createElement('section')
    const product_image = new Image()
    const div = document.createElement('div')
    const title = document.createElement('div')
    const price = document.createElement('div')
    const desc = document.createElement('div')

    div.classList.add('product__header')
    title.classList.add('product__title')
    price.classList.add('product__price')
    desc.classList.add('product__desc')

    product_image.src = image
    title.innerHTML = product.title
    price.innerHTML = product.price
    desc.innerHTML = product.desc

    div.append(title)
    div.append(price)
    section.append(product_image)
    section.append(div)
    section.append(desc)

    window.onload = changeBackgroundGradient(section)

    container.append(section)
}

export const MenuComponent = () => {
    const main = document.createElement('main')
    main.classList.add('menu')

    createPhotoElement(main, Product1, products.product1)
    createPhotoElement(main, Product2, products.product2)
    createPhotoElement(main, Product3, products.product3)
    createPhotoElement(main, Product4, products.product4)

    content.appendChild(main)
}
