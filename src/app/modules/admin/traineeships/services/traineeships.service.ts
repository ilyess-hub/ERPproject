import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraineeshipsService {

  traineeshipUrl: string = 'http://localhost:3000/api/traineeships';// port du backend
  constructor(private httpClient: HttpClient){}

  addTraineeship(traineeship: any) {
    return this.httpClient.post(this.traineeshipUrl,traineeship );
  }

getAllTraineeships()  {
  return this.httpClient.get<{Traineeships:any}>(this.traineeshipUrl);
 }



 

 editTraineeship(traineeship: any) {
  return this.httpClient.put<{message : any}>(`${ this.traineeshipUrl }/${traineeship._id}`, traineeship);

}

getTraineeshipById(id: any) {

  return this.httpClient.get<{Traineeship: any}>(`${ this.traineeshipUrl }/${id}`)
}

deleteTraineeship(id: any) {
return this.httpClient.delete<{message : any}>(`${ this.traineeshipUrl }/${id}`)
}
}
