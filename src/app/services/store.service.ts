import { Injectable } from '@angular/core';
import { Juegos } from '../models/juegos.model';
import { BehaviorSubject } from "rxjs";

@Injectable({ //este decorador hace que sea inyectable
  providedIn: 'root'
})
export class StoreService {
  private listaDeJuegosAgg: Juegos [] = [];
  private misFavoritos = new BehaviorSubject<Juegos[]>([]);

  misFavoritos$ = this.misFavoritos.asObservable(); //compartir

  constructor() { }

  aggJuegoFav(juegos: Juegos){
    console.log(juegos);
    console.log(this.listaDeJuegosAgg);
    console.log('listaaa',juegos)
    if (this.listaDeJuegosAgg.filter((lista)=> lista.id === juegos.id)) {
      this.listaDeJuegosAgg.push(juegos);
      this.misFavoritos.next(this.listaDeJuegosAgg);
    }
  }

  getListaDeJuegos(){
    return this.listaDeJuegosAgg;
  }
}
