import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';  // Impor RouterModule
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // Jika Anda menggunakan AppRoutingModule
    RouterModule, // Tambahkan ini untuk mengaktifkan router-outlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
