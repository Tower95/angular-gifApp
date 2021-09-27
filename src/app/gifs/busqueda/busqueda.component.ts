import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  public busqueda: String = '';

  constructor() { }

  buscar(): void {
    console.log(this.busqueda);
  }

}
