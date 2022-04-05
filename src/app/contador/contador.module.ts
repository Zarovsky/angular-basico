import { NgModule } from "@angular/core";
import { contadorComponent } from "./contador.component";

@NgModule({
  declarations: [
    contadorComponent
  ],
  exports: [
    contadorComponent
  ]
// no metemos el CommonModule por no usar directivas estructurales.

})

export class ContadorModule{}
