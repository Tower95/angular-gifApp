import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

import { SearchGIFResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

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

    const params: HttpParams = new HttpParams()
      .set('api_key', environment.GIPHY_API_KEY)
      .set('q', query)
      .set('limit', '10')
      .set('rating', 'g')
      .set('lang', 'es');

    this.http.get<SearchGIFResponse>(`${environment.GIPHY_API_URL}/search?`,{params})
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
