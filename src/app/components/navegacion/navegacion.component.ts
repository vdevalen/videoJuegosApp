import { Juegos } from './../../models/juegos.model';
import { Component, OnInit } from '@angular/core';
import { StoreService } from "../../services/store.service";
import { JuegosService } from "../../services/juegos.service";


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {
  showJuegoIndividual = false;
  activeMenu = false;
  counter = 0;
  listaCompletaFav: Juegos [] = [];

  constructor(
    private storeService: StoreService,
    private juegosService: JuegosService
  ) { }

  ngOnInit(): void {
    this.getFav();
    this.storeService.misFavoritos$.subscribe(Juegos =>{
      this.counter =  Juegos.length;
      })
    };

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  getFav(){
    this.listaCompletaFav =
    this.storeService.getListaDeJuegos();
    console.log(this.listaCompletaFav);
  }

  eliminarJuegoFav(id : number){
    this.storeService.getEliminarFavorito(id);
  }
}
