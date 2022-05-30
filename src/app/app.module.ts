import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './vista/login/login.component';
import { BienvenidaComponent } from './vista/bienvenida/bienvenida.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarComponent } from './vista/registrar/registrar.component';
import { EstadisticasComponent } from './componenetes/estadisticas/estadisticas.component';
import { AdivinarNumeroComponent } from './componenetes/adivinar-numero/adivinar-numero.component';
import { ListadoComponent } from './vista/listado/listado.component';
import { BanderaComponent } from './vista/bandera/bandera.component';
import { AhorcadoCompComponent } from './componenetes/ahorcado-comp/ahorcado-comp.component';
import { DibujaAhorcadoComponent } from './dibuja-ahorcado/dibuja-ahorcado.component';
import { LoadingComponent } from './loading/loading.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    RegistrarComponent,
    EstadisticasComponent,
    AdivinarNumeroComponent,
    ListadoComponent,
    BanderaComponent,
    AhorcadoCompComponent,
    DibujaAhorcadoComponent,
    LoadingComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
