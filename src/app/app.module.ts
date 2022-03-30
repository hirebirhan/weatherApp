import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './../app.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Eroor404Component } from './components/eroor404/eroor404.component';

@NgModule({
  declarations: [
    AppComponent,
    Eroor404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule
  ],
  exports: [],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
