import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovDataService } from '../../servicios/mov-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit{

  movimiento:any ="";

  ngOnInit(): void {
  }

  constructor(private router: Router,private activatedRouter: ActivatedRoute,
    private MovDataService: MovDataService){
      this.activatedRouter.params.subscribe(
        params => {
          this.getMoves(params['id']);
        }
      )
    }

    getMoves(id:any) {
      this.MovDataService.getMoves(id).subscribe(
        res => {
          console.log(res)
          this.movimiento = res;
        },
        err => {
          console.log(err);
        }
      )
    }

}
