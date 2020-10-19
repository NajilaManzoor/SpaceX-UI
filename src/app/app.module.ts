import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebappService } from './services/webapp.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LaunchYearViewComponent } from './components/launch-year-view/launch-year-view.component';
import { SpacexProgramListComponent } from './components/spacex-program-list/spacex-program-list.component';
import { InitialDataComponent } from './components/initial-data/initial-data.component';
import { LaunchStatusViewComponent } from './components/launch-status-view/launch-status-view.component';
import { LandStatusViewComponent } from './components/land-status-view/land-status-view.component';
@NgModule({
  declarations: [
    AppComponent,
    LaunchYearViewComponent,
    SpacexProgramListComponent,
    InitialDataComponent,
    LaunchStatusViewComponent,
    LandStatusViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [WebappService],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
