import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { LoginComponent } from './login/login.component';
import { ColorComponent } from './color/color.component';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
