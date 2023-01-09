import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionDataService } from '../../servicios/region-data.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit{

  region:any="";
  cantidad=0;
  urlFoto="";

  selectedOption: string="";

  onSelected(value:string): void {
		this.selectedOption = value;
    this.getRegions(this.selectedOption);
	}

  ngOnInit(): void {
  }

  constructor(private activatedRouter: ActivatedRoute,
    private pokedataService: RegionDataService) {
    this.activatedRouter.params.subscribe(
      params => {
        this.getRegions(params['id']);
      }
    )
  }

  getRegions(id:any) {
    this.pokedataService.getRegions(id).subscribe(
      res => {
        console.log(res);
        this.region=res;
        this.cantidad=this.region.pokemon_entries.length;
      },
      err => {
        console.log(err);
      }
    )
  }
}
