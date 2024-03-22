import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  alunos = [
    { nome: 'Nicholas Diego', matricula: '01436621' },
    { nome: 'Ewerton Silva', matricula:'01654963'},
    { nome: 'Willams Matheus', matricula: '01532905' },
    { nome: 'Pedro Henrique', matricula: '345678' },
    { nome: 'Lucas Gabriel', matricula: '345678' },
    { nome: 'Christian Lucas', matricula: '345678' }
  ];

  constructor() {}
}
