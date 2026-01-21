import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../components/registro/usuario';

@Injectable({
  providedIn: 'root',
})
export class usuarioService {


   private API_USUARIO = "http://localhost:8080/usuario"

   constructor(private http: HttpClient){}

   //leer todos los ususairos
    leerUsuario(): Observable<Usuario[]>{
      return this.http.get<Usuario[]>(this.API_USUARIO)
    }

    //guardar usuario
    guardarUsuario(usuario: Usuario): Observable<Usuario>{
      return this.http.post<Usuario>(`${this.API_USUARIO}/guardar` , usuario);
    }

    //Eliminar usuario
    eliminarUsuario(id: string): Observable<void>{
      return this.http.delete<void>(`${this.API_USUARIO}/eliminar/${id}`);
    }

    //editar Usuario
    editarUsuario(id:string, usuario:Usuario):Observable<Usuario>{
      return this.http.put<Usuario>(`${this.API_USUARIO}/editarUsuario/${id}`, usuario);
    }



  /* Buscar cliente por ID
  buscarClienteById(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.API_CLIENTE}/${id}`);
  }
*/

  
}
