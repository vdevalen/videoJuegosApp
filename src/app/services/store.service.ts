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
    this.listaDeJuegosAgg.push(juegos);
    this.misFavoritos.next(this.listaDeJuegosAgg);
  }

  getListaDeJuegos(){
    return this.listaDeJuegosAgg;
  }





  // getTotal(){
  //   return this.listaDeJuegosAgg.reduce((sum, item) => sum + item.id, 0);
  // }
}
