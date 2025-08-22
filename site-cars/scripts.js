

let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list')

let active = 0;
let lastPosition = items.length - 1;

function setSlider() {
    let itemOld = container.querySelector('.list .item.entrar');
    if (itemOld) itemOld.classList.remove('entrar');

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('acitive')
    dots[active].classList.add('active')

    indicator.querySelector('.numeros').innerHTML = '0' + (active + 1)


}
nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    // remove do item atual


    // calcula o próximo índice
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider()
    // adiciona no novo item
    items[active].classList.add('entrar');


};

prevButton.onclick = () => {
    list.style.setProperty('--calculation', - 1)
    // remove do item atual
    let itemOld = container.querySelector('.list .item.entrar');
    if (itemOld) itemOld.classList.remove('entrar');

    // calcula o anterior
    active = active - 1 < 0 ? lastPosition : active - 1;
    setSlider()
    // adiciona no novo item
    items[active].classList.add('entrar');
};
