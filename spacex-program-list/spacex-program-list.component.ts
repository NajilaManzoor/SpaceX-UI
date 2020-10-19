import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spacex-program-list',
  templateUrl: './spacex-program-list.component.html',
  styleUrls: ['./spacex-program-list.component.scss']
})
export class SpacexProgramListComponent implements OnInit {
  @Input('program-list') programList: any;

  constructor() { }

  ngOnInit(): void {
  }

}
       