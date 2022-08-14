import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TraineeshipsService } from '../services/traineeships.service';

@Component({
  selector: 'app-traineeships-table',
  templateUrl: './traineeships-table.component.html',
  styleUrls: ['./traineeships-table.component.scss']
})
export class TraineeshipsTableComponent implements OnInit {


  traineeships: any=[]
  traineeshipsDataSource: MatTableDataSource<any> = new MatTableDataSource()
  traineeshipsTableColumns: string[] = ['_id', 'nameOfTraineeship','traineeship', 'price', 'startDate', 'finalDate', 'state', 'numberOfHours', 'actions'];

  constructor(private traineeshipsServie: TraineeshipsService,
    private router: Router) { }


    
  ngOnInit(): void {

    this.traineeshipsServie.getAllTraineeships().subscribe((data) => {
      this.traineeshipsDataSource = data.Traineeships
    })
  }



  Edit(id: Number) {
    this.router.navigate([`traineeships/editTraineeship/${id}`])
  }
  

  Delete(id: Number) {
    this.traineeshipsServie.deleteTraineeship(id).subscribe((data) => {
      console.log('data from be', data.message)
    this.traineeshipsServie.getAllTraineeships().subscribe((data) => {
      this.traineeshipsDataSource = data.Traineeships
    })
      });

  }



}
