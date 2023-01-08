import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegionComponent } from './components/region/region.component';

const routes: Routes = [
    { path: "pokemon/:id", component: PokemonComponent },
    { path: "habilidad", component: HabilidadComponent },
    { path: "inicio", component: InicioComponent },
    { path: "region", component: RegionComponent },
    { path: "**", redirectTo: "inicio" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
