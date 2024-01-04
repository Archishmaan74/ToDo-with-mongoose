import { Component } from '@angular/core';
import { TdlService } from '../tdl.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent {
  task: any
  constructor(private aRoute: ActivatedRoute, private tdlService: TdlService){
    aRoute.params.subscribe((data)=>{
      this.tdlService.getEditTask(data['SNO']).subscribe((data)=>{
        this.task = data
      },(err)=>{
        console.log("Cannot fetch one task for editing...");
      })
    })
  }

  editTask(task: any){
    this.tdlService.editTask(task).subscribe(task)
    alert("Task Edited successfully!")
  }
}
