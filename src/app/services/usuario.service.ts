import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API: string='https://institutequasar.com/apiBlogLC/';
  
  listUsuarios: Usuario[] = [
    {usuario: "lautarocuesta@gmail.com", nombre: 'Lautaro', apellido: 'Cuesta', genero: 'Masculino'},
    {usuario: "cristobalgorosito@gmail.com", nombre: 'Cristobal', apellido: 'Gorosito', genero: 'Masculino'},
    {usuario: "abigailshiarkey@gmail.com", nombre: 'Lucia', apellido: 'Cuesta', genero: 'Femenino'},
  
  ];
  
  constructor(private conexionservicio: HttpClient) { }

  getUsuario(id:any): Observable<any> {
    return this.conexionservicio.get(this.API+"?consultar="+id);
  }

  agregarUsuario(usuario:Usuario):Observable<any>{
    return this.conexionservicio.post(this.API+"?insertar=",usuario);
  }

  editarEmpleado(id:any,usuario:any):Observable<any>{
    return this.conexionservicio.post(this.API+"?actualizar="+id,usuario);
  }

  eliminarUsuario(id:any):Observable<any>{
    return this.conexionservicio.delete(this.API+"?borrar="+id);
  }

  consultarUsuario(){
    return this.conexionservicio.get(this.API);
  }

}