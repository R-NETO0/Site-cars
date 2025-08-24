

let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list');

let active = 0;
let lastPosition = items.length - 1;

function setSlider() {
    // Remove a classe 'entrar' do item atual
    let itemOld = container.querySelector('.list .item.entrar');
    if (itemOld) itemOld.classList.remove('entrar');
    
    // Remove a classe 'active' de TODOS os dots primeiro
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Adiciona a classe 'active' apenas ao dot correspondente
    dots[active].classList.add('active');
    
    // Atualiza o número do indicador
    indicator.querySelector('.numeros').innerHTML = '0' + (active + 1);
    
    // Adiciona a classe 'entrar' ao novo item ativo
    items[active].classList.add('entrar');
}

// Inicializa o slider
setSlider();

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1);
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider();
};

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1);
    active = active - 1 < 0 ? lastPosition : active - 1;
    setSlider();
};

// Opcional: Adicionar clique nos dots para navegação
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        active = index;
        setSlider();
    });
});
