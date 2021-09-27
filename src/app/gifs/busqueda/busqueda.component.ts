import { Component, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>

  buscar(): void {

    console.log(this.txtBuscar.nativeElement.value);
  
    this.txtBuscar.nativeElement.value = '';
  }

}
