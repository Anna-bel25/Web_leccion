import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';



@Component({
  selector: 'app-gutierrezcreateuser',
  templateUrl: './gutierrezcreateuser.component.html',
  styleUrls: ['./gutierrezcreateuser.component.css']
})


export class GutierrezcreateuserComponent implements OnInit {
  

  registrosNuevos: any[] = [];
  private _snackBar: any;
  constructor(private router: Router, private dialogRef: MatDialogRef<GutierrezcreateuserComponent>) { }
  

  ngOnInit(): void {
  }


  /*usuarioNuevo = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    //edad: new FormControl('', Validators.required),

  })

  @Output() registrosAgregados = new EventEmitter<any[]>();
  onSubmit()
  {
    if (this.usuarioNuevo.valid) {
      const nuevoRegistro = {
        cedula: this.usuarioNuevo.value.cedula,
        nombres: this.usuarioNuevo.value.nombres,
        apellidos: this.usuarioNuevo.value.apellidos,
        password: this.usuarioNuevo.value.password,
        //edad: this.usuarioNuevo.value.edad,
      };

      this.registrosAgregados.emit([nuevoRegistro]);
      this.usuarioNuevo.reset();
      this.dialogRef.close();
    }

  }


  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }*/

}