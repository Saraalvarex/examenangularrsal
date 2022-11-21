import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public token! : string;

  @ViewChild("mail") mail! : ElementRef;
  @ViewChild("contrasenia") contrasenia! : ElementRef;

  constructor(private _service : UsuariosService, private _router : Router) { }

  cargarToken() : void {
    var mail = this.mail.nativeElement.value;
    var contraseña = this.contrasenia.nativeElement.value;
    var user = new Usuario(mail, contraseña);

    this._service.obtenerToken(user).subscribe( res => {
      this.token = res;
      console.log(this.token)
      localStorage.setItem('token', res.response);
      this._router.navigate(["/perfil"]);
    })
  }

  ngOnInit(): void {
  }

}
