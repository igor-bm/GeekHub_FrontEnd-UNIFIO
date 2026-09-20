import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html',
  styleUrl: './ex9.scss'
})
export class Ex9 {
    produtos = [
    { id: 1, nome: 'Teclado', preco: 250.00, quantidade: 0 },
    { id: 2, nome: 'Mouse', preco: 120.50, quantidade: 3 },
    { id: 3, nome: 'Monitor', preco: 899.90, quantidade: 5 },
    { id: 4, nome: 'Headset', preco: 180.00, quantidade: 8 },
    { id: 5, nome: 'Webcam', preco: 210.00, quantidade: 12 }
  ];
}