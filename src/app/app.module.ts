import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { EventComponent } from './upcoming-events/event/event.component';
import { EventsService } from 'src/app/upcoming-events/events.service';
import { DialogElementsExampleDialog } from './upcoming-events/event/event.component';
import { EventsComponent } from './upcoming-events/events/events.component';
import { PageComponent } from './upcoming-events/events/page/page.component';
import { FilterComponent } from './upcoming-events/events/filter/filter.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    ToolbarComponent,
    UpcomingEventsComponent,
    EventComponent,
    DialogElementsExampleDialog,
    EventsComponent,
    PageComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
