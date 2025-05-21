const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
                    '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
                    '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>','<p>Python</p> <br> <p>É uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.</p> <br>',
                    '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
                    '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>','<p>Bootstrap</p> <br> <p>É um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples</p> <br>', '<p>TypeScript</p> <br> <p>Uma linguagem de programação, superset do JavaScript, que adiciona tipagem estática opcional à linguagem, permitindo um desenvolvimento mais seguro, compreensível e com melhores ferramentas de auxílio em projetos web e Node.js.</p> <br></br>', '<p>React</p> <br> <p>Uma biblioteca JavaScript para a construção de interfaces de usuário (UIs) interativas e dinâmicas, focada em componentes reutilizáveis para simplificar o desenvolvimento de aplicações web e interfaces complexas.</p>', '<p>Tailwind</p> <br> <p>Um framework CSS utilitário de baixo nível que permite estilizar elementos HTML diretamente no seu markup através de classes predefinidas, oferecendo flexibilidade e rapidez no desenvolvimento de interfaces personalizadas</p>', '<p>Nodejs</p> <br> <p>Um ambiente de tempo de execução JavaScript construído sobre o motor V8 do Chrome, que permite executar código JavaScript fora do navegador, sendo amplamente utilizado para construir aplicações de servidor escaláveis, APIs e ferramentas de linha de comando, aproveitando a familiaridade e o ecossistema vasto do JavaScript.</p>'
]

skills.forEach(  (elemento, index) => {
    let index1 = index;
    elemento.addEventListener('mouseover', (evento) => {
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = ' < Passe o mouse por cima de alguma habilidade para ler a descrição />';
    } )
} );



