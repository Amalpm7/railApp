import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-train',
  templateUrl: './view-train.component.html',
  styleUrls: ['./view-train.component.css']
})
export class ViewTrainComponent implements OnInit {

  constructor(private myapi:ApiService) { this.putData() }
  putData=()=>{
    this.myapi.getData().subscribe(
      (data)=>{
        this.viewTrain=data
      }
    )
  }
  viewTrain:any=[]


  ngOnInit(): void {
  }

}
