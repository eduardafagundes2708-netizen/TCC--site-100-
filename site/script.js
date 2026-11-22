// Botão de acessibilidade
const btn = document.getElementById('btnAcessibilidade');
const menu = document.getElementById('menuAcessibilidade');

btn.addEventListener('click', () => {
  menu.classList.toggle('escondido');
});

let tamanhoFonte = 100;
function aumentarFonte() {
  tamanhoFonte += 10;
  document.body.style.fontSize = tamanhoFonte + '%';
}
function diminuirFonte() {
  tamanhoFonte -= 10;
  document.body.style.fontSize = tamanhoFonte + '%';
}
function toggleContraste() {
  document.body.classList.toggle('alto-contraste');
}
function resetarAcessibilidade() {
  tamanhoFonte = 100;
  document.body.style.fontSize = '100%';
  document.body.classList.remove('alto-contraste');
}
// Faz a foto ocupar toda a tela mesmo se mudar o tamanho da janela
function ajustarFotoTela() {
  const hero = document.querySelector('.hero-full');
  const foto = document.getElementById('fotoFundo');
  if (hero && foto) {
    hero.style.height = window.innerHeight + 'px';
    foto.style.width = '100%';
    foto.style.height = '100%';
    foto.style.objectFit = 'cover';
  }
}

// Ajusta quando abre o site e quando gira / muda o tamanho
window.addEventListener('load', ajustarFotoTela);
window.addEventListener('resize', ajustarFotoTela);
// Botão Saiba Mais abre as informações ali mesmo
const btnSaiba = document.getElementById('btnSaibaMais');
const conteudoSaiba = document.getElementById('conteudoSaibaMais');
const btnFechar = document.getElementById('btnFecharSaiba');

if (btnSaiba) {
  btnSaiba.addEventListener('click', () => {
    conteudoSaiba.classList.toggle('mostrar');
    // Muda o texto do botão
    if (conteudoSaiba.classList.contains('mostrar')) {
      btnSaiba.textContent = 'Saiba menos ↑';
      conteudoSaiba.scrollIntoView({ behavior: 'smooth' });
    } else {
      btnSaiba.textContent = 'Saiba mais ↓';
    }
  });
}

if (btnFechar) {
  btnFechar.addEventListener('click', () => {
    conteudoSaiba.classList.remove('mostrar');
    btnSaiba.textContent = 'Saiba mais ↓';
  });
}
// Clicar no Saiba Mais abre a outra página
const botaoSaiba = document.querySelector('.botao-saiba');
if (botaoSaiba) 
  botaoSaiba.addEventListener('click', function(e) {
    e.preventDefault();

    // Abre a página saiba-mais.html
    window.location.href = 'saiba-mais.html';
    // Se quiser abrir em NOVA ABA, usa essa linha em vez da de cima:

  });
  // BOTÃO VOLTAR VAI PRA PARTE INICIAL
document.addEventListener('DOMContentLoaded', () => {

  // Pega os 2 botões de voltar
  const botoesVoltar = document.querySelectorAll('#btnVoltar, #btnVoltarTopo, .botao-escuro');

  botoesVoltar.forEach(botao => {
    // Só aplica se o botão for o Voltar
    if (botao.textContent.includes('Voltar')) {
      botao.addEventListener('click', (e) => {
        e.preventDefault();

        // Volta pra página inicial, bem no topo / no começo
        window.location.href = 'index.html#inicio';
      });
    }
  });

})
// LOGO NA MESMA RETA DO MENU
document.addEventListener('DOMContentLoaded', () => {
  const topo = document.querySelector('.topo');
  const menu = document.querySelector('.menu');
  const logo = document.querySelector('.logo-grupo');

  if (topo) {
    topo.style.setProperty('display', 'flex', 'important');
    topo.style.setProperty('flex-direction', 'row', 'important');
    topo.style.setProperty('align-items', 'center', 'important');
    topo.style.setProperty('justify-content', 'space-between', 'important');
    topo.style.setProperty('flex-wrap', 'nowrap', 'important');
  }
  if (menu) {
    menu.style.setProperty('display', 'flex', 'important');
    menu.style.setProperty('flex-direction', 'row', 'important');
    menu.style.setProperty('align-items', 'center', 'important');
  }
  if (logo) {
    logo.style.height = '52px';
    logo.style.width = 'auto';
  }
});
// FOTO DENTRO DA IMAGEM GRANDE
document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('.fundo-saiba, .hero, .imagem-grande');
  const foto = document.querySelector('.foto-fundo, .hero img, .imagem-grande img');
  const topo = document.querySelector('.topo');

  if (!container || !foto) return;

  // 1. CONTAINER GRANDE
  container.style.setProperty('position', 'relative', 'important');
  container.style.setProperty('width', '100%', 'important');
  container.style.setProperty('height', '100vh', 'important');
  container.style.setProperty('overflow', 'hidden', 'important');
  container.style.setProperty('display', 'flex', 'important');
  container.style.setProperty('justify-content', 'center', 'important');
  container.style.setProperty('align-items', 'center', 'important');
  container.style.setProperty('background', '#000', 'important');
  container.style.setProperty('padding', '0', 'important');

  // 2. FOTO DENTRO DA IMAGEM GRANDE
  foto.style.setProperty('position', 'absolute', 'important');
  foto.style.setProperty('top', '50%', 'important');
  foto.style.setProperty('left', '50%', 'important');
  foto.style.setProperty('transform', 'translate(-50%, -50%)', 'important');
  foto.style.setProperty('width', '100%', 'important');
  foto.style.setProperty('height', '100%', 'important');
  foto.style.setProperty('max-width', '100%', 'important');
  foto.style.setProperty('max-height', '100%', 'important');
  foto.style.setProperty('object-fit', 'contain', 'important'); // dentro, sem cortar
  foto.style.setProperty('object-position', 'center', 'important');
  foto.style.setProperty('z-index', '1', 'important');

  // 3. AJUSTA SOZINHO QUANDO GIRAR O CELULAR / MUDAR A TELA
  function ajustarFoto() {
    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;
    const proporcaoTela = larguraTela / alturaTela;
    const proporcaoFoto = foto.naturalWidth / foto.naturalHeight;

    // Se a foto for mais larga que a tela, encaixa pela largura
    // Se for mais alta, encaixa pela altura - sempre dentro
    if (proporcaoFoto > proporcaoTela) {
      foto.style.setProperty('width', '100%', 'important');
      foto.style.setProperty('height', 'auto', 'important');
    } else {
      foto.style.setProperty('width', 'auto', 'important');
      foto.style.setProperty('height', '100%', 'important');
    }
  }

  // Espera a foto carregar pra medir certo
  if (foto.complete) {
    ajustarFoto();
  } else {
    foto.addEventListener('load', ajustarFoto);
  }
  window.addEventListener('resize', ajustarFoto);

  // 4. CABEÇALHO POR CIMA, MESMA LINHA
  if (topo) {
    topo.style.setProperty('position', 'fixed', 'important');
    topo.style.setProperty('top', '0', 'important');
    topo.style.setProperty('left', '0', 'important');
    topo.style.setProperty('width', '100%', 'important');
    topo.style.setProperty('display', 'flex', 'important');
    topo.style.setProperty('flex-direction', 'row', 'important');
    topo.style.setProperty('align-items', 'center', 'important');
    topo.style.setProperty('justify-content', 'space-between', 'important');
    topo.style.setProperty('z-index', '100', 'important');
  }

  // 5. LOGO CLIQUE: INICIAL -> SAIBA MAIS / SAIBA MAIS -> INÍCIO
  const logoSaiba = document.getElementById('logoSaibaMais');
  const logoVoltar = document.getElementById('logoVoltarInicio');

  if (logoSaiba) {
    logoSaiba.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'saiba-mais.html';
    });
  }
  if (logoVoltar) {
    logoVoltar.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'index.html#inicio';
    });
  }
});
// BOLINHA QUE ANDA NO MENU - ATIVIDADES <-> GALERIA <-> CONTATO
document.addEventListener('DOMContentLoaded', () => {

  const linksMenu = document.querySelectorAll('.topo .menu a');

  // Se não tiver menu, não faz nada
  if (!linksMenu.length) return;

  // 1. QUANDO CLICA, TIRA A BOLINHA DO ANTERIOR E COLOCA NO NOVO
  linksMenu.forEach(link => {
    link.addEventListener('click', (e) => {

      // Tira a bolinha de todos
      linksMenu.forEach(l => l.classList.remove('ativo'));

      // Coloca a bolinha só no que clicou
      link.classList.add('ativo');

      // Se for link de seção (#atividades, #galeria), rola suave até ela
      const destino = link.getAttribute('href');
      if (destino && destino.startsWith('#')) {
        e.preventDefault();
        const secao = document.querySelector(destino);
        if (secao) {
          secao.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // 2. QUANDO ROLA A PÁGINA, A BOLINHA ANDA SOZINHA
  const secoes = document.querySelectorAll('#atividades, #galeria, #contato');

  if (secoes.length) {
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          // Tira de todos
          linksMenu.forEach(l => l.classList.remove('ativo'));
          // Coloca no que está na tela
          const linkAtivo = document.querySelector(`.topo .menu a[href="#${entrada.target.id}"]`);
          if (linkAtivo) {
            linkAtivo.classList.add('ativo');
          }
        }
      });
    }, {
      threshold: 0.4 // quando 40% da seção aparecer, troca a bolinha
    });

    secoes.forEach(secao => observador.observe(secao));
  }
});
// GALERIA - COLOCA TODAS AS FOTOS DO EXPLORADOR
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('galeria-grid');
  if (!grid) return;

  const fotos = [
    { arquivo: './bacia.jpeg', titulo: 'Espetaculo dos Lanceiro 2023' },
    { arquivo: './carla-maquiné.jpeg', titulo: 'apresentação Maquiné 2025' },
    { arquivo: './cidade.jpeg', titulo: 'arraial Cidade Dormitorio' },
    { arquivo: './cozinha-comida.jpeg', titulo: 'Cozinha Solidária' },
    { arquivo: './curso.jpeg', titulo: 'Curso design audio visual' },
    { arquivo: './espetaculo2026.jpeg', titulo: 'Espetáculo dos Lanceiro 2026' },
    { arquivo: './festival-parte2.jpeg', titulo: 'Festival da oxum' },
    { arquivo: './fora-de-ordem.jpeg', titulo: 'cidade dormitorio 2025' },
    { arquivo: './maria.jpeg', titulo: 'Aniversario do coletivo fora de ordem' },
    { arquivo: './nick-zé.jpeg', titulo: 'Quintal do cooler 2025' },
  ];


  grid.innerHTML = ''; // limpa o que tinha
  fotos.forEach(foto => {
    const fig = document.createElement('figure');
    fig.innerHTML = `
      <img src="${foto.arquivo}" alt="${foto.titulo}" loading="lazy">
      <figcaption>${foto.titulo}</figcaption>
    `;
    // Clica e abre a foto grande
    fig.addEventListener('click', () => {
      window.open(foto.arquivo, '_blank');
    });
    grid.appendChild(fig);
  });
});
// SOBE A GALERIA DE BAIXO PRO LUGAR DOS 3 QUADROS DE CIMA
document.addEventListener('DOMContentLoaded', () => {

  // 1. Acha a galeria de baixo - a que já tem as fotos
  const galeriaBaixo = document.getElementById('galeria-grid');
  if (!galeriaBaixo) return;

  // 2. Acha a seção de cima - a do "Um pouco do nosso trabalho"
  let secaoCima = null;
  document.querySelectorAll('section, div').forEach(el => {
    if (el.textContent.includes('Um pouco do nosso trabalho')) {
      // Pega a menor seção que tem esse texto, não o site inteiro
      if (!secaoCima || el.textContent.length < secaoCima.textContent.length) {
        secaoCima = el;
      }
    }
  });
  if (!secaoCima) return;

  // 3. Acha os 3 quadros cinzas de cima
  const quadrosCima = secaoCima.querySelectorAll(':scope > div, :scope > article');
  // Se não achou direto, pega qualquer div com Apresentações / Oficinas / Cozinha
  let containerQuadros = null;
  secaoCima.querySelectorAll('div').forEach(div => {
    if (div.textContent.includes('Apresentações') && div.textContent.includes('Oficinas')) {
      containerQuadros = div;
    }
  });

  // 4. Move a galeria de baixo pra dentro da seção de cima
  // Cria uma cópia pra não sumir de baixo antes de mover
  const galeriaCopia = galeriaBaixo.cloneNode(true);
  galeriaCopia.id = 'galeria-cima';
  galeriaCopia.style.display = 'grid';

  // Troca os 3 quadros pela galeria
  if (containerQuadros) {
    containerQuadros.replaceWith(galeriaCopia);
  } else {
    // Se não achou o container, só joga no final da seção de cima
    secaoCima.appendChild(galeriaCopia);
  }

  // 5. Esconde a galeria de baixo - porque agora ela já está em cima
  const secaoBaixo = galeriaBaixo.closest('section');
  if (secaoBaixo) {
    secaoBaixo.style.display = 'none';
  } else {
    galeriaBaixo.style.display = 'none';
  }

  // 6. Ajusta o título de cima pra ficar igual ao de baixo
  secaoCima.querySelectorAll('h2, h3, p').forEach(el => {
    if (el.textContent.includes('Um pouco do nosso trabalho')) {
      el.textContent = 'Registros e memórias';
    }
  });

});
// COLOCA O MENU ATIVIDADES / GALERIA / CONTATO DE VOLTA
document.addEventListener('DOMContentLoaded', () => {
  // Se já tem menu, não cria de novo
  if (document.querySelector('.menu-topo')) return;

  const header = document.querySelector('header') || document.body;

  const nav = document.createElement('nav');
  nav.className = 'menu-topo';
  nav.innerHTML = `
    <a href="#atividades" class="menu-btn ativo">Atividades</a>
    <a href="#galeria" class="menu-btn">Galeria</a>
    <a href="#contato" class="menu-btn">Contato</a>
  `;

  // Coloca no começo do header
  header.prepend(nav);

  // Clica e muda o botão preto
  nav.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      nav.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');
    });
  });
});

// MENU DO LADO DA LOGO, NA MESMA ALTURA
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header, .topo-menu');
  const menu = document.querySelector('.menu-topo');
  if (!header || !menu) return;

  // Garante que o header é flex linha
  header.style.display = 'flex';
  header.style.flexDirection = 'row';
  header.style.alignItems = 'center';
  header.style.justifyContent = 'space-between';

  // Garante que o menu fica do lado, não embaixo
  menu.style.display = 'flex';
  menu.style.marginLeft = 'auto';

  // Se a logo estiver fora do header, joga pra dentro, antes do menu
  let logo = document.querySelector('header img, .logo');
  if (!logo) {
    logo = document.createElement('img');
    logo.src = './logo.png';
    logo.alt = 'Brazil Estrangeiro';
    header.prepend(logo);
  }
});

// TIRA A PARTE DE CIMA VERMELHA
document.addEventListener('DOMContentLoaded', () => {
  const topo = document.querySelector('header, .topo-menu, .topo');
  if (topo) {
    topo.style.display = 'none';
    topo.remove(); // tira de verdade, não só esconde
  }
  document.body.style.paddingTop = '0';
  document.body.style.marginTop = '0';
});// TIRA A FAIXA DO RODAPÉ E JOGA PRO TOPO - FORÇADO
document.addEventListener('DOMContentLoaded', () => {
  // Acha a faixa procurando pelo botão Atividades - não importa onde ela esteja
  let faixa = null;
  document.querySelectorAll('header, div, nav, footer').forEach(el => {
    if (el.textContent.includes('Atividades') && el.textContent.includes('Galeria')) {
      // Pega o menor elemento que tem os 3 botões
      if (!faixa || el.textContent.length < faixa.textContent.length) {
        faixa = el;
      }
    }
  });

  if (!faixa) return;

  // 1. Tira ela de onde está - rodapé
  // 2. Joga pra ser a primeira coisa do body
  document.body.prepend(faixa);

  // 3. Força o estilo de topo
  faixa.style.position = 'fixed';
  faixa.style.top = '0';
  faixa.style.left = '0';
  faixa.style.right = '0';
  faixa.style.zIndex = '9999';
  faixa.style.display = 'flex';

  // 4. Empurra o site pra baixo
  document.body.style.paddingTop = '56px';

  console.log('Faixa movida pro topo!', faixa);
});
// LOGO + BOTÕES EM CIMA DA FOTO, SEM FAIXA VERMELHA
document.addEventListener('DOMContentLoaded', () => {
  let faixa = document.querySelector('.faixa-vermelha, header, .topo-menu');
  // Acha a foto grande - o hero
  let hero = document.querySelector('.hero, .banner, .capa, #inicio, section');

  //faixa,
  if (!faixa) {
    faixa = document.createElement('div');
    faixa.className = 'faixa-vermelha';
    faixa.innerHTML = `
      <img src="./logo.jpeg" alt="Brazil Estrangeiro" class="logo-topo">
      <nav class="menu-topo">
        <a href="#atividades" class="menu-btn ativo">Atividades</a>
        <a href="#galeria" class="menu-btn">Galeria</a>
        <a href="#contato" class="menu-btn">Contato</a>
      </nav>
    `;
  }
  // Coloca a faixa DENTRO da foto, se a foto existir
  if (hero && hero !== faixa) {
    hero.style.position = 'relative';
    hero.prepend(faixa);
  } else {
    document.body.prepend(faixa);
  }

  // Tira o espaço de cima
  document.body.style.paddingTop = '0';

  // Troca o botão preto quando clicar
  faixa.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      faixa.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');
    });
  });
});// RECRIA LOGO + BOTÕES JUNTOS NA MESMA RETA, SEM VERMELHO
document.addEventListener('DOMContentLoaded', () => {
  // 1. Apaga todas as faixas / menus antigos espalhados
  document.querySelectorAll('.faixa-vermelha, header, .topo-menu, nav.menu-topo').forEach(el => {
    // Só apaga se for do topo, não o menu que vamos criar
    if (!el.classList.contains('menu-novo')) el.remove();
  });

  // 2. Acha a foto
  const hero = document.querySelector('.hero, .banner, .capa, #inicio, section');
  
  // 3. Cria UMA ÚNICA faixa com logo + 3 botões juntos
  const faixa = document.createElement('div');
  faixa.className = 'faixa-vermelha menu-novo';
  faixa.innerHTML = `
    <img src="./logo.jpeg" alt="Brazil Estrangeiro" class="logo-topo">
    <nav class="menu-topo menu-novo">
      <a href="#atividades" class="menu-btn ativo">Atividades</a>
      <a href="#galeria" class="menu-btn">Galeria</a>
      <a href="#contato" class="menu-btn">Contato</a>
    </nav>
  `;

  // 4. Força transparente e em cima da foto
  faixa.style.cssText = 'position:absolute;top:0;left:0;right:0;z-index:9999;display:flex;align-items:center;justify-content:space-between;background:transparent !important;padding:16px 20px 0 20px;width:100%;box-sizing:border-box;';

  if (hero) {
    hero.style.position = 'relative';
    hero.prepend(faixa);
  } else {
    document.body.prepend(faixa);
  }

  document.body.style.paddingTop = '0';

  // 5. Troca o botão preto
  faixa.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      faixa.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');
    });
  });
});
// BOTÃO SUPORTE IGUAL AO DA ACESSIBILIDADE, EMBAIXO DELE
document.addEventListener('DOMContentLoaded', () => {
  const SEU_WHATSAPP = '5551994949041'; 

  // Se já existe, não duplica
  if (document.querySelector('.btn-suporte-lateral')) return;

  // Acha o botão de acessibilidade pra copiar o lugar
  const btnAcess = document.querySelector('[class*="acessibilidade"], #acessibilidade, [aria-label*="Acessibilidade"]');

  // Cria o botão de suporte igualzinho
  const btnSuporte = document.createElement('a');
  btnSuporte.href = `https://wa.me/${SEU_WHATSAPP}?text=Olá! Preciso de suporte`;
  btnSuporte.target = '_blank';
  btnSuporte.className = 'btn-suporte-lateral';
  btnSuporte.title = 'Suporte';
  btnSuporte.innerHTML = '🛠️'; 

  // Se achou a acessibilidade, cola embaixo dela. Se não, cola no body
  if (btnAcess && btnAcess.parentNode) {
    btnAcess.parentNode.insertBefore(btnSuporte, btnAcess.nextSibling);
  } else {
    document.body.appendChild(btnSuporte);
  }

  // Se o botão de acessibilidade já tem um estilo, copia o tamanho dele
  if (btnAcess) {
    const estilo = window.getComputedStyle(btnAcess);
    btnSuporte.style.width = estilo.width;
    btnSuporte.style.height = estilo.height;
    btnSuporte.style.background = estilo.backgroundColor;
    btnSuporte.style.borderRadius = estilo.borderRadius;
    btnSuporte.style.right = estilo.right;
  }
});