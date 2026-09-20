import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.scss'
})
export class Ex10 {
  produtos = [
    { id: 1, nome: 'Teclado', preco: 250.00, promocao: true },
    { id: 2, nome: 'Mouse', preco: 120.50, promocao: false },
    { id: 3, nome: 'Monitor', preco: 899.90, promocao: true },
    { id: 4, nome: 'Headset', preco: 180.00, promocao: false },
    { id: 5, nome: 'Webcam', preco: 210.00, promocao: false }
  ];

  alternarPromocao(produto: any) {
    produto.promocao = !produto.promocao;
  }
}