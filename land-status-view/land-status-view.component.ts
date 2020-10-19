import { Component, OnInit } from '@angular/core';
import { WebappService } from 'src/app/services/webapp.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-land-status-view',
  templateUrl: './land-status-view.component.html',
  styleUrls: ['./land-status-view.component.scss']
})
export class LandStatusViewComponent implements OnInit {

  programListByLandStatus:any=[];
  landStatus:any;
  constructor(private webappserviceObj:WebappService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.programListByLandStatus=[];
      this.landStatus = params['status'];
      this.GetSpaceXProgramListByLandStatus( this.landStatus); // reset and set based on new parameter this time
  });
  }
  GetSpaceXProgramListByLandStatus(landStatus){
    this.webappserviceObj.GetSpaceXProgramListByLandStatus(landStatus).subscribe(
      (data)=>{
        console.log("Filter By Land Status Data: ", data);
        this.programListByLandStatus=data;
      },
      (error)=>{
        console.log("Filter By Land Status Data Failed: ", error);
      }
    )
  }
}
 