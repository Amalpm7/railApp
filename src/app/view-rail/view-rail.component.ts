import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-rail',
  templateUrl: './view-rail.component.html',
  styleUrls: ['./view-rail.component.css']
})
export class ViewRailComponent implements OnInit {

  constructor() { }
  status:boolean=false
  name="Amal"
  readData=()=>{
    this.name="Gamer",
    this.status=true
  }

  ngOnInit(): void {
  }

}
