document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    
    for (let i =0; i<buttons.length; i++){
        buttons[i].addEventListener('click', function(botao) {
            const aba_alvo =botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${aba_alvo}]`)
            esconde_abas();
            aba.classList.add('shows__list--is-active');
            remove_botao();
            botao.target.classList.add("shows__tabs__button--is-active");
            
        })
    }
})

function remove_botao() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i =0; i<buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function esconde_abas(){
    const tabs_container = document.querySelectorAll('[data-tab-id]');

    for( let i=0; i<tabs_container.length; i++) {
        tabs_container[i].classList.remove('shows__list--is-active');
    }
}