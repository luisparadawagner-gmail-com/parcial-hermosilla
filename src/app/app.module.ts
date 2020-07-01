import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioInscripcionComponent } from './formulario-inscripcion/formulario-inscripcion.component';
import { TablaInscriptosComponent } from './tabla-inscriptos/tabla-inscriptos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioInscripcionComponent,
    TablaInscriptosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
