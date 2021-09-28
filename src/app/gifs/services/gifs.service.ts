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

  public reultodos: Gif[] = [];

  constructor(
    private http: HttpClient
  ) { }

  get historial(): string[] {

    return [...this._historial];

  }

  async buscarGif(query: string): Promise<any> {


    if (this.historial.includes(query.trim().toLowerCase())) {
      return;
    }

    this.http.get<SearchGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.api_key}&q=${query}&limit=25&offset=0&rating=G&lang=en`)
      .subscribe((response) => {

        console.log(response.data);

        this.reultodos = response.data;

      })

    this._historial.unshift(query.trim().toLowerCase());

    this._historial = this._historial.slice(0, 10);

  }

}
