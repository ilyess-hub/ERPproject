import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-rooms-table',
  templateUrl: './rooms-table.component.html',
  styleUrls: ['./rooms-table.component.scss']
})
export class RoomsTableComponent implements OnInit {

  roomsDataSource:MatTableDataSource<any>
  roomsTableColumns: string[] = ['_id', 'numberOfPlaces', 'availablity','action'];
  constructor(private roomService:RoomsService,private router:Router) { }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe(data=>{
      console.log(data);
      this.roomsDataSource=data.rooms
      
    })
    
  }

  edit(id:any){
    this.router.navigate([`/rooms/editRoom/${id}`])

  }

  delete(id :Number){
    this.roomService.deleteRoom(id).subscribe((data) => {
      console.log('data that will be deleted', data.room)
    this.roomService.getAllRooms().subscribe((data) => {
      this.roomsDataSource = data.rooms
    })
      });

  }

}
