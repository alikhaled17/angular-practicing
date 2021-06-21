import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

   constructor(private httpClient:HttpClient,private taskservice:TaskService) {
  }

  data:any;
  ngOnInit(): void {

    this.taskservice.get().subscribe(response=>{
      this.data = response;
      console.log(this.data);
    }, error=>{});

  }

  del(id:number) {
    this.taskservice.delete(id).subscribe(response=>{
      console.log('done');
      console.log(this.data);
    })
  }


}
