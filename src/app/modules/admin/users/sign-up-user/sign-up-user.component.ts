import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sign-up-user',
  templateUrl: './sign-up-user.component.html',
  styleUrls: ['./sign-up-user.component.scss']
})

export class SignUpUserComponent implements OnInit {
  signUpForm:FormGroup
  title:string='Sign Up'
  id:any;

  constructor(private _formBuilder:FormBuilder,private userService:UserService,private router:Router ) { }

  ngOnInit(): void {
    this.signUpForm = this._formBuilder.group({
      firstName      : ['', Validators.required],
      lastName      : ['', Validators.required],
      email     : ['', [Validators.required, Validators.email]],
      password  : ['', Validators.required],
      phoneNumber  : ['', Validators.required],
      ID_Card   : [''],
      role   : [''],
      address   : [''],
      taxRegistrationNumber   : [''],
      patent   : [''],
      activityArea   : [''],
      }
);


  }
  signUp(): void
  {
    console.log(this.signUpForm.value);
    this.userService.signUp(this.signUpForm.value).subscribe(data=>{
      console.log(data);
      this.router.navigate(['users/users'])
      
    })
    
  }

}
