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
}
