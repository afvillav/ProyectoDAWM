import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent {

  menu(enlaces: any) {
    enlaces.toggle()
  }


  onSubmit(pokemon:string) {
    console.log('it does nothing',pokemon);
  }
}
