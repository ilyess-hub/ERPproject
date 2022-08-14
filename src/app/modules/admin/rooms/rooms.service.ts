
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  
 t 
  
    roomUrl: string = 'http://localhost:3000/api/rooms';// port du backend
    constructor(private httpClient: HttpClient){}
  
    addRoom(room: any) {
      return this.httpClient.post(this.roomUrl,room );
    }
  
  getAllRooms()  {
    return this.httpClient.get<{rooms:any}>(this.roomUrl);
   }
  
  
  
   
  
   editRoom(room: any) {
    return this.httpClient.put<{message : any}>(`${ this.roomUrl }/${room._id}`, room);
  
  }
  
  getRoomById(id: any) {
  
    return this.httpClient.get<{room: any}>(`${ this.roomUrl }/${id}`)
  }
  
  deleteRoom(id: any) {
  return this.httpClient.delete<{room : any}>(`${ this.roomUrl }/${id}`)
  }
  }
  

