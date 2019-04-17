// angular plugin start
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FileSelectDirective } from 'ng2-file-upload';
// ng plugin end

// import { NgbdModalFocus, NgbdModalConfirm} from '../../src/app/components/dependency/dependency.component'

// component start
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import {NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HierarchyComponent } from './components/hierarchy/hierarchy.component';
import { UsertypesComponent } from './components/usertypes/usertypes.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { GlobalheatmapComponent } from './components/globalheatmap/globalheatmap.component';
import { DependencyComponent } from './components/dependency/dependency.component';
import { MonumentsComponent } from './components/monuments/monuments.component';
import { CreatemonomentComponent} from './components/createmonoment/createmonoment.component';
// component end

// service start
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { NavbarserviceService } from './services/navbarservice.service';
import { DependencyService } from './services/dependency.service';
import {MonumentService } from './services/monument.service';
// service end

// Auth guard start
import { AuthGuard } from './guards/auth.guard';

// Auth guard end


const appRoutes: Routes = [
  // {path:'', component: HomeComponent},
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'hierarchy', component: HierarchyComponent, canActivate: [AuthGuard] },
  { path: 'dependency', component: DependencyComponent, canActivate: [AuthGuard] },
  { path: 'monuments', component: MonumentsComponent, canActivate: [AuthGuard] },
  { path: 'createmonoment', component: CreatemonomentComponent, canActivate: [AuthGuard] },
  { path: 'usertypes', component: UsertypesComponent, canActivate: [AuthGuard] },
  { path: 'advertisement', component: AdvertisementComponent, canActivate: [AuthGuard] },
  { path: 'globalheatmap', component: GlobalheatmapComponent, canActivate: [AuthGuard] }

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    HierarchyComponent,
    UsertypesComponent,
    AdvertisementComponent,
    GlobalheatmapComponent,
    DependencyComponent,
    MonumentsComponent,
    CreatemonomentComponent,
    // FileSelectDirective
    // NgbdModalFocus,
    // NgbdModalConfirm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    NgbModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, NavbarserviceService, DependencyService, MonumentService],
  bootstrap: [AppComponent],
  // entryComponents: [NgbdModalConfirm]
})
export class AppModule { }
