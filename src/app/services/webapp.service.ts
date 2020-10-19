import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebappService {
  constructor(private http:HttpClient) {
   }
   public GetAllSpaceXProgramList():Observable<any>{
    return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100");
  }
  public GetSpaceXProgramListByYear(launchYear:any):Observable<any>{
    return this.http.get("https://api.spacexdata.com/v3/launches?limit=100&launch_year="+launchYear);
  }
  public GetSpaceXProgramListByLaunchStatus(launchStatus:any):Observable<any>{
    return this.http.get("https://api.spacexdata.com/v3/launches?limit=100&launch_success="+launchStatus);
  }
  public GetSpaceXProgramListByLandStatus(landStatus:any):Observable<any>{
    return this.http.get("https://api.spacexdata.com/v3/launches?limit=100&land_success="+landStatus);
  }
  
}
