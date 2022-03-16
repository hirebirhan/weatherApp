import { MatToolbarModule } from '@angular/material/toolbar';
import { AppService } from './../app.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  ],
  exports:[],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
