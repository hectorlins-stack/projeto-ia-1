document.addEventListener('DOMContentLoaded', () => {
    
    // 1. FILTRO DE PRODUTOS
    const botoesFiltro = document.querySelectorAll('.btn-filtro');
    const produtos = document.querySelectorAll('.item-produto');

    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', () => {
            // Remove classe ativa de todos e adiciona no clicado
            botoesFiltro.forEach(btn => btn.classList.remove('active'));
            botao.classList.add('active');

            const categoriaFiltro = botao.getAttribute('data-filter');

            produtos.forEach(produto => {
                const categoriaProduto = produto.getAttribute('data-category');
                
                if (categoriaFiltro === 'todos' || categoriaFiltro === categoriaProduto) {
                    produto.style.display = 'block';
                    // Animação simples de entrada
                    produto.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    produto.style.display = 'none';
                }
            });
        });
    });

    // 2. LOGICA DE COMPRA / ORÇAMENTO
    const botoesCompra = document.querySelectorAll('.btn-buy');
    
    botoesCompra.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const nomeProduto = e.target.parentElement.querySelector('h3').innerText;
            
            if(e.target.innerText === "Orçar") {
                alert(`Olá! Estamos enviando você para o WhatsApp para cotar o produto: ${nomeProduto}`);
            } else {
                alert(`${nomeProduto} foi adicionado ao seu carrinho de compras!`);
            }
        });
    });

    // 3. EFEITO DE SCROLL NO HEADER
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            header.style.padding = '10px 8%';
            header.style.backgroundColor = '#f9f9f9';
        } else {
            header.style.padding = '20px 8%';
            header.style.backgroundColor = '#fff';
        }
    });
});