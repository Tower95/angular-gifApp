import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  public busqueda: String = '';

  constructor(private _gifService: GifsService) { }

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>

  buscar(): void {

    let value: string = this.txtBuscar.nativeElement.value;

    if(value.trim().length === 0) {
      
     return;

    } 
    this._gifService.buscarGif(value);
    
    this.txtBuscar.nativeElement.value = '';
  }

}
