import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usuarioService } from '../../service/usuario';


@Component({
  selector: 'app-registro',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

  //Crear una variable con FormGroup usar !:
  usuarioForm!: FormGroup;

  //Crear un cosntrucot con FormBuilder, el servicio y Router
  constructor(
    private fb: FormBuilder,
    private usuarioService: usuarioService,
    private router: Router
  ) { }

  //Llmar ngOnInit
  ngOnInit(): void {

    //Llamr al registro usuario y fb del contructor
    this.usuarioForm = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      edad: [0, [Validators.required, Validators.min(1), Validators.max(200)]]
    });

  }
  //crear Funcion para revisar qu se cumplan las condiciones

  agregarUsuario() {

    if (this.usuarioForm.invalid) {
      this.usuarioForm.markAllAsTouched();
      return;
    }



    //Crear una variable para llamara al registro con value
    const formularioValue = this.usuarioForm.value;

    //Crear una arreglo donde se capturan los valores y poner todos los valores solicitados
    const guardarUsuario = {
      id: 0,
      nombre: formularioValue.nombre,
      email: formularioValue.email,
      password: formularioValue.password,
      edad: formularioValue.edad,
      rol: formularioValue.rol ,
      date: new Date()
    };

    this.usuarioService.guardarUsuario(guardarUsuario).subscribe({
      next: () => {
        alert("Usuario agregador");
        this.router.navigate(['/login'])
      },
      error: (err) => {
        console.error("error al guardar usuario", err)
        alert("error al registrar producto")
      }

    })



  };




}



