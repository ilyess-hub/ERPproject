import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})
export class AddSessionComponent implements OnInit {
  addForm:FormGroup
  session:any={}
  id:any
  title:string='Add Session'

  constructor(private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute,private sessionService:SessionService,private router:Router) { }

  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      nameSession:[''],
      duration:[''],
      dateOfSession:['']
    })
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    if(this.id){
      this.title='Edit Session'
      this.sessionService.getById(this.id).subscribe(data=>{
        this.session=data.session
        console.log(data);
      })
    }
  }
  add(){
    if(this.id)
    {
      this.sessionService.editSession(this.session).subscribe(data=>{
        console.log(data);
        this.router.navigate([`sessions/sessionsTable`])        
        
      })
    }
else{
  console.log(this.session);
  this.sessionService.addSession(this.session).subscribe(data=>{
    console.log(data);
    this.router.navigate([`sessions/sessionsTable`])

    
  })
  
}
    
  }

}
