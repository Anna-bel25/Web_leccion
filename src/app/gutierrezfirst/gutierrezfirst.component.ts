import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


interface ClienteInterface{
  cedula: string;
  nombres: string;
  apellidos: string;
  password: string;
  //edad: number;
}

@Component({
  selector: 'app-gutierrezfirst',
  templateUrl: './gutierrezfirst.component.html',
  styleUrls: ['./gutierrezfirst.component.css']
})
export class GutierrezfirstComponent implements OnInit{

  dataSource: any = [];
  displayedColumns: string[] = ['cedula','nombres', 'apellidos','password', 'acciones'] //'edad',
  
  data = [{
        cedula: '0151245245',      
        nombres: 'Andrés Luis',
        apellidos: 'Carvajal Lozano',
        password: 'QuitoEcuador',
        //edad: 50
      },
      {
        cedula: '0954658913',      
        nombres: 'Jorge Luis',
        apellidos: 'Charco Aguirre',
        password: 'GuayaquilEcuador',
        //edad: 36
      },
      {
        cedula: '0957962158',      
        nombres: 'Andrea Lisbeth',
        apellidos: 'Romero Haro',
        password: 'GuayaquilEcuador',
        //edad: 45
      }
    ];
  
    nuevoCliente: any;
    nav: any;
    sort: any;
    paginator: any;
    clientes: any;

  

  constructor( private dialog:MatDialog) { 
  }
  

  
  deleteRow(element: any) {
    const index = this.data.findIndex(usuario => usuario === element);
    if (index !== -1) {
      this.data.splice(index, 1);
      this.dataSource.data = this.data;
    }
  }
  
  
  ngOnInit(): void {

  }


}
