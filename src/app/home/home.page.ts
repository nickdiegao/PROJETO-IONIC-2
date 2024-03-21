import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  alunos = [
    { nome: 'Nicholas Diego', matricula: '123456' },
    { nome: 'Maria', matricula: '789012' },
    { nome: 'Pedro', matricula: '345678' },
    { nome: 'Pedro', matricula: '345678' },
    { nome: 'Pedro', matricula: '345678' },
    { nome: 'Pedro', matricula: '345678' },
    { nome: 'Pedro', matricula: '345678' },
    { nome: 'Pedro', matricula: '345678' }
  ];

  constructor() {}
}
