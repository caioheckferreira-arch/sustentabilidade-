// ============================================
// INTERATIVIDADE COM JAVASCRIPT
// ============================================

// Aguarda o carregamento completo da página antes de executar
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // EFEITO 1: BOTÃO PRINCIPAL (SEÇÃO HERO)
    // ========================================
    
    // Pega o botão pelo ID (mesmo id que colocamos no HTML)
    const botaoMensagem = document.getElementById('botaoMensagem');
    
    // Verifica se o botão existe na página (evita erros)
    if (botaoMensagem) {
        // Adiciona um "escutador" de evento de clique
        botaoMensagem.addEventListener('click', function() {
            // Quando clicar, mostra uma mensagem na tela
            alert('🌱 "O futuro não é um lugar para onde estamos indo, mas um que estamos criando." - Vamos construir um futuro sustentável juntos! 🌍');
            
            // Muda a cor de fundo da seção hero
            const hero = document.querySelector('.hero');
            hero.style.background = 'linear-gradient(145deg, #FF5722, #4CAF50, #2196F3)';
            
            // Muda o texto do botão
            botaoMensagem.textContent = 'Mensagem enviada! ✨';
            
            // Desabilita o botão para não clicar novamente
            botaoMensagem.disabled = true;
            botaoMensagem.style.opacity = '0.6';
            botaoMensagem.style.cursor = 'not-allowed';
        });
    }
    
    // ========================================
    // EFEITO 2: BOTÕES DOS CARDS (SAIBA MAIS)
    // ========================================
    
    // Pega todos os botões que estão dentro dos cards
    const botoesCards = document.querySelectorAll('.card-botao');
    
    // Para cada botão encontrado...
    botoesCards.forEach(botao => {
        
        // Adiciona evento de clique
        botao.addEventListener('click', function() {
            
            // Pega o atributo data-card (que colocamos no HTML)
            const cardId = this.getAttribute('data-card');
            
            // Encontra a mensagem correspondente (mensagem1, mensagem2, mensagem3)
            const mensagem = document.getElementById(`mensagem${cardId}`);
            
            // Verifica se a mensagem existe
            if (mensagem) {
                // Verifica se a mensagem está visível ou não
                if (mensagem.style.display === 'none' || mensagem.style.display === '') {
                    // Se está escondida, mostra
                    mensagem.style.display = 'block';
                    this.textContent = 'Mostrar menos';
                    
                    // Muda a cor do card (outra interação)
                    const card = document.getElementById(`card${cardId}`);
                    card.style.backgroundColor = '#E8F5E9'; // Verde clarinho
                } else {
                    // Se está visível, esconde
                    mensagem.style.display = 'none';
                    this.textContent = 'Saiba mais';
                    
                    // Volta a cor original do card
                    const card = document.getElementById(`card${cardId}`);
                    card.style.backgroundColor = 'white';
                }
            }
        });
    });
    
    // ========================================
    // EFEITO 3: ROLAGEM SUAVE NO MENU (OPCIONAL)
    // ========================================
    
    // Pega todos os links do menu
    const linksMenu = document.querySelectorAll('.menu-link');
    
    linksMenu.forEach(link => {
        // Adiciona evento de clique em cada link
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão do link (não pula direto)
            e.preventDefault();
            
            // Pega o href do link (ex: #quem-sou)
            const href = this.getAttribute('href');
            
            // Encontra a seção pelo id
            const secao = document.querySelector(href);
            
            // Se a seção existir
            if (secao) {
                // Faz a rolagem suave até a seção
                secao.scrollIntoView({
                    behavior: 'smooth', // Rolagem suave
                    block: 'start'      // Alinha no topo da seção
                });
            }
        });
    });
    
    // ========================================
    // EFEITO 4: MUDAR COR DOS CARDS AO PASSAR O MOUSE
    // ========================================
    
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        // Quando o mouse entra no card
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#FFF9C4'; // Amarelo clarinho
        });
        
        // Quando o mouse sai do card
        card.addEventListener('mouseleave', function() {
            // Se não tiver mensagem aberta, volta ao branco
            const botao = this.querySelector('.card-botao');
            const cardId = botao.getAttribute('data-card');
            const mensagem = document.getElementById(`mensagem${cardId}`);
            
            if (mensagem.style.display === 'none' || mensagem.style.display === '') {
                this.style.backgroundColor = 'white';
            }
        });
    });
    
    // ========================================
    // EFEITO 5: RELÓGIO OU DATA (OPCIONAL)
    // ========================================
    
    // Criar um elemento para mostrar a data no rodapé
    const copyright = document.querySelector('.copyright');
    if (copyright) {
        const data = new Date();
        const ano = data.getFullYear();
        copyright.innerHTML = `© ${ano} - Construindo um futuro sustentável juntos`;
    }
    
    console.log('Site carregado com sucesso! Todos os efeitos estão prontos.');
});