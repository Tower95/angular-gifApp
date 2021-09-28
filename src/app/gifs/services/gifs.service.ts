import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { SearchGIFResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  private api_key: string = environment.GIPHY_API_KEY;

  public resultodos: Gif[] = [];

  constructor(
    private http: HttpClient
  ) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultodos = JSON.parse(localStorage.getItem('resultados')!) || [];

    // if (localStorage.getItem('historial')) {

    //   console.log(this._historial);
    // }
    // this._historial = []
  }

  get historial(): string[] {

    return [...this._historial];

  }

  async buscarGif(query: string): Promise<any> {

    this.http.get<SearchGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.api_key}&q=${query}&limit=25&offset=0&rating=G&lang=en`)
      .subscribe((response) => {

        this.resultodos = response.data;

        localStorage.setItem('resultados', JSON.stringify(this.resultodos));
        
      });

    if (this.historial.includes(query.trim().toLowerCase())) {
      return;
    }

    this._historial.unshift(query.trim().toLowerCase());

    this._historial = this._historial.slice(0, 10);

    localStorage.setItem('historial', JSON.stringify(this._historial));
   

  }

}
