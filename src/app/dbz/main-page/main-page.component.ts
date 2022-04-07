import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {


constructor() {}

  nuevo : Personaje = {
    nombre:'Gloria Estefan',
    poder:10
  }


// Agregar(evento:SubmitEvent) {
// evento.preventDefault();
// }


}
