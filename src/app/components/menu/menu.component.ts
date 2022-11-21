// import { Cubo } from './../../models/cubo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CubosService } from 'src/app/services/cubos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public marcas!: Array<any>
  constructor(private _service: CubosService, private _router: Router) { }

  ngOnInit(): void {

      this._service.getCubosMarcas().subscribe(res=> {
        this.marcas = res;
      })
    
  }

}
