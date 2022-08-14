import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-session-table',
  templateUrl: './session-table.component.html',
  styleUrls: ['./session-table.component.scss']
})
export class SessionTableComponent implements OnInit {

  sessionsDataSource: MatTableDataSource<any>
  sessionsTableColumns: string[] = ['nameSession', 'duration', 'dateOfSession','action'];
  data:any=[{_id:'1',nameSession:'hello',duration:'hello',dateOfSession:'hello@hello'}]

  constructor(private router:Router,private sessionService:SessionService) { }

  ngOnInit(): void {
    this.sessionService.getAllSessions().subscribe(data=>{
      this.sessionsDataSource=data.sessions
      console.log(data);
      
    })
    }
  edit(id:any){
    this.router.navigate([`sessions/editSession/${id}`])

  }
  delete(id:any){
    this.sessionService.deleteSession(id).subscribe(data=>{
      console.log(data);
      this.sessionService.getAllSessions().subscribe(data=>{
        this.sessionsDataSource=data.sessions
        console.log(data);
        
      })
      
    })
  }

}
