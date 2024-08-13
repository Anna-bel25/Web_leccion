import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-gutierrezloginfirst',
  templateUrl: './gutierrezloginfirst.component.html',
  styleUrls: ['./gutierrezloginfirst.component.css']
})
export class GutierrezloginfirstComponent implements OnInit {
  loggedIn: boolean = false;

  hide = true;

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

  password = new FormControl('', [Validators.required]);
  usuario = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.usuario.hasError('required')) {
      return 'Debe introducir su usuario';
    }

    return this.usuario.hasError('email') ? 'Usuario no válido' : '';
  }

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'Debe introducir su contraseña';
    }

    return this.password.hasError('password') ? 'Contraseña no válida' : '';
  }

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  alert: boolean = false;

  usuarioLogin = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (
      this.usuarioLogin.value.usuario == 'gutierrez' &&
      this.usuarioLogin.value.password == '123'
    ) {
      this.authService.setUsername(this.usuarioLogin.value.usuario);
      this.authService.setLoggedIn(true);
      this.router.navigate(['/form']);
    } else {
      this.alert = true;
      setTimeout(() => (this.alert = false), 4000);
    }
  }

  ngOnInit() {}
}
