import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { FooterComponent } from './footer/footer/footer.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, SidenavComponent, ToolbarComponent, FooterComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
