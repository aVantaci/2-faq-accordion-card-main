const que = [...document.getElementsByClassName('que')]
const img = [...document.querySelectorAll('.que>p>img')]
const answ = [...document.querySelectorAll('.que>p+p')]
const box = document.querySelector('.four')

function changeColor() {
    const index = que.indexOf(this)

    if (que[index].className == 'que') {
        que.forEach(element => element.classList.remove('active'))
        que[index].classList.add('active')
        answ.forEach(element => element.classList.remove('show'))
        answ[index].classList.add('show')
        img.forEach(element => element.style.transform = '')
        img[index].style.transform = 'rotate(-180deg)'
    } else {
        que[index].classList.remove('active')
        answ[index].classList.remove('show')
        img[index].style.transform = 'rotate(0deg)'
    }
}

function boxMove(move) {
    box.style.left = move
}

que.forEach(element => element.addEventListener('click', changeColor))