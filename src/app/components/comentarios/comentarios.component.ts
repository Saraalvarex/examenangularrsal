import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  constructor(private _service: CubosService, private _activeRoutes: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
