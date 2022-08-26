import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from '../../payment/service/payment.service';
import { UserService } from '../../users/service/user.service';
import { FileService } from '../file.service';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.scss']
})
export class AddFileComponent implements OnInit {
fileForm:FormGroup
students:any=[]
payments:any=[]
file:any={}
  constructor(private fileService:FileService,private router:Router, private formBuilder:FormBuilder, private userService:UserService,private paymentService:PaymentService) { }

  ngOnInit(): void {

    this.fileForm=this.formBuilder.group({
     _idStudent:[''],
     _idPayment:['']
    })

this.userService.getAllUsers().subscribe((data)=>{
  this.students=data.Users.filter((result:any)=>{
 return result.role==="student"
  })
})

this.paymentService.getAllPayments().subscribe((data)=>{
this.payments=data.payments
})
  }


addFile(){
  console.log(this.file);
  
this.fileService.addFile(this.file).subscribe((data)=>{
  console.log(data);
this.router.navigate([`files/filesTable`])
  
})

  }
}
