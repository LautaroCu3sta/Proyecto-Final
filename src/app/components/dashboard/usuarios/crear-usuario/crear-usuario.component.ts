import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  genero: any[] = ['Masculino', 'Femenino']
  form: FormGroup;


  constructor(private fb: FormBuilder,
              private _usuarioService: UsuarioService,
              private router: Router,
              private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      genero: ['',Validators.required],
    })
  }

  ngOnInit(): void{
  }

  agregarUsuario(){

    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      genero: this.form.value.genero,
    }
    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios'])

    this._snackBar.open('Usuario agregado con exito!','',{
      duration: 1500,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

}
