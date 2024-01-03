import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AddtaskComponent } from './addtask/addtask.component';

const routes: Routes = [
  {
    path: '',component: TasksComponent
  },
  {
    path: 'tasks', component: TasksComponent
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
