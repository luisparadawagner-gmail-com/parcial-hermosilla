import { FormularioInscripcionComponent } from './formulario-inscripcion/formulario-inscripcion.component';
import { TablaInscriptosComponent } from './tabla-inscriptos/tabla-inscriptos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'app-tabla-inscriptos', component: TablaInscriptosComponent},
  {path: 'app-formulario-inscripcion', component: FormularioInscripcionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
