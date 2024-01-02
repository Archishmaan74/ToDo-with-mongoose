import { Component } from '@angular/core';
import { TdlService } from '../tdl.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: any=[]
  constructor(private tdlservice: TdlService){
    this.tdlservice.getAlltasks().subscribe((data)=>{
      this.tasks = data
    },(err)=>{
      console.log("Cannot get tasks...");
    })
  }
}
