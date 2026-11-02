import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Movies } from './movies/movies';
import { Movie } from './movie/movie';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'movies', component: Movies },
  { path: 'movie/:id', component: Movie },
  { path: '**', redirectTo: '' }
];