import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

interface ClienteInterface {
  cedula: string;
  nombres: string;
  apellidos: string;
  password: string;
}

@Component({
  selector: 'app-gutierrezlogin',
  templateUrl: './gutierrezlogin.component.html',
  styleUrls: ['./gutierrezlogin.component.css']
})
export class GutierrezloginComponent implements OnInit {
  
  dataSource!: MatTableDataSource<ClienteInterface>;
  displayedColumns: string[] = ['cedula', 'nombres', 'apellidos', 'password', 'acciones'];

  data: ClienteInterface[] = [
    {
      cedula: '0151245245',
      nombres: 'Andrés Luis',
      apellidos: 'Carvajal Lozano',
      password: 'QuitoEcuador'
    },
    {
      cedula: '0954658913',
      nombres: 'Jorge Luis',
      apellidos: 'Charco Aguirre',
      password: 'GuayaquilEcuador'
    },
    {
      cedula: '0957962158',
      nombres: 'Andrea Lisbeth',
      apellidos: 'Romero Haro',
      password: 'GuayaquilEcuador'
    }
  ];

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<GutierrezloginComponent>,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<ClienteInterface>(this.data);
  }

  deleteRow(element: ClienteInterface) {
    const index = this.data.findIndex(usuario => usuario === element);
    if (index !== -1) {
      this.data.splice(index, 1);
      this.dataSource.data = this.data;
    }
  }

  cancelar() {
    this.dialogRef.close();
    this.router.navigate(['/login']);
  }
  
}
