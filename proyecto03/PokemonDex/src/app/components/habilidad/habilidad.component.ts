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
  pp="";
  tipo="";
  precision="";
  potencia="";
  nombre="";
  cat="";
  urlFoto="";


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
          this.movimiento = res;
          this.tipo=this.movimiento.type.name;
          this.pp=this.movimiento.pp;
          this.precision=this.movimiento.accuracy;
          this.potencia=this.movimiento.power;
          this.nombre=this.movimiento.name;
          this.cat=this.movimiento.damage_class.name;
          this.urlFoto=`assets/tipos/${this.tipo}.png`;
        },
        err => {
          console.log(err);
        }
      )
    }

}
