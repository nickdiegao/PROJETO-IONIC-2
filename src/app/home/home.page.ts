import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  alunos = [
    { nome: 'Nicholas Diego', matricula: '123456' },
    { nome: 'Josias Nekko', matricula: '789012' },
    { nome: 'Pedro Henrique', matricula: '345678' },
    { nome: 'Lucas Gabriel', matricula: '345678' },
    { nome: 'Christian Lucas', matricula: '345678' }
  ];

  constructor() {}
}
