import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexModule } from './pokedex/pokedex.module';
import { SharedModule } from './shared/shared.module';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokedexModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
