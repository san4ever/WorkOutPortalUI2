import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {UrlproviderService} from './urlprovider.service'

@Injectable()
export class WorkoutactiveService {

  
  private workoutActiveUrl:string
  constructor(private http:HttpClient,private urlproviderService:UrlproviderService) {
     this.workoutActiveUrl = urlproviderService.getCompleteURL("workoutactive/");
   }
   
   getworkoutActive(){
      
       return this.http.get(this.workoutActiveUrl);
  }
  postworkoutActive(workoutActvie){
     return this.http.post(this.workoutActiveUrl,workoutActvie);
  }
  deleteworkoutActive(workoutActvie){
    return this.http.delete(this.workoutActiveUrl)
  }
  getworkoutActiveById(id){
    return this.http.get(this.workoutActiveUrl+id);
  }

  putworkoutActive(workoutActvie){
    return this.http.put(this.workoutActiveUrl,workoutActvie);

  }
  getCalReport(){
    return this.http.get(this.workoutActiveUrl+"cbm");
  }
}
