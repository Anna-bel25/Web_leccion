import { Component, OnInit } from '@angular/core';
import { GutierrezloginComponent } from '../gutierrezlogin/gutierrezlogin.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-gutierrezheader',
  templateUrl: './gutierrezheader.component.html',
  styleUrls: ['./gutierrezheader.component.css']
})
export class GutierrezheaderComponent implements OnInit {
  nombreUsuario!: string;
  showFirstElement: boolean = true;
  showSecondElement: boolean = false;
  mostrarUsuario: boolean = false;

  loggedIn: boolean = false;

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {}

  getUsername(): string {
    return this.authService.getUsername();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }


  login() {
    const dialogRef = this.dialog.open(GutierrezloginComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loggedIn = true;
        this.router.navigate(['/first']);
      }
    });
  }

  logout() {
    this.loggedIn = false;
    this.authService.setLoggedIn(false);
    this.router.navigate(['/first']);
  }

  ngOnInit(): void {

  }
}