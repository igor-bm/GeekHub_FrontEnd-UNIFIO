import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.scss',
})
export class Ex11 {
  nomeProduto: string = 'Mouse Gamer';
  preco: number = 120;
  quantidade: number = 1;
  mensagemCarrinho: string = '';

  get total(): number {
    return this.preco * this.quantidade;
  }

  aumentar(): void {
    this.quantidade++;
  }

  diminuir(): void {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho(): void {
    this.mensagemCarrinho = `${this.quantidade}x ${this.nomeProduto} adicionado(s) ao carrinho!`;
  }
}
