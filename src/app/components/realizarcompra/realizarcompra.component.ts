import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cubo } from 'src/app/models/cubo';
import { CubosService } from 'src/app/services/cubos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-realizarcompra',
  templateUrl: './realizarcompra.component.html',
  styleUrls: ['./realizarcompra.component.css']
})
export class RealizarcompraComponent implements OnInit {
  public cubos!: Array<Cubo>;
  constructor(private _service: CubosService, private _router: Router) { }

  ngOnInit(): void {
    this._service.getCubos().subscribe(res=> {
      this.cubos = res;
    })
  }

}
