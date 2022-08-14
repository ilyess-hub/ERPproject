import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { boolean } from 'joi';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {

  title:any
  roomForm:FormGroup
  room:any={}
  id : any
  constructor(private formBuilder:FormBuilder, private roomService :RoomsService,private activatedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    if (this.id) {
      this.roomService.getRoomById(this.id).subscribe((data)=>{
        this.room=data.room
      })
      this.title="Edit Room"
      
    }

else{
  this.title='Add Room'
  this.roomForm=this.formBuilder.group({

    numberOfPlaces:[''],
    availablity:['']
    })

}



  }


  addEditRoom(){
    if (this.id) {
      this.roomService.editRoom(this.room).subscribe();
      this.router.navigate([ 'rooms/roomsTable' ]);
      
    }
    else {
      this.roomService.addRoom(this.room).subscribe();
      this.router.navigate([ 'rooms/roomsTable' ]);
      
    }
      

  }
}
