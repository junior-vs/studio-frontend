import { NgModule } from '@angular/core';


import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from "./shared/header/header.component";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule, // Import BrowserAnimationsModule if not already imported
    MatToolbarModule,
    FooterComponent,
    HeaderComponent
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
