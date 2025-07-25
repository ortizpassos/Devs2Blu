// Sistema de carrinho de compras
class CarrinhoCompras {
    constructor() {
        this.itens = JSON.parse(localStorage.getItem('carrinho')) || [];
        this.atualizarContadorCarrinho();
    }

    // Adicionar produto ao carrinho
    adicionarProduto(produtoId, quantidade = 1) {
        const produto = obterProdutoPorId(produtoId);
        if (!produto) {
            alert('Produto não encontrado!');
            return false;
        }

        if (produto.quantidade <= 0) {
            alert('Produto fora de estoque!');
            return false;
        }

        const itemExistente = this.itens.find(item => item.id === produtoId);
        
        if (itemExistente) {
            const novaQuantidade = itemExistente.quantidade + quantidade;
            if (novaQuantidade > produto.quantidade) {
                alert(`Quantidade máxima disponível: ${produto.quantidade}`);
                return false;
            }
            itemExistente.quantidade = novaQuantidade;
        } else {
            if (quantidade > produto.quantidade) {
                alert(`Quantidade máxima disponível: ${produto.quantidade}`);
                return false;
            }
            this.itens.push({
                id: produtoId,
                nome: produto.nome,
                valor: produto.valor,
                quantidade: quantidade,
                imagem: produto.imagem
            });
        }

        this.salvarCarrinho();
        this.atualizarContadorCarrinho();
        return true;
    }

    // Remover produto do carrinho
    removerProduto(produtoId) {
        this.itens = this.itens.filter(item => item.id !== produtoId);
        this.salvarCarrinho();
        this.atualizarContadorCarrinho();
    }

    // Atualizar quantidade de um item
    atualizarQuantidade(produtoId, novaQuantidade) {
        const produto = obterProdutoPorId(produtoId);
        if (!produto) return false;

        if (novaQuantidade > produto.quantidade) {
            alert(`Quantidade máxima disponível: ${produto.quantidade}`);
            return false;
        }

        if (novaQuantidade <= 0) {
            this.removerProduto(produtoId);
            return true;
        }

        const item = this.itens.find(item => item.id === produtoId);
        if (item) {
            item.quantidade = novaQuantidade;
            this.salvarCarrinho();
            this.atualizarContadorCarrinho();
        }
        return true;
    }

    // Obter total do carrinho
    obterTotal() {
        return this.itens.reduce((total, item) => total + (item.valor * item.quantidade), 0);
    }

    // Obter quantidade total de itens
    obterQuantidadeTotal() {
        return this.itens.reduce((total, item) => total + item.quantidade, 0);
    }

    // Limpar carrinho
    limparCarrinho() {
        this.itens = [];
        this.salvarCarrinho();
        this.atualizarContadorCarrinho();
    }

    // Finalizar compra
    finalizarCompra() {
        if (this.itens.length === 0) {
            alert('Carrinho vazio!');
            return false;
        }

        // Atualizar estoque dos produtos
        this.itens.forEach(item => {
            const produto = obterProdutoPorId(item.id);
            if (produto) {
                produto.quantidade -= item.quantidade;
            }
        });

        // Limpar carrinho
        this.limparCarrinho();
        
        alert('Compra finalizada com sucesso!');
        
        // Atualizar exibição dos produtos
        if (typeof exibirProdutos === 'function') {
            exibirProdutos();
        }
        
        return true;
    }

    // Salvar carrinho no localStorage
    salvarCarrinho() {
        localStorage.setItem('carrinho', JSON.stringify(this.itens));
    }

    // Atualizar contador do carrinho no header
    atualizarContadorCarrinho() {
        const contador = document.getElementById('contador-carrinho');
        if (contador) {
            const quantidade = this.obterQuantidadeTotal();
            contador.textContent = quantidade;
            contador.style.display = quantidade > 0 ? 'inline' : 'none';
        }
    }
}

// Instância global do carrinho
const carrinho = new CarrinhoCompras();

