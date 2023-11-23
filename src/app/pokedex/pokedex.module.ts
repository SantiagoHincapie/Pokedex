import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoaxComponent } from './components/search-boax/search-boax.component';
import { TarjetaPokemonPresentacionComponent } from './components/tarjeta-pokemon-presentacion/tarjeta-pokemon-presentacion.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoaxComponent,
    TarjetaPokemonPresentacionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HomePageComponent]
})
export class PokedexModule { }
