import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  } from "../../src/app/components/navegacion/navegacion.component";
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { JuegosFavoritosComponent } from './pages/juegos-favoritos/juegos-favoritos.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'juegosFavoritos',
    component: JuegosFavoritosComponent
  },
  {
    path: 'noFound',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
