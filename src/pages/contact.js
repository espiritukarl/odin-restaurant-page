import { content } from '../index'
import { buildMap } from '../components/map'
import { contactUs } from '../components/data'

export const ContactComponent = () => {
    const main = document.createElement('main')
    main.classList.add("contact")
    
    const contacts = document.createElement('div')
    contacts.classList.add('contact__container')
    const schedule = document.createElement('div')
    schedule.classList.add('schedule__container')


    // Left side of contacts (contact number and address)
    const contactNumbers = document.createElement('section')
    contactNumbers.classList.add('contact_numbers')
    const address = document.createElement('section')
    address.classList.add('address')

    
    // Right side of contacts (Schedule)
    const scheduleTitle = document.createElement('h2')
    scheduleTitle.classList.add('schedule_title')
    const scheduleTime = document.createElement('ul')
    scheduleTime.classList.add('schedule_time')



    const h2Contact = document.createElement('h2')
    const spanContact1 = document.createElement('div')
    const spanContact2 = document.createElement('div')
    h2Contact.innerHTML = "Contact Us @"
    spanContact1.innerHTML = `Mobile No. ${contactUs.mobileNo}`
    spanContact2.innerHTML =  `Telephone No. ${contactUs.telNo}`

    const h2Address = document.createElement('h2')
    const spanAddress = document.createElement('div')
    h2Address.innerHTML = 'Visit Us @'
    spanAddress.innerHTML = contactUs.address

    scheduleTitle.innerHTML = 'Schedule:'
    contactUs.schedule.forEach(sched => {
        scheduleTime.innerHTML += `<li>${sched}</li>`
    })

    // const map = buildMap()
    // main.append(map)

    contactNumbers.append(h2Contact)
    contactNumbers.append(spanContact1)
    contactNumbers.append(spanContact2)
    address.append(h2Address)
    address.append(spanAddress)

    contacts.append(contactNumbers)
    contacts.append(address)
    schedule.append(scheduleTitle)
    schedule.append(scheduleTime)

    main.append(contacts)
    main.append(schedule)

    content.appendChild(main)
}
