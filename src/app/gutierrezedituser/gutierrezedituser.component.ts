import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';



interface ClienteInterface{
  cedula: string;
  nombres: string;
  apellidos: string;
  password: string;
  //edad: number;
}



@Component({
  selector: 'app-gutierrezedituser',
  templateUrl: './gutierrezedituser.component.html',
  styleUrls: ['./gutierrezedituser.component.css']
})
export class GutierrezedituserComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<GutierrezedituserComponent>, @Inject(MAT_DIALOG_DATA) public cliente: ClienteInterface) { }


  ngOnInit(): void {
    this.usuarioNuevo.setValue({
      cedula: this.cliente.cedula,
      nombres: this.cliente.nombres,
      apellidos: this.cliente.apellidos,
      password: this.cliente.password,
    });
  }

  usuarioNuevo = new FormGroup({
    cedula: new FormControl('', Validators.required),
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    const clienteEditado: ClienteInterface = {
      cedula: this.usuarioNuevo.value.cedula as string,
      nombres: this.usuarioNuevo.value.nombres as string,
      apellidos: this.usuarioNuevo.value.apellidos as string,
      password: this.usuarioNuevo.value.password as string,
    };

    this.dialogRef.close(clienteEditado);
    //this.redirectTo('/first');
  }

  redirectTo(uri: string, objToSend: NavigationExtras) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri], { state: { datosCliente: objToSend } })
    );
  }
  

  cancelar() {
    this.dialogRef.close();
  }

}