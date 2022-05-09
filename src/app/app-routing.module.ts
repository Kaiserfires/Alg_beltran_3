import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdivinarNumeroComponent } from './componenetes/adivinar-numero/adivinar-numero.component';
import { EstadisticasComponent } from './componenetes/estadisticas/estadisticas.component';
import { BienvenidaComponent } from './vista/bienvenida/bienvenida.component';
import { LoginComponent } from './vista/login/login.component';
import { RegistrarComponent } from './vista/registrar/registrar.component';

const routes: Routes = [
  {path:'',component: BienvenidaComponent},
  {path:'login',component:LoginComponent},
  {path:'registrar',component:RegistrarComponent},
  {path:'estadisticas',component:EstadisticasComponent},
  {path:'adivinarnumero',component:AdivinarNumeroComponent},
  {path:'**',component:BienvenidaComponent}, //esto sirve para volver a una pagina con los doble **
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
