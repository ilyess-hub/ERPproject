import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {

  constructor(private _httpClient:HttpClient) { }
  presenceUrl:string='http://localhost:3000/api/presences'

  getAllpresences(){
    return this._httpClient.get<{presences:any}>(this.presenceUrl)
  }
  findAllpresences(){
    return this._httpClient.get<{presences:any}>(`${this.presenceUrl}/find/allPresences`)
  }
  addpresence(presence:any){
    return this._httpClient.post(`${this.presenceUrl}`,presence)

  }
  getById(id:any){
    return this._httpClient.get<{presence:any}>(`${this.presenceUrl}/${id}`)
  }
  editpresence(presence:any){
    return this._httpClient.put(`${this.presenceUrl}/${presence._id}`,presence)
  }
  deletepresence(id:any){
    return this._httpClient.delete(`${this.presenceUrl}/${id}`)
  }
}
