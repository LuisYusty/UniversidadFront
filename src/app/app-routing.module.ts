import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarEnfermedadesComponent } from './gestionar-enfermedades/gestionar-enfermedades.component';
import { GestionarEstudiantesComponent } from './gestionar-estudiantes/gestionar-estudiantes.component';


//rutas cuando se escriba en la url
const routes: Routes = [
{path:'', component:GestionarEstudiantesComponent}, 
{path:'gestionar-estudiantes', component:GestionarEstudiantesComponent},
{path:'gestionar-enfermedades', component:GestionarEnfermedadesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
