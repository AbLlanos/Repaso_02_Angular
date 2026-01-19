import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Usuario {


   private API_USUARIO = "http://localhost:8080/usuario"

   constructor(private http: HttpClient){}

    leerUsuario(): Observable<Usuario[]>{
      return this.http.get<Usuario[]>(this.API_USUARIO)
    }

    guardarUsuario(usuario: Usuario): Observable<Usuario>{
      return this.http.post<Usuario>(`${this.API_USUARIO}/guardar` , usuario);
    }


  // Leer todos los clientes
  leerClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API_CLIENTE);
  }

  // Guardar cliente
  guardarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.API_CLIENTE}/guardar`, cliente);
  }

  // Buscar cliente por ID
  buscarClienteById(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.API_CLIENTE}/${id}`);
  }

  // Eliminar cliente
  eliminarCliente(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_CLIENTE}/eliminar/${id}`);
  }

  // Editar cliente
  editarCliente(id: string, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.API_CLIENTE}/actualizar/${id}`, cliente);
  }

  
}
