import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { EventComponent } from './upcoming-events/event/event.component';
import { EventsService } from 'src/app/services/events.service';


@NgModule({
  declarations: [AppComponent, HeaderComponent, SidenavComponent, ToolbarComponent, UpcomingEventsComponent, EventComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [EventsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
