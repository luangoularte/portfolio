

/* DESCRICAO HABILIDADES */

const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>Vue JS</p> <br> <p>Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.</p> <br>',
                    '<p>Laravel</p> <br> <p>Laravel é um framework PHP livre e open-source criado por Taylor B. Otwell para o desenvolvimento de sistemas web que utilizam o padrão MVC.</p> <br>',
                    '<p>Docker</p> <br> <p>Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres.</p> <br>',
                    '<p>Banco de Dados SQL</p> <br> <p>É uma linguagem de domínio específico desenvolvida para gerenciar dados relacionais em um sistema de gerenciamento de banco de dados.</p> <br>',
                    '<p>Git</p> <br> <p>Git é um sistema de controle de versão distribuído, usado para gerenciar o histórico de mudanças em arquivos de um projeto.</p> <br>',
                    '<p>Linux</p> <br> <p>Linux é um sistema operacional gratuito e de código aberto, usado em computadores, servidores e celulares, conhecido por sua segurança, estabilidade e flexibilidade.</p> <br>'
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
        elementimgproj.classList.add('animate__animated', 'animate__bounceInLeft');
        elementimgproj.style.animationDuration = '1.5s';

        const elementimgproj1 = document.querySelector('.img-proj1');
        elementimgproj1.classList.add('animate__animated', 'animate__bounceInRight');
        elementimgproj1.style.animationDuration = '1.5s';
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
        elementtext.style.animationDuration = '2.0s';

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

window.addEventListener('load', () => {
  const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");
  let width, height;

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  const numStars = 150;
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2,
      d: Math.random() * 0.5 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#ffffff";
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fill();

      star.y += star.d;
      if (star.y > height) {
        star.y = 0;
        star.x = Math.random() * width;
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
});



