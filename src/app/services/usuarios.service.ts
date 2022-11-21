import { NewUser } from './../models/newuser';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable()
export class UsuariosService {
    constructor(private _http : HttpClient) { }
    // OBTENCION DE TOKEN
    obtenerToken(user : Usuario) : Observable<any> {
        var json = JSON.stringify(user);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        var request = "/api/manage/login/";
        var url =  environment.url + request;
        return this._http.post(url, json, {headers : header});
    }
    setToken(token: string){
        localStorage.setItem("token", token)
    }

    //Para obtener el valor del token y hacer las peticiones ya iniciada la sesion
    getToken(): string | null {
        let token = localStorage.getItem("token");
        if(token != null){
        return token;
        }
        return null;
    }
    //Para guardarlo en el local
    setUser(user: string){
        localStorage.setItem("user", user);
    }
    insertUser(newuser: any): Observable<any> {
        //Convertimos nuestro objeto model a JSON
        var json = JSON.stringify(newuser);
        //debemos indicar el tipo de objeto a enviar en la petición
        //en el header
        var header = new HttpHeaders().set("Content-type", "application/json");
        header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
        var request = "api/manage/registrousuario/"
        var url = environment.url+request;
        return this._http.post(url, json, {headers: header});
    }
    getCompras() : Observable<any> {
        const headers: HttpHeaders = new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        const url = environment.url + '/api/compra/comprausuario/';
        return this._http.get(url, { headers: headers });
    }
    realizarCompra(id : string) : Observable<any> {
        const headers: HttpHeaders = new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        const url = environment.url + 'api/compra/insertarpedido/' + id;
        return this._http.post(url, { headers: headers });
    }
    getPerfil() : Observable<any> {
        const headers: HttpHeaders = new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        const url = environment.url + '/api/manage/perfilusuario/';
        return this._http.get(url, { headers: headers });
    }
    // getEmpleadosId(id : string) : Observable<any> {
    //     const headers: HttpHeaders = new HttpHeaders({
    //         'Authorization': 'Bearer ' + localStorage.getItem('token')
    //     });
    //     const url = environment.url + '/api/empleados/' + id;
    //     return this._http.get(url, { headers: headers });
    // }
}