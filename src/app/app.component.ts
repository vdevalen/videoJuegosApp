import { Component } from '@angular/core';
import { Juegos } from './models/juegos.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'video-juegos-app';
  juegosArray: Juegos[] = [];
}

