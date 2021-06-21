import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TextService } from '../services/text.service';
import { TaskService } from './../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[]=[];
  data:any;
  isLoaded:boolean = false;
  isDeleted:boolean = false;

  constructor(private _TaskService:TaskService ,private txtServices:TextService) { }
  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this._TaskService.get().subscribe(response=>{
      this.data = response;
      console.log(this.data);

      this.tasks = this.data.Data as Task[]
      this.isLoaded = true;
    }, error=>{});
  }

  addTask(title:string) {
    if(this.txtServices.isEmptyText(title))
      return true;

    let task = new Task();
    task.Title = title;
    task.ID = 0;
    this._TaskService.create(task).subscribe(res=>{
      this.data = res;
      task.ID = this.data.Data as number;
      this.tasks.push(task);
    }, error=>{})
    return true;
  }

  getPendingTasks() {
    return this.tasks.filter(x => !x.IsDone).length;
  }

  changeStatus(task:Task) {
    task.IsDone = !task.IsDone;
    this._TaskService.update(task).subscribe()
  }

  deleteTask(index:number) {
    let task = this.tasks[index]
    task.IsDeleted = true;
    this._TaskService.delete(task.ID).subscribe(res=>{
      this.tasks.splice(index, 1);
    })
  }

  //  deleteAll() {
  //   this.tasks.forEach(el=> {
  //     console.log(el.ID);
  //     this.deleteTask(el.ID);
  //   })
  // }
}
