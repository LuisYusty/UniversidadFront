import { TipoIdentificacion } from "./tipo-identificacion";
import { TipoSangre } from "./tipo-sangre";

export class Estudiante {

    public id!:number;
    public nombre!:string;
    public apellido!:string;
    public fechaNacimiento!:Date;
    public TipoIdentificacion!:TipoIdentificacion;
    public TipoSangre!:TipoSangre;
}
