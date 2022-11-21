import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo';
import { CubosService } from 'src/app/services/cubos.service';
//RECOGER PARAMETROS!!!!!
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detallescubos',
  templateUrl: './detallescubos.component.html',
  styleUrls: ['./detallescubos.component.css']
})
export class DetallescubosComponent implements OnInit {
  public cubos!: Array<Cubo>;
  constructor(private _service: CubosService, private _activeRoutes: ActivatedRoute) { }
  
  ngOnInit(): void {
    this._activeRoutes.params.subscribe((params: Params)=>{
      if (params['marca']){
        var marca = params['marca'];
        this._service.getCubosMarca(marca).subscribe(res=>{
          this.cubos = res;
        })
      }
    })
  }

}
