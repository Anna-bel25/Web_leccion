import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GutierrezloginComponent } from './gutierrezlogin/gutierrezlogin.component';
import { GutierrezheaderComponent } from './gutierrezheader/gutierrezheader.component';
import { GutierrezfirstComponent } from './gutierrezfirst/gutierrezfirst.component';
import { GutierrezmaterialModule } from './gutierrezmaterial/gutierrezmaterial.module';
import { GutierrezcreateuserComponent } from './gutierrezcreateuser/gutierrezcreateuser.component';
import { GutierrezloginfirstComponent } from './gutierrezloginfirst/gutierrezloginfirst.component';
import { GutierrezedituserComponent } from './gutierrezedituser/gutierrezedituser.component';
import { GutierrezformComponent } from './gutierrezform/gutierrezform.component';

@NgModule({
  declarations: [
    AppComponent,
    GutierrezloginComponent,
    GutierrezheaderComponent,
    GutierrezfirstComponent,
    GutierrezcreateuserComponent,
    GutierrezloginfirstComponent,
    GutierrezedituserComponent,
    GutierrezformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    GutierrezmaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
