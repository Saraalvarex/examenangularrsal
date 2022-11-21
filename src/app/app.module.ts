import { UsuariosService } from './services/usuarios.service';
import { CubosService } from 'src/app/services/cubos.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingProviders, routing } from './app.routing';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { DetallescubosComponent } from './components/detallescubos/detallescubos.component';
import { LoginComponent } from './components/login/login.component';
import { RealizarcompraComponent } from './components/realizarcompra/realizarcompra.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DetallescubosComponent,
    LoginComponent,
    RealizarcompraComponent,
    RegistroComponent,
    PerfilComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpClientModule ,
    routing
  ],
  providers: [appRoutingProviders, CubosService, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
