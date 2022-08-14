import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TraineeshipsService } from '../../traineeships/services/traineeships.service';
import { UserService } from '../../users/service/user.service';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.scss']
})
export class AddTestComponent implements OnInit {



  testForm:FormGroup
  students:any=[]
  traineeships:any=[]
  test:any={};
  id:any
  disabled :boolean=false
title:string="add Test"
  constructor(private formBuilder :FormBuilder ,private activatedRoute:ActivatedRoute ,private userService:UserService , private traineeshipService : TraineeshipsService, private testService:TestService ,private router:Router) { }
  ngOnInit(): void {

this.testForm=this.formBuilder.group({
  grade:[''] ,
  duration: [''],
  typeOfTest:[''],
  _idTraineeship:   [''],
  _idStudent:['']

})

this.userService.getAllUsers().subscribe((data)=>{
this.students=data.Users.filter(e=>{
  return e.role==="student"
})
console.log(this.students);
})

this.traineeshipService.getAllTraineeships().subscribe((data)=>{
  this.traineeships=data.Traineeships
  console.log(this.traineeships);
  
})
this.id=this.activatedRoute.snapshot.paramMap.get('id')
if (this.id) {
  this.title="edit Test"
  this.testService.getTestById(this.id).subscribe((data)=>{
    this.test=data.test
  this.disabled=true
  })
  
}


}

addOrEditTest(){
//  this.testService.addTest(this.test).subscribe((data)=>{console.log(data);})
//  this.router.navigate([`tests/testsTable`])

if(this.id){
  this.testService.editTest(this.test).subscribe(data=>{
    console.log(data);
    this.router.navigate(['tests/testsTable'])
    
  })
  
}
else{
  console.log(this.test);
  this.testService.addTest(this.test).subscribe(data=>{
    console.log(data);
    this.router.navigate(['tests/testsTable'])
    
  })
}

}




  }

