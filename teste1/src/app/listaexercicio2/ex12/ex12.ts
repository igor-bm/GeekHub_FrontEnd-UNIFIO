import { Component } from '@angular/core';

@Component({
  selector: 'app-ex12',
  standalone: false,
  templateUrl: './ex12.html',
  styleUrl: './ex12.scss'
})
export class Ex12 {
  novoNome: string = '';
  novaQuantidade: number | null = null;

  mensagemErro: string = '';

  produtos = [
    { id: 1, nome: 'Teclado', quantidade: 10 },
    { id: 2, nome: 'Mouse', quantidade: 15 }
  ];

  cadastrarProduto() {
    if (!this.novoNome || this.novoNome.trim() === '') {
      this.mensagemErro = 'Preencha o nome do produto.';
      return;
    }

    if (this.novaQuantidade === null || this.novaQuantidade < 0) {
      this.mensagemErro = 'A quantidade deve ser igual ou maior que zero.';
      return;
    }

    const novoProduto = {
      id: Date.now(),
      nome: this.novoNome,
      quantidade: this.novaQuantidade
    };

    this.produtos.push(novoProduto);
    this.novoNome = '';
    this.novaQuantidade = null;
    this.mensagemErro = '';
  }

  excluirProduto(index: number) {
    this.produtos.splice(index, 1);
  }
}