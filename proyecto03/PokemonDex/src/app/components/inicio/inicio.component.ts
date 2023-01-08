import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent {

  menu(enlaces: any) {
    enlaces.toggle()
  }

  constructor(private router: Router){}

  onSubmit(pokemon:string) {
    console.log(pokemon);
    this.router.navigate([`/pokemon/${pokemon}`]);
  }

  
}
