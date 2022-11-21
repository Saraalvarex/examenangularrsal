import { Cubo } from './../models/cubo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class CubosService {
    constructor(private _http : HttpClient) { }
    getCubos(): Observable<any>{
        var request = "api/cubos/";
        var url = environment.url + request;
        return this._http.get(url);
      }
      getCubosMarcas(): Observable<any>{
        var request = "api/cubos/marcas";
        var url = environment.url + request;
        return this._http.get(url);
      }
      getCubosMarca(marca: string): Observable<any>{
        var request = "api/cubos/cubosmarca/"+marca;
        var url = environment.url + request;
        return this._http.get(url);
      }
}