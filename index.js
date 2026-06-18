const btnProximo = document.querySelector('#proximo')
const btnAnterior = document.querySelector('#anterior')

const div1 = document.querySelector('.primeiro')
const div2 = document.querySelector('.segundo')
const div3 = document.querySelector('.terceiro')

btnProximo.addEventListener('click', () => {
    if(div1.style.display === 'flex'){
        div1.style.display = 'none'
        div2.style.display = 'flex'
        div3.style.display = 'none'
    } else if (div2.style.display === 'flex'){
        div1.style.display = 'none'
        div2.style.display = 'none'
        div3.style.display = 'flex'
    } else {
        div1.style.display = 'flex'
        div2.style.display = 'none'
        div3.style.display = 'none'
    }
})

btnAnterior.addEventListener('click', () => {
    if(div1.style.display === 'flex'){
        div1.style.display = 'none'
        div2.style.display = 'none'
        div3.style.display = 'flex'
    } else if (div3.style.display === 'flex'){
        div1.style.display = 'none'
        div2.style.display = 'flex'
        div3.style.display = 'none'
    } else {
        div1.style.display = 'flex'
        div2.style.display = 'none'
        div3.style.display = 'none'
    }
})