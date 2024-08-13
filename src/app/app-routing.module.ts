import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GutierrezfirstComponent } from './gutierrezfirst/gutierrezfirst.component';
import { GutierrezloginComponent } from './gutierrezlogin/gutierrezlogin.component';
import { GutierrezloginfirstComponent } from './gutierrezloginfirst/gutierrezloginfirst.component';
import { GutierrezcreateuserComponent } from './gutierrezcreateuser/gutierrezcreateuser.component';
import { GutierrezformComponent } from './gutierrezform/gutierrezform.component';

const routes: Routes = [
    /*{ path: '', component: GutierrezfirstComponent },
    { path: 'first', component: GutierrezfirstComponent },
    { path: 'login', component: GutierrezloginComponent },*/

    { path: '', component: GutierrezloginfirstComponent },
    { path: 'login', component: GutierrezloginfirstComponent },
    { path: 'first', component: GutierrezloginComponent },
    { path: 'form', component: GutierrezformComponent  },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
