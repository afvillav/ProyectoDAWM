import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { RegionComponent } from './components/region/region.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HabilidadComponent } from './components/habilidad/habilidad.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    RegionComponent,
    InicioComponent,
    HabilidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
