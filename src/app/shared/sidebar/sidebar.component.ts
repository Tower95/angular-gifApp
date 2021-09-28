import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {

  constructor(private _historial: GifsService) { }

  get historial(): string[] {
    
    return this._historial.historial;
    
  } 

 
}
