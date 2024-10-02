let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list')

let activeIndex = 0; // Usar um índice para o item ativo
let totalItems = items.length;

nextButton.onclick = () => {
    list.style.setProperty('--LR', -1)
   
    items[activeIndex].classList.remove('active'); // Remove a classe active do item atual
    // Atualiza o índice do item ativo
    activeIndex = (activeIndex + 1) % totalItems; // Volta ao primeiro item se chegar ao final
    items[activeIndex].classList.add('active'); // Adiciona a classe active ao próximo item

    updateIndicators(); // Atualiza os indicadores

    indicator.querySelector('.number').innerHTML = '0' + (activeIndex + 1);
};

prevButton.onclick = () => {
    list.style.setProperty('--LR', 1)

    items[activeIndex].classList.remove('active'); // Remove a classe active do item atual

    // Atualiza o índice do item ativo
    activeIndex = (activeIndex - 1 + totalItems) % totalItems; // Volta ao último item se chegar ao início
    items[activeIndex].classList.add('active'); // Adiciona a classe active ao item anterior


    updateIndicators(); // Atualiza os indicadores
    indicator.querySelector('.number').innerHTML = '0' + (activeIndex + 1);
};

// Função para atualizar os indicadores
function updateIndicators() {



    dots.forEach((dot, index) => {
        dot.classList.remove('active'); // Remove a classe active de todos os dots
        if (index === activeIndex) {
            dot.classList.add('active'); // Adiciona a classe active apenas ao dot correspondente ao item ativo
        }
    });
}
