import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  standalone: false,
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.scss',
})
export class Cabecalho {

@Input()
topo = "Loja Angular 2";
}
