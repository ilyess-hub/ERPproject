import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient:HttpClient) { }
  userUrl:string='http://localhost:3000/api/users'

  getAllUsers(){
    return this._httpClient.get<{Users:any}>(this.userUrl)
  }
  signUp(user:any){
    return this._httpClient.post(`${this.userUrl}/signup`,user)

  }
  getById(id:any){
    return this._httpClient.get<{user:any}>(`${this.userUrl}/${id}`)
  }
  editUser(user:any){
    return this._httpClient.put(`${this.userUrl}/${user._id}`,user)
  }
  deleteUser(id:any){
    return this._httpClient.delete(`${this.userUrl}/${id}`)
  }
}
