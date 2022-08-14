import { Route } from "@angular/router";
import { AddRoomComponent } from "./add-room/add-room.component";
import { RoomsTableComponent } from "./rooms-table/rooms-table.component";



export const roomsRoutes:Route[]=[
    {path:"addRoom",component:AddRoomComponent},
    {path:"editRoom/:id",component:AddRoomComponent},
    {path:"roomsTable",component:RoomsTableComponent},

   
]