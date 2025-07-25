// JavaScript específico para página de microcontroladores

// Variáveis globais
let produtosFiltrados = [];
let filtroMarcaAtual = '';
let termoPesquisaAtual = '';

// Inicialização da página
document.addEventListener('DOMContentLoaded', function() {
    // Filtrar apenas microcontroladores
    produtosFiltrados = produtos.filter(produto => produto.categoria === 'microcontroladores');
    exibirProdutos();
    carrinho.atualizarContadorCarrinho();
});

// Função para exibir produtos em cards
function exibirProdutos(produtosParaExibir = produtosFiltrados) {
    const gridProdutos = document.getElementById('grid-produtos');
    const semProdutos = document.getElementById('sem-produtos');
    
    if (produtosParaExibir.length === 0) {
        gridProdutos.innerHTML = '';
        gridProdutos.classList.add('d-none');
        semProdutos.classList.remove('d-none');
        return;
    }
    
    gridProdutos.classList.remove('d-none');
    semProdutos.classList.add('d-none');
    
    gridProdutos.innerHTML = produtosParaExibir.map(produto => criarCardProduto(produto)).join('');
    
    // Adicionar animação de entrada
    cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add('fade-in-up');
    card.addEventListener('animationend', () => {
    card.classList.remove('fade-in-up');
    card.style.animationDelay = '';
    }, { once: true });
});

}

// Função para criar card de produto
function criarCardProduto(produto) {
    const esgotado = produto.quantidade <= 0;
    const estoqueClass = esgotado ? 'esgotado' : produto.quantidade <= 5 ? 'baixo' : '';
    const cardClass = esgotado ? 'produto-esgotado' : '';
    
    return `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card card-produto ${cardClass}">
                <div class="position-relative">
                    <span class="badge-categoria">Microcontrolador</span>
                    <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}" 
                         onerror="this.src='assets/images/placeholder.jpg'">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text">ID: ${produto.id}</p>
                    <div class="preco">R$ ${produto.valor.toFixed(2).replace('.', ',')}</div>
                    <div class="estoque ${estoqueClass}">
                        ${esgotado ? 
                            '<i class="bi bi-x-circle-fill"></i> Fora de estoque' : 
                            produto.quantidade <= 5 ? 
                                `<i class="bi bi-exclamation-triangle-fill"></i> Apenas ${produto.quantidade} em estoque` :
                                `<i class="bi bi-check-circle-fill text-success"></i> ${produto.quantidade} em estoque`
                        }
                    </div>
                    <div class="btn-group w-100" role="group">
                        <button type="button" class="btn btn-outline-primary btn-sm" 
                                onclick="verDetalhes(${produto.id})" title="Ver detalhes">
                            <i class="bi bi-eye"></i>
                        </button>
                        <button type="button" class="btn btn-primary flex-fill" 
                                onclick="adicionarAoCarrinho(${produto.id})" 
                                ${esgotado ? 'disabled' : ''}>
                            <i class="bi bi-cart-plus"></i> 
                            ${esgotado ? 'Indisponível' : 'Adicionar'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Função para filtrar por categoria (microcontroladores)
function filtrarPorCategoria(categoria) {
    filtroMarcaAtual = '';
    
    // Atualizar botões ativos
    document.querySelectorAll('.btn-group .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('.btn-group .btn').classList.add('active');
    
    aplicarFiltros();
}

// Função para filtrar por marca
function filtrarPorMarca(marca) {
    filtroMarcaAtual = marca;
    
    // Atualizar botões ativos
    document.querySelectorAll('.btn-group .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const botaoMarca = document.querySelector(`[onclick="filtrarPorMarca('${marca}')"]`);
    if (botaoMarca) {
        botaoMarca.classList.add('active');
    }
    
    aplicarFiltros();
}

// Função para aplicar todos os filtros
function aplicarFiltros() {
    let produtosFiltradosTemp = produtos.filter(produto => produto.categoria === 'microcontroladores');
    
    // Filtrar por marca
    if (filtroMarcaAtual) {
        produtosFiltradosTemp = produtosFiltradosTemp.filter(produto => {
            const nomeLower = produto.nome.toLowerCase();
            switch (filtroMarcaAtual) {
                case 'arduino':
                    return nomeLower.includes('arduino');
                case 'esp':
                    return nomeLower.includes('esp') || nomeLower.includes('nodemcu') || nomeLower.includes('wemos');
                case 'raspberry':
                    return nomeLower.includes('raspberry') || nomeLower.includes('pi');
                default:
                    return true;
            }
        });
    }
    
    // Filtrar por termo de pesquisa
    if (termoPesquisaAtual) {
        produtosFiltradosTemp = produtosFiltradosTemp.filter(produto =>
            produto.nome.toLowerCase().includes(termoPesquisaAtual.toLowerCase())
        );
    }
    
    produtosFiltrados = produtosFiltradosTemp;
    
    // Aplicar ordenação atual
    const ordenacao = document.getElementById('ordenacao').value;
    ordenarProdutosPor(ordenacao);
}

// Função para ordenar produtos
function ordenarProdutos() {
    const ordenacao = document.getElementById('ordenacao').value;
    ordenarProdutosPor(ordenacao);
}

function ordenarProdutosPor(criterio) {
    switch (criterio) {
        case 'nome':
            produtosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
            break;
        case 'preco-menor':
            produtosFiltrados.sort((a, b) => a.valor - b.valor);
            break;
        case 'preco-maior':
            produtosFiltrados.sort((a, b) => b.valor - a.valor);
            break;
        case 'estoque':
            produtosFiltrados.sort((a, b) => b.quantidade - a.quantidade);
            break;
    }
    
    exibirProdutos();
}

// Função para pesquisar produtos
function pesquisarProdutos(event) {
    event.preventDefault();
    
    const campoPesquisa = document.getElementById('campo-pesquisa');
    termoPesquisaAtual = campoPesquisa.value.trim();
    
    aplicarFiltros();
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produtoId) {
    const sucesso = carrinho.adicionarProduto(produtoId);
    
    if (sucesso) {
        // Feedback visual
        mostrarNotificacao('Produto adicionado ao carrinho!', 'success');
        
        // Atualizar exibição se necessário
        const produto = obterProdutoPorId(produtoId);
        if (produto && produto.quantidade <= 0) {
            exibirProdutos();
        }
    }
}

// Função para ver detalhes do produto
function verDetalhes(produtoId) {
    const produto = obterProdutoPorId(produtoId);
    if (!produto) return;
    
    const modal = new bootstrap.Modal(document.createElement('div'));
    modal._element.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${produto.nome}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="${produto.imagem}" class="img-fluid rounded" alt="${produto.nome}"
                                 onerror="this.src='assets/images/placeholder.jpg'">
                        </div>
                        <div class="col-md-6">
                            <h6>Detalhes do Produto</h6>
                            <p><strong>ID:</strong> ${produto.id}</p>
                            <p><strong>Categoria:</strong> Microcontrolador</p>
                            <p><strong>Preço:</strong> R$ ${produto.valor.toFixed(2).replace('.', ',')}</p>
                            <p><strong>Estoque:</strong> ${produto.quantidade} unidades</p>
                            
                            <div class="mt-4">
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Quantidade</span>
                                    <input type="number" class="form-control" id="quantidade-${produto.id}" 
                                           value="1" min="1" max="${produto.quantidade}">
                                </div>
                                <button class="btn btn-primary w-100" 
                                        onclick="adicionarQuantidadeAoCarrinho(${produto.id})"
                                        ${produto.quantidade <= 0 ? 'disabled' : ''}>
                                    <i class="bi bi-cart-plus"></i> Adicionar ao Carrinho
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal._element);
    modal.show();
    
    modal._element.addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modal._element);
    });
}

// Função para adicionar quantidade específica ao carrinho
function adicionarQuantidadeAoCarrinho(produtoId) {
    const quantidadeInput = document.getElementById(`quantidade-${produtoId}`);
    const quantidade = parseInt(quantidadeInput.value) || 1;
    
    const sucesso = carrinho.adicionarProduto(produtoId, quantidade);
    
    if (sucesso) {
        mostrarNotificacao(`${quantidade} item(s) adicionado(s) ao carrinho!`, 'success');
        
        // Fechar modal
        const modal = bootstrap.Modal.getInstance(quantidadeInput.closest('.modal'));
        if (modal) modal.hide();
        
        // Atualizar exibição
        exibirProdutos();
    }
}

// Função para abrir carrinho
function abrirCarrinho() {
    const modal = new bootstrap.Modal(document.getElementById('modalCarrinho'));
    atualizarConteudoCarrinho();
    modal.show();
}

// Função para atualizar conteúdo do carrinho
function atualizarConteudoCarrinho() {
    const conteudoCarrinho = document.getElementById('conteudo-carrinho');
    
    if (carrinho.itens.length === 0) {
        conteudoCarrinho.innerHTML = `
            <div class="carrinho-vazio">
                <i class="bi bi-cart-x"></i>
                <h4>Carrinho vazio</h4>
                <p>Adicione produtos ao seu carrinho para continuar</p>
            </div>
        `;
        return;
    }
    
    const itensHTML = carrinho.itens.map(item => `
        <div class="item-carrinho d-flex align-items-center">
            <img src="${item.imagem}" alt="${item.nome}" class="me-3"
                 onerror="this.src='assets/images/placeholder.jpg'">
            <div class="flex-grow-1">
                <div class="nome-produto">${item.nome}</div>
                <div class="preco-produto">R$ ${item.valor.toFixed(2).replace('.', ',')}</div>
            </div>
            <div class="quantidade-controls me-3">
                <button class="btn btn-outline-secondary btn-sm" onclick="diminuirQuantidade(${item.id})">
                    <i class="bi bi-dash"></i>
                </button>
                <input type="number" value="${item.quantidade}" min="1" 
                       onchange="atualizarQuantidadeCarrinho(${item.id}, this.value)">
                <button class="btn btn-outline-secondary btn-sm" onclick="aumentarQuantidade(${item.id})">
                    <i class="bi bi-plus"></i>
                </button>
            </div>
            <div class="text-end">
                <div class="fw-bold">R$ ${(item.valor * item.quantidade).toFixed(2).replace('.', ',')}</div>
                <button class="btn btn-outline-danger btn-sm mt-1" onclick="removerDoCarrinho(${item.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    const totalHTML = `
        <div class="total-carrinho">
            <div class="d-flex justify-content-between align-items-center">
                <span class="fs-5">Total:</span>
                <span class="valor-total">R$ ${carrinho.obterTotal().toFixed(2).replace('.', ',')}</span>
            </div>
        </div>
    `;
    
    conteudoCarrinho.innerHTML = itensHTML + totalHTML;
}

// Funções do carrinho (reutilizadas do app.js)
function aumentarQuantidade(produtoId) {
    const item = carrinho.itens.find(item => item.id === produtoId);
    if (item) {
        carrinho.atualizarQuantidade(produtoId, item.quantidade + 1);
        atualizarConteudoCarrinho();
    }
}

function diminuirQuantidade(produtoId) {
    const item = carrinho.itens.find(item => item.id === produtoId);
    if (item && item.quantidade > 1) {
        carrinho.atualizarQuantidade(produtoId, item.quantidade - 1);
        atualizarConteudoCarrinho();
    }
}

function atualizarQuantidadeCarrinho(produtoId, novaQuantidade) {
    carrinho.atualizarQuantidade(produtoId, parseInt(novaQuantidade));
    atualizarConteudoCarrinho();
}

function removerDoCarrinho(produtoId) {
    carrinho.removerProduto(produtoId);
    atualizarConteudoCarrinho();
    exibirProdutos();
}

function limparCarrinho() {
    if (confirm('Tem certeza que deseja limpar o carrinho?')) {
        carrinho.limparCarrinho();
        atualizarConteudoCarrinho();
        exibirProdutos();
    }
}

function finalizarCompra() {
    if (carrinho.itens.length === 0) {
        alert('Carrinho vazio!');
        return;
    }
    
    if (confirm('Finalizar compra?')) {
        carrinho.finalizarCompra();
        atualizarConteudoCarrinho();
        
        // Fechar modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalCarrinho'));
        if (modal) modal.hide();
        
        mostrarNotificacao('Compra finalizada com sucesso!', 'success');
    }
}

// Função para mostrar notificações
function mostrarNotificacao(mensagem, tipo = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-white bg-${tipo === 'success' ? 'success' : 'primary'} border-0`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${mensagem}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    // Container para toasts
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'toast-container position-fixed top-0 end-0 p-3';
        toastContainer.style.zIndex = '9999';
        document.body.appendChild(toastContainer);
    }
    
    toastContainer.appendChild(toast);
    
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    
    toast.addEventListener('hidden.bs.toast', function() {
        toastContainer.removeChild(toast);
    });
}

