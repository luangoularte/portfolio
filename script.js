

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
            entry.target.classList.add('init-hidden-off');
        }
    })
    
}, {
    threshold: [0, .5, 1]
})
Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
})


/* ANIMAÇÕES SEÇÃO SOBRE */

window.addEventListener('scroll', function() {
    const sobreSection = document.getElementById('sobre');
    const scrollTop = window.scrollY;
    const offsetTop = sobreSection.offsetTop;
    const triggerPoint = offsetTop - 400; 

    if (scrollTop >= triggerPoint && scrollTop < triggerPoint + sobreSection.offsetHeight) {
        const elementimgsobre = document.querySelector('.img-sobre');
        elementimgsobre.classList.add('animate__animated', 'animate__slideInLeft');
        elementimgsobre.style.animationDuration = '2.5s';

        const elementtxt = document.querySelector('.txt-sobre');
        elementtxt.classList.add('animate__animated', 'animate__slideInRight');
        elementtxt.style.animationDuration = '2.5s';
    }
});


/* ANIMAÇÕES SEÇÃO PROJETOS */

window.addEventListener('scroll', function() {
    const projetosSection = document.getElementById('projetos');
    const scrollTop = window.scrollY;
    const offsetTop = projetosSection.offsetTop;
    const triggerPoint = offsetTop - 400; // 

    if (scrollTop >= triggerPoint && scrollTop < triggerPoint + projetosSection.offsetHeight) {
        const elementimgproj = document.querySelector('.img-proj');
        elementimgproj.classList.add('animate__animated', 'animate__slideInUp');
        elementimgproj.style.animationDuration = '2.5s';

        const elementimgproj1 = document.querySelector('.img-proj1');
        elementimgproj1.classList.add('animate__animated', 'animate__slideInUp');
        elementimgproj1.style.animationDuration = '2.5s';
    }
});


/* ANIMAÇÕES SEÇÃO HABILIDADES */


window.addEventListener('scroll', function() {
    const habilidadesSection = document.getElementById('habilidades');
    const scrollTop = window.scrollY;
    const offsetTop = habilidadesSection.offsetTop;
    const triggerPoint = offsetTop - 400; 

    if (scrollTop >= triggerPoint && scrollTop < triggerPoint + habilidadesSection.offsetHeight) {
        const elementtext = document.querySelector('.texto-descricao');
        elementtext.classList.add('animate__animated', 'animate__slideInRight');
        elementtext.style.animationDuration = '2.5s';

        const elementhtml = document.querySelector('.skill1');
        elementhtml.classList.add('animate__animated', 'animate__zoomInUp');
        elementhtml.style.animationDuration = '1.25s';

        const elementcss = document.querySelector('.skill2');
        elementcss.classList.add('animate__animated', 'animate__zoomInUp');
        elementcss.style.animationDuration = '1.5s';

        const elementjs = document.querySelector('.skill3');
        elementjs.classList.add('animate__animated', 'animate__zoomInUp');
        elementjs.style.animationDuration = '1.75s';

        const elementbd = document.querySelector('.skill4');
        elementbd.classList.add('animate__animated', 'animate__zoomInUp');
        elementbd.style.animationDuration = '2.0s';

        const elementpython = document.querySelector('.skill5');
        elementpython.classList.add('animate__animated', 'animate__zoomInUp');
        elementpython.style.animationDuration = '2.25s';

        const elementcsharp = document.querySelector('.skill6');
        elementcsharp.classList.add('animate__animated', 'animate__zoomInUp');
        elementcsharp.style.animationDuration = '2.5s';

    }
});



