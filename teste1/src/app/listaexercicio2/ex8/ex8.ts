import { Component } from '@angular/core';

@Component({
  selector: 'app-ex8',
  standalone: false,
  templateUrl: './ex8.html',
  styleUrl: './ex8.scss'
})
export class Ex8 {
    produtos = [
    { id: 1, nome: 'Teclado', preco: 250.00, quantidade: 10 },
    { id: 2, nome: 'Mouse', preco: 120.50, quantidade: 15 },
    { id: 3, nome: 'Monitor', preco: 899.90, quantidade: 5 },
    { id: 4, nome: 'Headset', preco: 180.00, quantidade: 8 },
    { id: 5, nome: 'Webcam', preco: 210.00, quantidade: 12 }
  ];
}