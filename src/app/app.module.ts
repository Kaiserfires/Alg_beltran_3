import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './vista/login/login.component';
import { BienvenidaComponent } from './vista/bienvenida/bienvenida.component';
import { FormsModule } from '@angular/forms';
import { RegistrarComponent } from './vista/registrar/registrar.component';
import { EstadisticasComponent } from './componenetes/estadisticas/estadisticas.component';
import { AdivinarNumeroComponent } from './componenetes/adivinar-numero/adivinar-numero.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    RegistrarComponent,
    EstadisticasComponent,
    AdivinarNumeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
