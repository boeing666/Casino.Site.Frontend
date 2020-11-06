import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RouletteComponent} from './components/roulette/roulette.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'roulette', component: RouletteComponent}
];
