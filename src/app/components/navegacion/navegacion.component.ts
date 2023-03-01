import { Component, OnInit } from '@angular/core';
import { StoreService } from "../../services/store.service";
import { Juegos } from '../../models/juegos.model';

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
    private storeService: StoreService
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
}
