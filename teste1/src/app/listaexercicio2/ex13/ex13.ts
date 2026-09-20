import { Component } from '@angular/core';

export interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'média' | 'alta';
  concluida: boolean;
}

@Component({
  selector: 'app-ex13',
  standalone: false,
  templateUrl: './ex13.html',
  styleUrl: './ex13.scss'
})
export class Ex13 {
  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Ajustar layout da home', responsavel: 'Igor', prioridade: 'alta', concluida: false },
    { id: 2, titulo: 'Corrigir bug no login', responsavel: 'Maria', prioridade: 'alta', concluida: true },
    { id: 3, titulo: 'Criar documentação', responsavel: 'João', prioridade: 'baixa', concluida: false },
    { id: 4, titulo: 'Atualizar dependências', responsavel: 'Ana', prioridade: 'média', concluida: true },
    { id: 5, titulo: 'Testar novos fluxos', responsavel: 'Pedro', prioridade: 'média', concluida: false },
    { id: 6, titulo: 'Revisar código', responsavel: 'Igor', prioridade: 'baixa', concluida: false }
  ];

  alternarSituacao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

  totalConcluidas() {
    let total = 0;
    for (let tarefa of this.tarefas) {
      if (tarefa.concluida) {
        total++;
      }
    }
    return total;
  }

  totalPendentes() {
    let total = 0;
    for (let tarefa of this.tarefas) {
      if (!tarefa.concluida) {
        total++;
      }
    }
    return total;
  }
}