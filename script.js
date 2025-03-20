// Defina a data de início do relacionamento (Ano, Mês (0-11), Dia)
const dataInicio = new Date(2020, 7, 21); // Agosto é mês 7 (pois começa em 0)

function atualizarContador() {
    const agora = new Date();
    let diferenca = agora - dataInicio; // Diferença em milissegundos

    let segundos = Math.floor(diferenca / 1000) % 60;
    let minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    let horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    let diasTotal = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    
    let anos = Math.floor(diferenca / (365.25 * 24 * 60 * 60 * 1000));
    let meses = Math.floor((diferenca % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    let dias = Math.floor((diferenca % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    // Atualiza o contador na tela
    document.getElementById("contador").innerHTML = 
        `${anos} Anos, ${meses} Meses, ${dias} Dias, ${horas} Horas ${minutos} Minutos ${segundos} Segundos`;
}

setInterval(atualizarContador, 1000);

document.addEventListener("DOMContentLoaded", () => {
    const listaMensagens = document.getElementById("listaMensagens");
    const mensagens = listaMensagens.querySelectorAll("li"); // Seleciona todos os <li> dentro de #listaMensagens
    
    // Exibe a primeira mensagem
    let indiceAtual = 0;
    mensagens[indiceAtual].style.display = "block"; // Exibe a primeira mensagem

    // Função para trocar a mensagem
    function trocarMensagem() {
        // Esconde a mensagem atual
        mensagens[indiceAtual].style.display = "none";
        
        // Atualiza o índice da mensagem para a próxima
        indiceAtual = (indiceAtual + 1) % mensagens.length;

        // Exibe a nova mensagem
        mensagens[indiceAtual].style.display = "block";
    }

    // Chama a função trocarMensagem a cada 5 segundos (5000ms)
    setInterval(trocarMensagem, 5000);
});

// Slider de imagens
const slider = document.querySelector('.slider');
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

// Função para mudar o slide
function changeSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

// Troca de slide a cada 3 segundos
setInterval(changeSlide, 3000);

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // Posição aleatória na tela
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duração entre 2 e 5s
    
    document.body.appendChild(heart);
    
    // Remover coração depois que a animação terminar
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Criar corações a cada 500ms
setInterval(createHeart, 500);