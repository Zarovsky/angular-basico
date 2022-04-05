import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroComponent {
nombre: string = 'Ironman';
edad : number = 45;

get nombreCapital(): string {
  return `${ this.nombre} - ${ this.edad}`;
}

obtenerNombre(): string {
  return `${ this.nombre} - ${ this.edad}`;
  // es lo mismo que return this.nombre + ' - ' + this.edad.toString();
}

cambiarNombre():void {
  this.nombre = 'Hulk';
}
cambiarEdad(): void {
  this.edad = 60;
}

 }

