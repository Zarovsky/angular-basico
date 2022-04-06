import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo : Personaje = {
    nombre:'Gloria Estefan',
    poder:10
  }

personajes: Personaje[] = [
  {
    nombre: 'Goku',
    poder: 15000
},
{
  nombre: 'Vegeta',
  poder: 9000
}
]

agregarNuevoPersonaje( elemento: Personaje) {
  this.personajes.push(elemento);
}

// Agregar(evento:SubmitEvent) {
// evento.preventDefault();
// }


}
