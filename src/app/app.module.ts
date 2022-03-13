import { MatToolbarModule } from '@angular/material/toolbar';
import { AppService } from './../app.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { Eroor404Component } from './components/eroor404/eroor404.component';
import { LocasionComponent } from './locasion/locasion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    Eroor404Component,
    LocasionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
  ],
  exports:[],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
