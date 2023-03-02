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
    this.storeService.misFavoritos$.subscribe(_ =>{
      const items = JSON.parse(this.storeService.contadorFavoritos());
      this.counter = items.length;
      })
      this.storeService.mostrarInformacion();
    };

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  getFav(){
    this.listaCompletaFav =
    this.storeService.getListaDeJuegos();
  }

  eliminarJuegoFav(index: number, juegos: Juegos){
    this.storeService.eliminarLocalStorage(index, juegos);
  }
}
