import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router) {}

  senha() {
    this.route.navigate(['/senha']);
  }
  logar() {
    this.route.navigate(['/logado']);
  }
}
