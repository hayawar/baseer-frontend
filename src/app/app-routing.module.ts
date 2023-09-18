import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { DetectionComponent } from './detection/detection.component';
import { LangingPageComponent } from './langing-page/langing-page.component';
import { LiveStreamComponent } from './live-stream/live-stream.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ParentWrapperComponent } from './parent-wrapper/parent-wrapper.component';
import { ReportsComponent } from './reports/reports.component';
import { SingleReportComponent } from './reports/single-report/single-report.component';
import { SettingsComponent } from './settings/settings.component';
import { StatsComponent } from './stats/stats.component';
import { DevelopersComponent } from './developers/developers.component';
const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload', 
  scrollPositionRestoration: 'enabled'
  // ...any other options you'd like to use
};

const routes: Routes = [
    
  { path: '', redirectTo:'/baseer',pathMatch:'full' },
  { path: 'main', redirectTo:'/main/reports',pathMatch:'full' },
  { path: 'baseer', component: LangingPageComponent },
  { path: 'main',component:ParentWrapperComponent,children:[
    { path: 'reports', component: ReportsComponent },
    { path: 'reports/:id', component: SingleReportComponent },
    { path: 'detection', component: DetectionComponent },
    { path: 'stats', component: StatsComponent },
    { path: 'stream', component: LiveStreamComponent },
    { path: 'developers', component: DevelopersComponent },
  ]},
 
  

  //Add routeGurad to that later
  { path: 'login', component: LoginPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
