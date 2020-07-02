import { Alumno } from './../clases/alumno';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-inscripcion',
  templateUrl: './formulario-inscripcion.component.html',
  styleUrls: ['./formulario-inscripcion.component.css']
})
export class FormularioInscripcionComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  param: any;
  alumnoForm: FormGroup;

  ngOnInit(): void {
    debugger;
    this.param = this.route.snapshot.params;
    this.iniciarFormulario(this.param);
  }

  iniciarFormulario(alumno: Alumno){
    this.alumnoForm = this.fb.group({
      nombre: [alumno ? alumno.nombre : '', Validators.required ],
      apellido: [alumno ? alumno.apellido : '' ],
      edad: [alumno ? alumno.edad : '' ],
      materia: [alumno ? alumno.materia : '' ],
      anioCursada: [alumno ? alumno.anioCursada : '' ]
    });
  }

  onEnviarAlumno(){
    let alumnoTemp: Alumno = this.alumnoForm.value;
    this.router.navigate(['app-tabla-inscriptos', alumnoTemp])
    debugger;
  };

}
