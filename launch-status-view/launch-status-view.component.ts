import { Component, OnInit } from '@angular/core';
import { WebappService } from 'src/app/services/webapp.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-launch-status-view',
  templateUrl: './launch-status-view.component.html',
  styleUrls: ['./launch-status-view.component.scss']
})
export class LaunchStatusViewComponent implements OnInit {
  programListByLaunchStatus:any=[];
  launchStatus:any;

  constructor(private webappserviceObj:WebappService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.programListByLaunchStatus=[];
      this.launchStatus = params['status'];
      this.GetSpaceXProgramListByLaunchStatus( this.launchStatus); // reset and set based on new parameter this time
  });
  }
  GetSpaceXProgramListByLaunchStatus(launchStatus){
    this.webappserviceObj.GetSpaceXProgramListByLaunchStatus(launchStatus).subscribe(
      (data)=>{
        console.log("Filter By Launch Status Data: ", data);
        this.programListByLaunchStatus=data;
      },
      (error)=>{
        console.log("Filter By Launch Status Data Failed: ", error);
      }
    )
  }
 
}
