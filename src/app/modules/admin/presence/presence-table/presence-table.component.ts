import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PresenceService } from '../service/presence.service';

@Component({
  selector: 'app-presence-table',
  templateUrl: './presence-table.component.html',
  styleUrls: ['./presence-table.component.scss']
})
export class PresenceTableComponent implements OnInit {
  presencesDataSource: MatTableDataSource<any>
  presencesTableColumns: string[] = ['state','session name', 'student name','action'];
  data:any=[{_id:'1',sessions:[],students:[],presence:'hello@hello'}]

  constructor(private presenceService:PresenceService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.presenceService.findAllpresences().subscribe(data=>{
      console.log(data.presences);
      
      this.presencesDataSource=data.presences
      
    })
  }
  edit(id:any){
    this.router.navigate([`presences/edit/${id}`])

  }
  delete(id:any){
    this.presenceService.deletepresence(id).subscribe(data=>{
      this.presenceService.findAllpresences().subscribe(data=>{        
        this.presencesDataSource=data.presences
        
      })

    })
  }

}
