import { Component } from '@angular/core';
import { OAuthService, AuthConfig, JwksValidationHandler, OAuthEvent } from 'angular-oauth2-oidc';
import { WebappService } from './services/webapp.service';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spacex.ui';
  yearList:any=[];

  previousUrl: string;
constructor(router: Router) {
  
}
    ngOnInit(): void {
      this.yearList=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
        
    }
}
