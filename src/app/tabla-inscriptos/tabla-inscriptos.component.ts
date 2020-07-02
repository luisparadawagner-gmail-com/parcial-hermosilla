import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Alumno } from '../clases/alumno';
import { LeerListadoService } from '../servicios/leer-listado.service';

@Component({
  selector: 'app-tabla-inscriptos',
  templateUrl: './tabla-inscriptos.component.html',
  styleUrls: ['./tabla-inscriptos.component.css']
})
export class TablaInscriptosComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'materia', 'anioCursada', 'accion'];
  dataSource: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private leerListadoService: LeerListadoService) { }

  param: any;
  
  ngOnInit(): void {
    this.getAlumnos();
    debugger;
  }

  getAlumnos() {
    debugger;
    this.leerListadoService.getPersonas().subscribe((alumnos) => {
      debugger;
      this.dataSource = alumnos;

    this.param = this.route.snapshot.params;
    if (Object.keys(this.param).length) {
			this.recibirAlumno(this.param);
		}

    });
  }

  recibirAlumno(alumno: Alumno) {
      debugger;
      this.dataSource.push(alumno);
    };

  onModificar(elemento) {
    debugger;

    let alumnoTemp: Alumno = {
      nombre: elemento.nombre,
      apellido: elemento.apellido,
      edad: elemento.edad,
      materia: elemento.materia,
      anioCursada: elemento.anioCursada
    }

    this.router.navigate(['app-formulario-inscripcion', alumnoTemp])
    debugger;
    
	}

}
