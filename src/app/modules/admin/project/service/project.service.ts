import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  projectUrl:string="http://localhost:3000/api/projects"
  constructor(private httpClient:HttpClient) { }

  addProject(project:any){
    return this.httpClient.post(`${this.projectUrl}`, project)
  }
  
  getAllProjects(){
    return this.httpClient.get<{projects:any}>(`${this.projectUrl}`)
  }
  getProjectById(id:any){
    return this.httpClient.get<{project:any}>(`${this.projectUrl}/${id}`)
  }
  updateProject(project:any){
    return this.httpClient.put<{project:any}>(`${this.projectUrl}/${project._id}`,project)

  }
  deleteProject(id:any){
    return this.httpClient.delete<{project:any}>(`${this.projectUrl}/${id}`)
  }

  findAllProjects(){
    return this.httpClient.get<{projects:any}>(`${this.projectUrl}/find/allProjects`)
  }




}
