import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeerListadoService {

  constructor(private httpClient: HttpClient) {}

  getPersonas(): Observable<any> {
      return this.httpClient.get('./../assets/listaAlumnos.json');
  }
}
