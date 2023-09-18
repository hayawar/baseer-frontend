import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { DetectionComponent } from './detection/detection.component';
import { LangingPageComponent } from './langing-page/langing-page.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SettingsComponent } from './settings/settings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LiveStreamComponent } from './live-stream/live-stream.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleReportComponent } from './reports/single-report/single-report.component';
import {ChartModule} from 'primeng/chart';
import { PollutionParameterComponent } from './pollution-parameter/pollution-parameter.component';
import { LivefeedComponent } from './live-stream/livefeed/livefeed.component';
import { ParentWrapperComponent } from './parent-wrapper/parent-wrapper.component';
import { FormsModule } from '@angular/forms';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevelopersComponent } from './developers/developers.component';
@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    DetectionComponent,
    LangingPageComponent,
    ReportsComponent,
    LoginPageComponent,
    SettingsComponent,
    NavbarComponent,
    LiveStreamComponent,
    SingleReportComponent,
    PollutionParameterComponent,
    LivefeedComponent,
    ParentWrapperComponent,
    DevelopersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    HttpClientModule,
    ChartModule,
    FormsModule,
    NgxNavbarModule,
    BrowserModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
