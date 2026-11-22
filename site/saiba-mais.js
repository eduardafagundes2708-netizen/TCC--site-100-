// Rolar suave até a história
const btnHistoria = document.getElementById('btnVerHistoria');
if (btnHistoria) {
  btnHistoria.addEventListener('click', () => {
    document.getElementById('historia').scrollIntoView({ behavior: 'smooth' });
  });
}

// Acordeão - abre e fecha os textos
const titulos = document.querySelectorAll('.titulo-acordeao');
titulos.forEach((titulo) => {
  titulo.addEventListener('click', () => {
    const conteudo = titulo.nextElementSibling;
    conteudo.classList.toggle('aberto');
  });
});

// Garante que a foto fique atrás do texto
window.addEventListener('load', () => {
  const foto = document.querySelector('.fundo-saiba .foto-fundo');
  if (foto) {
    foto.style.position = 'fixed';
    foto.style.top = '0';
    foto.style.left = '0';
    foto.style.width = '100vw';
    foto.style.height = '100vh';
    foto.style.objectFit = 'cover';
    foto.style.zIndex = '-2';
  }
});
// COLOCA LOGO + BOTÕES NA FAIXA VERMELHA
document.addEventListener('DOMContentLoaded', () => {
  let faixa = document.querySelector('.faixa-vermelha, header, .topo-menu');
  
  // Se não tem faixa, cria uma
  if (!faixa) {
    faixa = document.createElement('div');
    faixa.className = 'faixa-vermelha';
    document.body.prepend(faixa);
  }

  // Mostra a faixa de novo - caso estivesse escondida
  faixa.style.display = 'flex';

  // Se já tem logo e menu, não duplica
  if (faixa.querySelector('.logo-topo') && faixa.querySelector('.menu-topo')) return;

  faixa.innerHTML = `
    <img src="./logo.png" alt="Brazil Estrangeiro" class="logo-topo">
    <nav class="menu-topo">
      <a href="#atividades" class="menu-btn ativo">Atividades</a>
      <a href="#galeria" class="menu-btn">Galeria</a>
      <a href="#contato" class="menu-btn">Contato</a>
    </nav>
  `;

  // Troca o botão preto quando clicar
  faixa.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      faixa.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');
    });
  });
});
// PASSA A FAIXA COM LOGO + BOTÕES PRA CIMA DE TUDO
document.addEventListener('DOMContentLoaded', () => {
  const faixa = document.querySelector('.faixa-vermelha, header, .topo-menu');
  const copyright = document.querySelector('footer, .rodape, .copyright');

  if (!faixa) return;

  // 1. Joga a faixa com logo + botões pra ser a PRIMEIRA coisa da página
  document.body.prepend(faixa);
  faixa.style.display = 'flex';
  faixa.style.order = '-1';

  // 2. Joga o copyright pra ser a ÚLTIMA coisa da página - lá embaixo
  if (copyright) {
    document.body.appendChild(copyright);
  }
});