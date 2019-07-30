import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BaseService } from './shared/base.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NavbarComponent],
  bootstrap: [AppComponent],
  providers: [BaseService]
})
export class AppModule { }
