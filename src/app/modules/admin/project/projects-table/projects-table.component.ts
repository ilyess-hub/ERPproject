import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss']
})
export class ProjectsTableComponent implements OnInit {

  projectsDataSource:MatTableDataSource<any>
  projectsTableColumns: string[] = ['nameProject', 'description',"duration", 'Name',"FullName","action"];
  constructor(private projectService:ProjectService, private router: Router) { }

  ngOnInit(): void {


    this.projectService.findAllProjects().subscribe((data)=>{
      console.log(data);
      this.projectsDataSource=data.projects
    })
  }


  edit(id : Number){
    this.router.navigate([`projects/editProject/${id}`])
  }

  delete(id : number){
    this.projectService.deleteProject(id).subscribe(data=>{
      console.log(data);
      this.projectService.findAllProjects().subscribe(data=>{        
        this.projectsDataSource=data.projects
      console.log(data);


      })
      
    })



  }
}
