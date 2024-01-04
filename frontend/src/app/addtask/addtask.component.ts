import { Component } from '@angular/core';
import { TdlService } from '../tdl.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
  task: any={}
  constructor(private tdlService: TdlService){

  }

  addTask(task: any){
    this.tdlService.addTask(task).subscribe(task)
  }
}
