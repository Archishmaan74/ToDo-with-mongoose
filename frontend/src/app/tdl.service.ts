import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TdlService {

  constructor(private httpclient: HttpClient){
    
   }
   getAlltasks(){
    return this.httpclient.get('http://localhost:3000/display')
   }

   getEditTask(sno: any){
    return this.httpclient.get('http://localhost:3000/displayone/'+sno)
   }

   addTask(task: any){
    return this.httpclient.post('http://localhost:3000/addtask',task)
   }

   editTask(task: any){
    return this.httpclient.post('http://localhost:3000/edittask',task)
   }

   deleteTask(task: any){
    return this.httpclient.post('http://localhost:3000/deletetask',task)
   }
}
