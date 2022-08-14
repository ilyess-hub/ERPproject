import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TraineeshipsService } from '../services/traineeships.service';

@Component({
  selector: 'app-add-traineeships',
  templateUrl: './add-traineeships.component.html',
  styleUrls: ['./add-traineeships.component.scss']
})
export class AddTraineeshipsComponent implements OnInit {
title:any 
  traineeshipForm : FormGroup
  traineeship : any={}
  id : any
  constructor(private formBuilder:FormBuilder, private traineeshipService :TraineeshipsService,private activatedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    if (this.id) {
      this.traineeshipService.getTraineeshipById(this.id).subscribe((data)=>{
        this.traineeship=data.Traineeship
      })
      this.title="Edit Traineeship"
      
    }

else{
  this.title='Add Traineeship'
  this.traineeshipForm=this.formBuilder.group({
    state: [''],
    numberOfHours: [''],
    startDate: [''],
    finalDate: [''],
    price: [''],
    nameOfTraineeship:[''],
    traineeship:[''],
    })

}



  }

  addEditTraineeship(){
    if (this.id) {
      this.traineeshipService.editTraineeship(this.traineeship).subscribe();
      this.router.navigate([ 'traineeships/allTraineeships' ]);
      
    }
    else {
      this.traineeshipService.addTraineeship(this.traineeship).subscribe();
      this.router.navigate([ 'traineeships/allTraineeships' ]);
      
    }
      

  }
}
