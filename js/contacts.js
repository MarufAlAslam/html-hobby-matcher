const chatBtns = document.querySelectorAll('.chat-button')
const senderImg = document.querySelectorAll('.sender-img')
const sender = document.getElementById('sender')
let name = ""
let imageUrl = ""

chatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        chatBtns.forEach(btn => {
            btn.classList.remove('active')
        })
        btn.classList.add('active')
        name = btn.querySelector('.name').innerText
        imageUrl = btn.querySelector('.image').src

        console.log(name)
        console.log(imageUrl)

        sender.innerText = name
        senderImg.forEach(img => {
            img.src = imageUrl
        })
    })
})