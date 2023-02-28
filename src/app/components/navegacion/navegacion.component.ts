import { Component, OnInit } from '@angular/core';
import { StoreService } from "../../services/store.service";

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {
  showJuegoIndividual = false;
  activeMenu = false;
  counter = 0;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.misFavoritos$.subscribe(Juegos =>{
      this.counter =  Juegos.length;
      })
    };

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

}
