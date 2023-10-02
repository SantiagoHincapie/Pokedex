import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoaxComponent } from './components/search-boax/search-boax.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoaxComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HomePageComponent]
})
export class PokedexModule { }
