import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchYearViewComponent } from './components/launch-year-view/launch-year-view.component';
import { InitialDataComponent } from './components/initial-data/initial-data.component';
import { LaunchStatusViewComponent } from './components/launch-status-view/launch-status-view.component';
import { LandStatusViewComponent } from './components/land-status-view/land-status-view.component';


const routes: Routes = [
  {path:'home', component : InitialDataComponent},
   {path:'launch-year/:year', component : LaunchYearViewComponent},
   {path:'launch-status/:status', component : LaunchStatusViewComponent},
   {path:'land-status/:status', component : LandStatusViewComponent},
   {path:'', component : InitialDataComponent},
   {path:'*', component : InitialDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
