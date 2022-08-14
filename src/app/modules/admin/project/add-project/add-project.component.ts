import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../users/service/user.service';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  projectForm : FormGroup
  project :any={}
  trainees:any=[]
  professors:any=[]
id:any
title:string='Add Project'

  constructor(private formBuilder:FormBuilder, 
    private projectService:ProjectService,private userService:UserService,
    private activatedRoue:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    this.projectForm=this.formBuilder.group({
      nameProject: [''],
      description: [''],
      duration: [''],
      _idTrainee: [''],
      traineeship:[''] ,
      _idProfessor:['']
    })

    this.userService.getAllUsers().subscribe((data)=>{
      this.trainees=data.Users.filter((e:any)=>{
        return e.role==='student'
      })    
      this.professors=data.Users.filter((e:any)=>{
        return e.role==='professor'

      })
    })

    // using the id of the active path in the browser
    this.id=this.activatedRoue.snapshot.paramMap.get('id')
    if(this.id){
      this.projectService.getProjectById(this.id).subscribe((data)=>{
        this.project=data.project
      })

      this.title='Edit Project'
    }
  }

  addOrEditProject(){


    if(this.id){
      this.projectService.updateProject(this.project).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['projects/projectsTable'])
      })
      
    }
    else{

      this.projectService.addProject(this.project).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['projects/projectsTable'])
      })
    }
    

    

  }

}
