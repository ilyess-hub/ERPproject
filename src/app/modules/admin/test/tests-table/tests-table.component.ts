import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-tests-table',
  templateUrl: './tests-table.component.html',
  styleUrls: ['./tests-table.component.scss']
})
export class TestsTableComponent implements OnInit {



  testsDataSource:MatTableDataSource<any>
  testsTableColumns: string[] = ['firstName', 'lastName', 'nameOfTraineeship','grade','typeOfTest',"action"];
  constructor(private testService:TestService, private router : Router) { }

  ngOnInit(): void {

    this.testService.findAllTests().subscribe((data)=>{
      console.log(data);
      this.testsDataSource=data.tests
    })
  }


  edit(id : Number){
this.router.navigate([`tests/editTest/${id}`])

  }

  delete(id:any){
    this.testService.deleteTest(id).subscribe(data=>{
      console.log(data);
      
      this.testService.findAllTests().subscribe(data=>{        
        this.testsDataSource=data.tests
      console.log(data);


      })
      
    })
  }

}
