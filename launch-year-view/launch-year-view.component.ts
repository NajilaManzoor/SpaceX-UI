import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebappService } from 'src/app/services/webapp.service';

@Component({
  selector: 'app-launch-year-view',
  templateUrl: './launch-year-view.component.html',
  styleUrls: ['./launch-year-view.component.scss']
})
export class LaunchYearViewComponent implements OnInit {
  programListByYear:any=[];
  launchYear:any;

  constructor(private webappserviceObj:WebappService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.programListByYear=[];
      this.launchYear = params['year'];
      this.GetSpaceXProgramListByYear( this.launchYear); 
  });
  }
  GetSpaceXProgramListByYear(launchYear){
    this.webappserviceObj.GetSpaceXProgramListByYear(launchYear).subscribe(
      (data)=>{
        console.log("Filter By Launch Status Data: ", data);
        this.programListByYear=data;
      },
      (error)=>{
        console.log("Filter By Launch Status Data Failed: ", error);
      }
    )
  }
}
