import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private _httpClient:HttpClient) { }
  sessionUrl:string='http://localhost:3000/api/sessions'

  getAllSessions(){
    return this._httpClient.get<{sessions:any}>(this.sessionUrl)
  }
  addSession(session:any){
    return this._httpClient.post(`${this.sessionUrl}`,session)

  }
  getById(id:any){
    return this._httpClient.get<{session:any}>(`${this.sessionUrl}/${id}`)
  }
  editSession(session:any){
    return this._httpClient.put(`${this.sessionUrl}/${session._id}`,session)
  }
  deleteSession(id:any){
    return this._httpClient.delete(`${this.sessionUrl}/${id}`)
  }
  

}
