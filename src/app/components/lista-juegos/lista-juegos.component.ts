import { Component, OnInit} from '@angular/core';
import { Juegos } from '../../models/juegos.model';
import { StoreService } from '../../services/store.service';
import { JuegosService } from '../../services/juegos.service';


@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.scss']
})
export class ListaJuegosComponent implements OnInit {

  listaDeJuegosAgg: Juegos [] = []; //se pone vacio para que cada que llegue un juego nuevo aparezca en este array
  // total = 0;
  juegosArray: Juegos[] = [];
  today = new Date();
  showJuegoIndividual = false;
  verJuegoElegido = false;

  juegoElegido: Juegos = {
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
  }


  constructor( //inyeccion de dependencias
    private storeService: StoreService,
    private juegosService: JuegosService
  ) {
    this.listaDeJuegosAgg = this.storeService.getListaDeJuegos();
  }

  ngOnInit(): void {
    this.juegosService.getTodosJuegos() //observables
    .subscribe(data => {
      this.juegosArray = data;
    });
  }

  juegosAgregados(juegos: Juegos){
      console.log(juegos);
      this.storeService.aggJuegoFav(juegos);
      // this.total = this.storeService.getTotal();//se calcula el total de los juegos
    }

  toggleJuegoIndividual(){
      this.showJuegoIndividual = !this.showJuegoIndividual;
    }

    onVerDetalle(id: number){
      console.log('id')
      this.juegosService.getJuego(id)
      .subscribe(data => {
        console.log('holiii', data);
        this.toggleJuegoIndividual();
        this.juegoElegido = data;
      })
    }
  }




