import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.scss',
})
export class Ex10 {
  usuario: string = '';
  senha: string = '';
  mensagemBoasVindas: string = '';

  fazerLogin(): void {
    this.mensagemBoasVindas = `Bem-vindo, ${this.usuario}!`;
  }
}
