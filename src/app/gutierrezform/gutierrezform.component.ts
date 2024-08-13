import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { GutierrezfirstComponent } from '../gutierrezfirst/gutierrezfirst.component';
import { GutierrezloginComponent } from '../gutierrezlogin/gutierrezlogin.component';

@Component({
  selector: 'app-gutierrezform',
  templateUrl: './gutierrezform.component.html',
  styleUrls: ['./gutierrezform.component.css']
})
export class GutierrezformComponent implements OnInit {

  registrosNuevos: any[] = [];
  //private _snackBar: any;
  exito: boolean = false;
  

  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogConsultar() {
    this.dialog.open(GutierrezloginComponent)
  }

  usuarioNuevo = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    //edad: new FormControl('', Validators.required),

  })

  @Output() registrosAgregados = new EventEmitter<any[]>();
  onSubmit() {
    if (this.usuarioNuevo.valid) {
      const nuevoRegistro = {
        cedula: this.usuarioNuevo.value.cedula,
        nombres: this.usuarioNuevo.value.nombres,
        apellidos: this.usuarioNuevo.value.apellidos,
        password: this.usuarioNuevo.value.password,
        //edad: this.usuarioNuevo.value.edad,
      };
  
      this.registrosNuevos.push(nuevoRegistro);
      console.log(this.registrosNuevos); 
  
      this.usuarioNuevo.reset();
      this.exito = true;
    }

    setTimeout(() => {
      this.exito = false;
    }, 1000);
  }




  }
  


