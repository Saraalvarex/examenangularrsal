import { ActivatedRoute} from '@angular/router';
import { CubosService } from 'src/app/services/cubos.service';
import { Cubo } from './../../models/cubo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cubos!: Array<Cubo>;
  constructor(private _service: CubosService, private _activeRoutes: ActivatedRoute) { }
  // comprar(){
  //   this._service.realizarCompra(id).subscribe(res=>{

  //   }
  // }
  ngOnInit(): void {
        this._service.getCubos().subscribe(res=>{
          this.cubos = res;
        })
  }

}
