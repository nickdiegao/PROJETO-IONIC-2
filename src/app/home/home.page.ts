import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  alunos = [
    { imagem: 'https://raw.githubusercontent.com/nickdiegao/portfolio/main/assets/NICHOLAS%20PORTFOLIO1.jpg', nome: 'Nicholas Diego', matricula: '01436621' },
    { imagem: 'https://raw.githubusercontent.com/nickdiegao/portfolio/main/assets/WILL-PORTFOLIO.jpeg', nome: 'Willams Matheus', matricula: '01532905' },
    { imagem: 'https://raw.githubusercontent.com/nickdiegao/portfolio/main/assets/LUAN-PORTFOLIO.jpeg', nome: 'Luan Guilherme', matricula: '01648011' }
  ];

  constructor() {}
}
