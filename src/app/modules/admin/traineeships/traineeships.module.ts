import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraineeshipsRoutingModule } from './traineeships-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TraineeshipsTableComponent } from './traineeships-table/traineeships-table.component';
import { AddTraineeshipsComponent } from './add-traineeships/add-traineeships.component';
import { RouterModule } from '@angular/router';
import { routes } from '../ui/material-components/material-components.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    TraineeshipsTableComponent,
    AddTraineeshipsComponent
  ],
  imports: [
    CommonModule,
    TraineeshipsRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSortModule,
    MatTableModule,
    NgApexchartsModule,
    SharedModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ]
})
export class TraineeshipsModule { }
