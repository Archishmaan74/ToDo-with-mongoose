import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edittask/edittask.component';

const routes: Routes = [
  {
    path: '',component: TasksComponent
  },
  {
    path: 'tasks', component: TasksComponent
  },
  {
    path: 'SNO', component: EdittaskComponent
  },
  {
    path: 'addtask', component: AddtaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
