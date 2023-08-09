export const products = {
    product1: {
        title: 'Enchanted Moonrise Majesty Balloon',
        desc: "Experience the night like never before with our Enchanted Moonrise Majesty Balloon. Drift through the starlit sky in a deep blue balloon adorned with shimmering silver stars and a golden crescent moon. This balloon captures the essence of a magical moonlit night, offering a truly enchanting journey among the constellations.",
        price: '$49.99'
    },
    product2: {
        title: 'Royal Amethyst Nightglow Balloon',
        desc: "Introducing the Royal Amethyst Nightglow Balloon – a majestic purple wonder that takes you on a voyage through the velvety night sky. Its radiant purple hue, accompanied by intricate golden details, will make you feel like royalty as you soar among the stars. Witness the tranquil beauty of the night illuminated by the balloon's soft, luminous glow.",
        price: '$109.99'
    },
    product3: {
        title: 'Nebula Dreamscape Adventure Balloon',
        desc: "Embark on a Nebula Dreamscape Adventure with this captivating hot air balloon. Its midnight blue canvas is adorned with swirling patterns of radiant purples and deep blacks, mimicking the mesmerizing colors of distant galaxies. Let your imagination run wild as you float through the cosmos, surrounded by the mysteries of the universe.",
        price: '$2499.99'
    },
    product4: {
        title: 'Celestial Elegance Luminary Balloon',
        desc: "Indulge in the Celestial Elegance Luminary Balloon – a true masterpiece that combines sophistication and wonder. Its rich black backdrop, embellished with intricate silver and gold designs, creates a striking contrast against the night sky. As you glide serenely through the darkness, the balloon's luminous white accents will light up your journey with a touch of ethereal beauty.Remember that these product names and descriptions are meant to evoke a sense of wonder and adventure associated with each hot air balloon's theme. Adjust them according to your preferences and branding.",
        price: '$2.99'
    },
}

export const gradientDirections = [
    'to right top',
    'to right bottom',
    'to left top',
    'to left bottom',
    'to top',
    'to bottom',
    'to left',
    'to right'
]

export const navbarComponents = {
    name: "Up, Up and Away",
    home: "Home",
    menu: "Menu",
    contact: "Contact Us",
}

export const contactUs = {
    mobileNo: "+621970312341",
    telNo: "416-2134",
    address: "Air Base, Clark, Pampanga, Philippines, 1107",
    schedule: [
        'Tuesday: 12:00 - 22:00',
        'Wednesday: 12:00 - 22:00',
        'Thursday: 12:00 - 22:00',
        'Friday: 12:00 - 23:30',
        'Saturday: 12:00 - 23:30',
        'Sunday: 12:00 - 23:30',
    ]
}

export const div = document.createElement('div')
export const home = document.createElement('li')
export const menu = document.createElement('li')
export const contact = document.createElement('li')

const MAP_MODE = 'search'
const API_KEY = 'AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
const PARAMETERS = 'q=Air+Force+City+Park,Clark,Pampanga'


export const mapsrc = `https://www.google.com/maps/embed/v1/${MAP_MODE}?key=${API_KEY}&${PARAMETERS}`