import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-train',
  templateUrl: './view-train.component.html',
  styleUrls: ['./view-train.component.css']
})
export class ViewTrainComponent implements OnInit {

  constructor() { }
  name="Amal"
  readValues=()=>{
    this.name="raju"
  }

  ngOnInit(): void {
  }

}
