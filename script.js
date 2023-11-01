
/* ANIMACAO PAGE */
/*
window.sr = ScrollReveal({ reset: true });

sr.reveal(".sobre", {duration: 3000});

sr.reveal(".projetos", {duration: 3000});

sr.reveal(".habilidades", {duration: 3000});

sr.reveal(".contato", {duration: 3000});

*/

function checkAboutSection() {
    var aboutSection = document.querySelector('.sobre');

    if (isElementInViewport(aboutSection)) {
        aboutSection.classList.add('animated');
    }
}

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

window.addEventListener('scroll', checkAboutSection);

checkAboutSection();

/* DESCRICAO HABILIDADES */

const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
                    '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML.</p> <br>',
                    '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
                    '<p>Banco de Dados SQL</p> <br> <p>É uma linguagem de domínio específico desenvolvida para gerenciar dados relacionais em um sistema de gerenciamento de banco de dados.</p> <br>',
                    '<p>Python</p> <br> <p>É uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.</p> <br>',
                    '<p>C#</p> <br> <p>Desenvolvido pela Microsoft, C# é uma linguagem de programação orientada a objetos e orientada a componentes.</p> <br>'
]

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = 'Passe o mouse pela habilidade desejada para ler a descrição.';
    } )
} );

/* MENU MOBILE */

const menuDiv = document.getElementById('menu-mobile')
const btnMenu = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animar)

function animar(){
    menuDiv.classList.toggle('abrir')
    btnMenu.classList.toggle('ativar')
}

/* NOVA ANIMAÇÃO DAS SEÇÕES */

const observer = new IntersectionObserver(entries => {
    console.log(entries)

    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 0.3) {
            entry.target.classList.add('init-hidden-off')
        }
    })
    
}, {
    threshold: [0, .5, 1]
})
Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
})



    



