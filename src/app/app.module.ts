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
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { EventComponent } from './upcoming-events/event/event.component';
import { EventsService } from 'src/app/upcoming-events/events.service';
import { TokenInterceptor } from './interceptors/login.interceptor';
import { LoginGuard } from './guards/login.guard';
import { LogoutGuard } from './guards/logout.guard';
import { ProfileComponent } from './profile/profile/profile.component';
import { ProfileinfoComponent } from './profile/profileinfo/profileinfo.component';
import { UpcomingeventsComponent } from './profile/upcomingevents/upcomingevents.component';
import { PasteventsComponent } from './profile/pastevents/pastevents.component';
import { LayoutComponent } from './profile/upcomingevents/layout/layout.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { CreateEventComponent } from './profile/create-event/create-event.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PastEventsComponent } from './past-events/past-events.component';
import {
  PastEventComponent,
  DialogElementsExampleDialog,
} from './past-events/pastevent/pastevent.component';

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
    ProfileComponent,
    ProfileinfoComponent,
    UpcomingeventsComponent,
    PasteventsComponent,
    LayoutComponent,
    EditProfileComponent,
    CreateEventComponent,
    ErrorPageComponent,
    PastEventsComponent,
    PastEventComponent,
    DialogElementsExampleDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    EventsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    LoginGuard,
    LogoutGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
