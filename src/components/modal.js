export const createModal = () => {
    const div = document.createElement('div')
    div.setAttribute("id", "myModal")
    div.classList.add("modal")

    const div2 = document.createElement('div')
    div2.classList.add("modal-content")

    const span = document.createElement('span')
    span.classList.add('close')
    span.innerHTML = '&times;'

    div2.appendChild(span)
    div2.innerHTML += `<h2>Hot Air Balloon Booking</h2>
    
    <h3>Booking Details</h3>
    <p>Date: August 15, 2023</p>
    <p>Time: 8:00 AM</p>
    <p>Location: Sky Adventures Park</p>
    
    <h3>Payment Options</h3>
    <div>
        <label>
            <input type="radio" name="paymentMethod" value="creditCard">
            Credit Card
        </label>
        <label>
            <input type="radio" name="paymentMethod" value="paypal">
            PayPal
        </label>
    </div>
    
    <button id="confirmButton">Confirm</button>`

    div.appendChild(div2)

    return div
}