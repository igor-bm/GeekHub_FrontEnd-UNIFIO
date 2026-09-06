import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.scss',
})
export class Ex6 {
  contador = 0;

  soma(){
    this.contador++;
  }

  subtrai(){
    if (this.contador > 0){
      this.contador--;
    }
  }
}
