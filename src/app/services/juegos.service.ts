import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Juegos } from "./../models/juegos.model";
import {  } from "./../../environments/environment";
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  private urlApi = `${environment.urlApi}/api`;

  constructor(
    private http: HttpClient
  ) { }

  getTodosJuegos(){
    return this.http.get<Juegos[]>(`${this.urlApi}/games?category=shooter`);
  }

  getJuego(id: number){
    return this.http.get<Juegos>(`${this.urlApi}/game?id=${id}`)
  }
}
