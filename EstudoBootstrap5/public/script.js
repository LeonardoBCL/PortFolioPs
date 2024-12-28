/* Abre e fecha menu lateral em modo mobile*/


const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    :  menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active")
});

/*Fecha o menu quando clicar em algum item e muda o ícone para list*/
const navItem = document.querySelectorAll('.nav-item')
navItem.forEach(item => {
    item.addEventListener('click', () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})


const items = document.querySelectorAll("[data-anime]"); // Seleciona todos os elementos com o atributo data-anime

const animeScroll = () => {
  const windowTop = window.scrollY + window.innerHeight * 0.85; // Posição da rolagem + 80% da altura da janela

  items.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top + window.scrollY; // Descobre a posição do elemento na página

    if (windowTop > elementTop) {
      element.classList.add("animate"); // Adiciona a classe "animate" se o elemento estiver visível
    } else {
      element.classList.remove("animate"); // Remove a classe "animate" se o elemento não estiver mais visível
    }
  });
};

// Executa ao carregar a página
animeScroll();

// Adiciona o evento para monitorar o scroll
window.addEventListener("scroll", animeScroll);

/* Ativar o carregamento no botão de envio formulário*/
const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')
btnEnviar.addEventListener('click', () => {
  btnEnviarLoader.style.display = "block";
  btnEnviar.style.display = "none";
})

//Tirar a mensagem do sucesso dps de 5 segundos

setTimeout(() => {
  const sucesso = document.querySelector('#alert').style.display = 'none';
}, 5000)
  