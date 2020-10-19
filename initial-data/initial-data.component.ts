import { Component, OnInit } from '@angular/core';
import { WebappService } from 'src/app/services/webapp.service';

@Component({
  selector: 'app-initial-data',
  templateUrl: './initial-data.component.html',
  styleUrls: ['./initial-data.component.scss']
})
export class InitialDataComponent implements OnInit {
  allProgramList:any=[];
  constructor(private webappserviceObj:WebappService) { }
 
  ngOnInit(): void {
    this.GetAllSpaceXProgramList();
  }
  GetAllSpaceXProgramList(){
    this.webappserviceObj.GetAllSpaceXProgramList().subscribe(
      (data)=>{
        console.log("Initial Data: ", data);
        this.allProgramList=data;
      },
      (error)=>{
        console.log("Initial Data Failed: ", error);
      }
    )
  }
}
