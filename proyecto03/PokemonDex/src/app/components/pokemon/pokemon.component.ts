import { Component, OnInit } from '@angular/core';
import { PokedataService } from '../../servicios/pokedata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  pokemon: any = '';
  pokemonImg = '';
  pokemonType = "";
  pokemonType2 = "";
  stats:any=[];

  constructor(private activatedRouter: ActivatedRoute,
    private pokedataService: PokedataService) {
    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
  }

  ngOnInit(): void {
  }

  getPokemon(id:any) {
    this.pokedataService.getPokemons(id).subscribe(
      res => {
        this.stats=[];
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;
        if(res.types.length>1){
          this.pokemonType2 = res.types[1].type.name;
        }
        for(let i=0;i<6;i++){
          this.stats.push(this.pokemon.stats[i].base_stat);
        }
      },
      err => {
        console.log(err);
      }
    )
  }
  

}
