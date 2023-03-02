import { Injectable } from '@angular/core';
import { Juegos } from '../models/juegos.model';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private listaDeJuegosAgg: Juegos [] = [];
  private misFavoritos = new BehaviorSubject<Juegos[]>([]);

  misFavoritos$ = this.misFavoritos.asObservable();

  readonly favoritos= "favoritos"
  constructor() { }


  agregarStorage(juegos: Juegos){
    const incluirJuego = this.listaDeJuegosAgg.includes(juegos);
    if (!incluirJuego) {
      this.listaDeJuegosAgg.push(juegos);
        localStorage.setItem(this.favoritos, JSON.stringify(this.listaDeJuegosAgg));
        this.misFavoritos.next(this.listaDeJuegosAgg);
    }
  }

  eliminarLocalStorage(index: number, juegos : Juegos){
    localStorage.removeItem(this.favoritos);
    this.listaDeJuegosAgg.splice(index, 1);
    localStorage.setItem(this.favoritos, JSON.stringify(this.listaDeJuegosAgg));
    this.misFavoritos.next(this.listaDeJuegosAgg);
  }

  getListaDeJuegos(){
    return this.listaDeJuegosAgg;
  }

  contadorFavoritos(){
    const items = localStorage.getItem(this.favoritos);
    return items !== null ? items:'';
  }

  mostrarInformacion(){
    if (this.listaDeJuegosAgg.length === 0) {
      const items = localStorage.getItem(this.favoritos);
      if (items !== null) {
        const itemsTrans: Juegos [] = JSON.parse(items);
        itemsTrans.forEach((item)=>{
          this.listaDeJuegosAgg.push(item);
        })
      }
    }
  }
}

