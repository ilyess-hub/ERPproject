import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { FuseAlertModule } from "@fuse/components/alert";
import { SharedModule } from "app/shared/shared.module";
import { NgApexchartsModule } from "ng-apexcharts";
import { AddRoomComponent } from "./add-room/add-room.component";
import { RoomsTableComponent } from "./rooms-table/rooms-table.component";
import { roomsRoutes } from "./rooms.routing";

@NgModule({
    declarations: [
     AddRoomComponent,
     RoomsTableComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(roomsRoutes),
      MatButtonModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatProgressSpinnerModule,
      FuseAlertModule,
      SharedModule,
      MatDividerModule,
      MatMenuModule,
      MatProgressBarModule,
      MatSortModule,
      MatTableModule,
      NgApexchartsModule,
     HttpClientModule,
     
    ]
  })
  export class roomsModule { }