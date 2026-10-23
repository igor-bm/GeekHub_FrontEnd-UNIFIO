import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  standalone: false,
  templateUrl: './teste.html',
  styleUrl: './teste.scss',
})
export class Teste {
  nome = '';
  descricao = '';
  mensagem = '';

  salvar(): void {
    if (!this.nome.trim()) return;
    this.mensagem = `Projeto "${this.nome.trim()}" validado!`;
  }
  limpar(): void {
    this.nome = '';
    this.descricao = '';
    this.mensagem = '';
  }
}
