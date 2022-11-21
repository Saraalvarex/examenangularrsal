import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { NewUser } from 'src/app/models/newuser';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  @ViewChild('cajanombre') cajaNom!: ElementRef;
  @ViewChild('cajamail') cajaMail!: ElementRef;
  @ViewChild('cajapass') cajaPass!: ElementRef;
  constructor(private _service: UsuariosService, private _router: Router) { }
  
  crearUsuario(): void{
    var nombre = this.cajaNom.nativeElement.value;
    var mail = this.cajaMail.nativeElement.value;
    var pass = this.cajaPass.nativeElement.value;

    var newuser = new NewUser(0, nombre, mail, pass);
    console.log(newuser)
    this._service.insertUser(newuser).subscribe(res=>{
      this._router.navigate(['/'])
    })
  }

  ngOnInit(): void {
  }

}
