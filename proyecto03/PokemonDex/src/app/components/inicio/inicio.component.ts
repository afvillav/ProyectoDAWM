import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokedataService } from '../../servicios/pokedata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements OnInit{
  pokemon: any = '';
  pokemonImg = '';
  idPokemons=["charmander","bulbasaur","squirtle"];
  starters:any=[];

  onSubmit(pokemon:string) {
    this.router.navigate([`/pokemon/${pokemon}`]);
  }

  constructor(private router: Router,private activatedRouter: ActivatedRoute,
    private pokedataService: PokedataService){
      this.activatedRouter.params.subscribe(
        params => {
          this.getPokemon(params['id']);
        }
      )
    }


  ngOnInit(): void {
    this.getStarters();
  }

  getPokemon(id:any) {
    this.pokedataService.getPokemons(id).subscribe(
      res => {
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.starters.push(this.pokemon);
      },
      err => {
        console.log(err);
      }
    )
  }

  getStarters(){
    for(let i=0;i<this.idPokemons.length;i++){
      this.getPokemon(this.idPokemons[i]);
    }
  }



  
}
