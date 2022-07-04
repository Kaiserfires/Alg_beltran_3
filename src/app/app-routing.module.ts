import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdivinarNumeroComponent } from './componenetes/adivinar-numero/adivinar-numero.component';
import { EstadisticasComponent } from './componenetes/estadisticas/estadisticas.component';
import { BienvenidaComponent } from './vista/bienvenida/bienvenida.component';
import { LoginComponent } from './vista/login/login.component';
import { RegistrarComponent } from './vista/registrar/registrar.component';
import { ListadoComponent } from './vista/listado/listado.component';
import { AccesoGuard } from './seguridad/acceso.guard';
import { AhorcadoCompComponent } from './componenetes/ahorcado-comp/ahorcado-comp.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { BoardComponent } from './componenetes/board/board.component';
import { SquareComponent } from './square/square.component';
import { LogOutComponent } from './log-out/log-out.component';
import { GameButtonComponent } from './simon-game/game-button/game-button.component';
import { SimonGameComponent } from './simon-game/simon-game.component';
//import { DibujaAhorcadoComponent } from './dibuja-ahorcado/dibuja-ahorcado.component';

const routes: Routes = [
  {path:'',component: BienvenidaComponent},
  {path:'login',component:LoginComponent},
  {path:'registrar',component:RegistrarComponent},
  {path:'sobre-mi',component:SobreMiComponent},
  {path:'estadisticas',component:EstadisticasComponent,canActivate:[AccesoGuard]},
  {path:'adivinarnumero',component:AdivinarNumeroComponent,canActivate:[AccesoGuard]},
  {path:'listado',component:ListadoComponent,canActivate:[AccesoGuard]},
  {path:'Ahorcado',component:AhorcadoCompComponent,canActivate:[AccesoGuard]},
  {path:'tablero',component:BoardComponent,canActivate:[AccesoGuard]},
  {path:'cuadrados',component:SquareComponent,canActivate:[AccesoGuard]},
  {path:'LogOut',component:LogOutComponent},
  {path:'simon-button',component:GameButtonComponent},
  {path:'simon-game',component:SimonGameComponent},
  {path:'**',component:BienvenidaComponent}, //esto sirve para volver a una pagina con los doble **
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
