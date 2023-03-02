import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Juegos} from '../../models/juegos.model';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss']
})
export class JuegosComponent {

  @Input() juegos: Juegos= {
    id: 0,
    title:'',
    thumbnail: '',
    short_description: '',
    game_url: '',
    genre: '',
    platform: '',
    publisher: '',
    developer:'',
    release_date: '',
    freetogame_profile_url: ''
  };

  @Output() agregarJuego = new EventEmitter<Juegos>();
  @Output() verJuego = new EventEmitter<number>();

  constructor() { }

  agregarFavoritos(){
    this.agregarJuego.emit(this.juegos);
  }

  onVerDetalle(){
    this.verJuego.emit(this.juegos.id);
  }

  // getIcon(){
  //   return this.agregarJuego ? '/assets/svg/heart-solid.svg' : '/assets/svg/heart.svg'
  // }
}
