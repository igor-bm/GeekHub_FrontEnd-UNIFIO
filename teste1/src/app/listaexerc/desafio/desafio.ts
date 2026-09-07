import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio',
  standalone: false,
  templateUrl: './desafio.html',
  styleUrl: './desafio.scss',
})
export class Desafio {
  nomeAluno: string = '';
  quantidadeDisciplinas: number = 1;
  mensagemMatricula: string = '';

  aumentar(): void {
    this.quantidadeDisciplinas++;
  }

  diminuir(): void {
    if (this.quantidadeDisciplinas > 1) {
      this.quantidadeDisciplinas--;
    }
  }

  realizarMatricula(): void {
    this.mensagemMatricula = `Matrícula realizada com sucesso para ${this.nomeAluno} em ${this.quantidadeDisciplinas} disciplina(s)!`;
  }
}
