import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { EnfermedadEstudiante } from '../model/enfermedad-estudiante';

@Injectable({
  providedIn: 'root'
})
export class EnfermedadEstudianteService {
  private path: string = environment.urlApi + '/enfermedad-estudiante'; // concatenamos el servicio o api

  constructor(

    private http: HttpClient
  ) { }


  public listarTodos() {
    return this.http.get<EnfermedadEstudiante[]>(this.path);
  }

  public registrar(entidad:EnfermedadEstudiante) { // ya se pide un objeto cramos una entidad
  return this.http.post<void>(this.path,entidad); // enviamos esa entidad en el segundo parametro
  }
}
