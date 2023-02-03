import { Component } from '@angular/core';
import { TipoIdentificacionService } from '../services/tipo-identificacion.service';
import { GuardarEstudiantesComponent } from './guardar-estudiantes/guardar-estudiantes.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-gestionar-estudiantes',
  templateUrl: './gestionar-estudiantes.component.html',
  styleUrls: ['./gestionar-estudiantes.component.css']
})
export class GestionarEstudiantesComponent {
[x: string]: any;

  constructor(
    private servicioTipoIdentificacion: TipoIdentificacionService,
    public dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.servicioTipoIdentificacion.listarTodos().subscribe(res => {
      console.log(res);
    }, error => {
      console.log("ha ocurrido un error al listar los tipos de identificacion")
    });
  }

  public modalNuevoEstudiante(id:number) {
    let dialogRef = this.dialog.open(GuardarEstudiantesComponent, {
      height: '700px',
      width: '800px',
    });
  }
}
