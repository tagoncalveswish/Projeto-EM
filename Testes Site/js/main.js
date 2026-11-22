/* =========================================================================
   easy mat — interações do site
   - menu "hambúrguer" no telemóvel
   - sombra do cabeçalho e realce da secção atual no menu
   - botões "Marcar aula" escolhem o assunto certo no formulário
   - envio do formulário (Formspree) sem sair da página
   - ano atual no rodapé
   Não é preciso editar este ficheiro para mudar textos ou imagens.
   ========================================================================= */
(function () {
  'use strict';

  var cabecalho = document.querySelector('.cabecalho');
  var botaoMenu = document.querySelector('.menu-botao');
  var menu = document.getElementById('menu');

  /* ---------- Menu "hambúrguer" ---------- */
  function definirMenu(aberto) {
    cabecalho.classList.toggle('menu-aberto', aberto);
    botaoMenu.setAttribute('aria-expanded', String(aberto));
    botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  }

  if (cabecalho && botaoMenu && menu) {
    botaoMenu.addEventListener('click', function () {
      definirMenu(botaoMenu.getAttribute('aria-expanded') !== 'true');
    });

    // Fecha o menu ao escolher uma secção
    menu.addEventListener('click', function (evento) {
      if (evento.target.closest('a')) {
        definirMenu(false);
      }
    });

    // Fecha com a tecla Esc
    document.addEventListener('keydown', function (evento) {
      if (evento.key === 'Escape' && cabecalho.classList.contains('menu-aberto')) {
        definirMenu(false);
        botaoMenu.focus();
      }
    });

    // Fecha ao tocar fora do cabeçalho
    document.addEventListener('click', function (evento) {
      if (cabecalho.classList.contains('menu-aberto') && !cabecalho.contains(evento.target)) {
        definirMenu(false);
      }
    });

    // Fecha se o ecrã passar a ter largura de computador
    var ecraLargo = window.matchMedia('(min-width: 960px)');
    var aoMudarLargura = function (consulta) {
      if (consulta.matches) {
        definirMenu(false);
      }
    };
    if (ecraLargo.addEventListener) {
      ecraLargo.addEventListener('change', aoMudarLargura);
    }
  }

  /* ---------- Ao fazer scroll: sombra do cabeçalho e botão de WhatsApp ---------- */
  var botaoWhatsapp = document.querySelector('.whatsapp-flutuante');

  var aoFazerScroll = function () {
    if (cabecalho) {
      cabecalho.classList.toggle('com-sombra', window.scrollY > 8);
    }
    if (botaoWhatsapp) {
      botaoWhatsapp.classList.toggle('visivel', window.scrollY > 400);
    }
  };
  window.addEventListener('scroll', aoFazerScroll, { passive: true });
  aoFazerScroll();

  /* ---------- Realce, no menu, da secção que está no ecrã ---------- */
  var ligacoesMenu = menu ? Array.prototype.slice.call(menu.querySelectorAll('a[href^="#"]')) : [];

  if ('IntersectionObserver' in window && ligacoesMenu.length) {
    var ligacaoPorId = {};
    ligacoesMenu.forEach(function (ligacao) {
      ligacaoPorId[ligacao.getAttribute('href').slice(1)] = ligacao;
    });

    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) {
          return;
        }
        ligacoesMenu.forEach(function (ligacao) {
          ligacao.classList.remove('ativo');
        });
        var ativa = ligacaoPorId[entrada.target.id];
        if (ativa) {
          ativa.classList.add('ativo');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    Object.keys(ligacaoPorId).forEach(function (id) {
      var seccao = document.getElementById(id);
      if (seccao) {
        observador.observe(seccao);
      }
    });
  }

  /* ---------- Botões que escolhem o assunto do formulário ---------- */
  var campoAssunto = document.getElementById('f-assunto');

  if (campoAssunto) {
    Array.prototype.forEach.call(document.querySelectorAll('[data-assunto]'), function (elemento) {
      elemento.addEventListener('click', function () {
        var valor = elemento.getAttribute('data-assunto');
        var existe = Array.prototype.some.call(campoAssunto.options, function (opcao) {
          return opcao.value === valor;
        });
        if (existe) {
          campoAssunto.value = valor;
        }
      });
    });
  }

  /* ---------- Formulário de contacto (Formspree) ---------- */
  var formulario = document.querySelector('.formulario');

  if (formulario && window.fetch && window.FormData) {
    var estado = formulario.querySelector('.formulario__estado');
    var botaoEnviar = formulario.querySelector('button[type="submit"]');
    var textoBotao = botaoEnviar.textContent;

    var mostrarEstado = function (mensagem, tipo) {
      estado.textContent = mensagem;
      estado.className = 'formulario__estado' + (tipo ? ' ' + tipo : '');
    };

    formulario.addEventListener('submit', function (evento) {
      evento.preventDefault();

      // Enquanto o Formspree não estiver configurado (ver README), não tenta enviar
      if (formulario.getAttribute('action').indexOf('SUBSTITUIR') !== -1) {
        mostrarEstado('O formulário ainda não está ativo. Entretanto, contacte-nos pelo WhatsApp ou por email.', 'erro');
        return;
      }

      botaoEnviar.disabled = true;
      botaoEnviar.textContent = 'A enviar…';
      mostrarEstado('', '');

      fetch(formulario.getAttribute('action'), {
        method: 'POST',
        body: new FormData(formulario),
        headers: { Accept: 'application/json' }
      })
        .then(function (resposta) {
          if (!resposta.ok) {
            throw new Error('Erro ' + resposta.status);
          }
          formulario.reset();
          mostrarEstado('Obrigado! Recebemos o seu pedido e vamos responder brevemente.', 'ok');
        })
        .catch(function () {
          mostrarEstado('Não foi possível enviar o pedido. Tente novamente ou contacte-nos pelo WhatsApp ou por email.', 'erro');
        })
        .then(function () {
          botaoEnviar.disabled = false;
          botaoEnviar.textContent = textoBotao;
        });
    });
  }

  /* ---------- Ano atual no rodapé ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-ano]'), function (elemento) {
    elemento.textContent = String(new Date().getFullYear());
  });
})();
