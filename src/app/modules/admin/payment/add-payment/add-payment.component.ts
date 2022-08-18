import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TraineeshipsService } from '../../traineeships/services/traineeships.service';
import { UserService } from '../../users/service/user.service';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {
payment:any={}
addPayment:FormGroup
students:any=[]
traineeships:any=[]
id:any
title:string='Add Payment'
  constructor(private formBuilder:FormBuilder, 
    private userService:UserService,private traineeshipService:TraineeshipsService,private paymentService:PaymentService,
    private activatedRoue:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.addPayment=this.formBuilder.group({
      paymentName:[''],
      amount:[''],
      typeOfPayment:[''],
      _idStudent:[''],
      _idTraineeship:[''],
    })
    this.userService.getAllUsers().subscribe(data=>{
      this.students=data.Users.filter(e=>{
        return e.role==='student'
      })      
    })
    
    this.traineeshipService.getAllTraineeships().subscribe(data=>{
      this.traineeships=data.Traineeships
    })
    this.id=this.activatedRoue.snapshot.paramMap.get('id')
    if(this.id){
      this.paymentService.getPaymentById(this.id).subscribe(data=>{
        console.log(data);
        this.payment=data.payment
        
      })
      this.title='Edit Payment'
    }
  }
  add(){
    if(this.id){
      this.paymentService.updatePayment(this.payment).subscribe(data=>{
        console.log(data);
        this.router.navigate(['payments/payments'])
        
      })
      
    }
    else{
      console.log(this.payment);
      this.paymentService.addPayment(this.payment).subscribe(data=>{
        console.log(data);
        this.router.navigate(['payments/payments'])
        
      })
    }
    
  }

}
