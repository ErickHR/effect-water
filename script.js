
let body = document.querySelector('body')
let container = body.querySelector('.container')

body.addEventListener('click', function(e){
    let divWaterCreate = document.createElement('div')
    divWaterCreate.classList.add('water')
    divWaterCreate.style.top = `${e.offsetY}px`
    divWaterCreate.style.left = `${e.offsetX}px`
    container.prepend(divWaterCreate)

    setTimeout( () => {
        divWaterCreate.remove()
    }, 2000 )

})
