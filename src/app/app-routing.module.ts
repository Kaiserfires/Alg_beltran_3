import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdivinarNumeroComponent } from './componenetes/adivinar-numero/adivinar-numero.component';
import { EstadisticasComponent } from './componenetes/estadisticas/estadisticas.component';
import { BienvenidaComponent } from './vista/bienvenida/bienvenida.component';
import { LoginComponent } from './vista/login/login.component';
import { RegistrarComponent } from './vista/registrar/registrar.component';
import { ListadoComponent } from './vista/listado/listado.component';
import { AccesoGuard } from './seguridad/acceso.guard';
//import { AhorcadoComponent } from './componenetes/ahorcado/ahorcado.component';

const routes: Routes = [
  {path:'',component: BienvenidaComponent},
  {path:'login',component:LoginComponent},
  {path:'registrar',component:RegistrarComponent},
  {path:'estadisticas',component:EstadisticasComponent,canActivate:[AccesoGuard]},
  {path:'adivinarnumero',component:AdivinarNumeroComponent,canActivate:[AccesoGuard]},
  {path:'listado',component:ListadoComponent,canActivate:[AccesoGuard]},
  //{path:'Ahorcado',component:AhorcadoComponent},
  {path:'**',component:BienvenidaComponent}, //esto sirve para volver a una pagina con los doble **
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
