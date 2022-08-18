import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  fileUrl:string='http://localhost:3000/api/files'
  constructor(private httpClient:HttpClient) { }

  addFile(file:any){
    return this.httpClient.post(`${this.fileUrl}`,file)
  }
  getAllFiles(){
    return this.httpClient.get<{files:any}>(`${this.fileUrl}/find/allFiles`)
  }
  getFileById(id:any){
    return this.httpClient.get<{file:any}>(`${this.fileUrl}/${id}`)
  }
  updateFile(file:any){
    return this.httpClient.put<{file:any}>(`${this.fileUrl}/${file._idFile}`,file)

  }
  deleteFile(id:any){
    return this.httpClient.delete(`${this.fileUrl}/${id}`)
  }
}