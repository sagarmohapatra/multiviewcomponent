import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { GalleryModule } from './gallery/gallery.module';

@NgModule({
  declarations: [ 
    AppComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    GalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
