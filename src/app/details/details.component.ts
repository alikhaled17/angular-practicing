import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/task';
import { TaskService } from './../services/task.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private _TaskService:TaskService, private _ActiveRoute:ActivatedRoute) { }

  task:Task = new Task();
  taskID:any=0;

  ngOnInit(): void {
    this._ActiveRoute.paramMap.subscribe(params=>{
      let i = params.get('id');
      this.taskID = i
      this._TaskService.getDeatails(parseInt(this.taskID)).subscribe((response)=>{
        let data:any = response;
        this.task = data.Data;
      })
    });

  }

}
