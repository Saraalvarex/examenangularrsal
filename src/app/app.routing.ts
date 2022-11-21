import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { DetallescubosComponent } from './components/detallescubos/detallescubos.component';

const appRoutes : Routes = [
    {path : "" , component : HomeComponent},
    {path : "marca/:marca" , component : DetallescubosComponent},
    {path : "login" , component : LoginComponent},
    {path : "registro" , component : RegistroComponent},
    {path : "perfil" , component : PerfilComponent},
    {path : "comentarios/:id" , component : ComentariosComponent},
    // {path : "detalles/:id" , component : DetalleempleadoComponent},
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
