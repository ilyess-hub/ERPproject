import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  editForm:FormGroup;
  user:any={};
  id:any

  constructor(private _formBuilder:FormBuilder,private userService:UserService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.editForm = this._formBuilder.group({
      firstName      : [''],
      lastName      : [''],
      email     : [''],
      password  : [''],
      phoneNumber  : [''],
      ID_Card   : [''],
      role   : [''],
      address   : [''],
      taxRegistrationNumber   : [''],
      patent   : [''],
      activityArea   : [''],
      }
);
this.id=this.activatedRoute.snapshot.paramMap.get("id")
if(this.id){
  this.userService.getById(this.id).subscribe(data=>{
    this.user=data.user
    console.log(data);
    
  })
}

  }
  edit(){
    console.log(this.user);
    this.userService.editUser(this.user).subscribe(data=>{
      console.log(data);
      this.router.navigate(['users/users'])
      
    })
    
  }

}
