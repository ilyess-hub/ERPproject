import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { boolean } from 'joi';
import { SessionService } from '../../session/service/session.service';
import { UserService } from '../../users/service/user.service';
import { PresenceService } from '../service/presence.service';

@Component({
  selector: 'app-add-presence',
  templateUrl: './add-presence.component.html',
  styleUrls: ['./add-presence.component.scss']
})
export class AddPresenceComponent implements OnInit {
  addPresence:FormGroup
  presence:any={}
  title:string='Add presence'
  sessions:any=[{_id:'1',nameSession:'pipe'}]
  students:any=[{_id:'1',firstName:'ghaith',lastName:'khorchfi'}]
  id:any

  constructor(private formBuilder:FormBuilder,private userService:UserService,private sessionService:SessionService,
    private presenceService:PresenceService,
    private activatedRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.addPresence=this.formBuilder.group({
      presence:[''],
      _idSession:[''],
      _idStudent:['']

    })
    this.userService.getAllUsers().subscribe(data=>{
      this.students=data.Users.filter(e=>{
        return e.role==="student"
      })
    })
    this.sessionService.getAllSessions().subscribe(data=>{
      this.sessions=data.sessions
    })
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    if(this.id){
      this.title='Edit presence'
      this.presenceService.getById(this.id).subscribe(data=>{        
        this.presence=data.presence
      })
    }
  }
  add(){
    if(this.id){
      this.presenceService.editpresence(this.presence).subscribe(data=>{
        this.router.navigate(['presences/presences'])
      })
    }
    else{
      this.presenceService.addpresence(this.presence).subscribe(data=>{
        this.router.navigate(['presences/presences'])        
      })
    }
    
  }

}
