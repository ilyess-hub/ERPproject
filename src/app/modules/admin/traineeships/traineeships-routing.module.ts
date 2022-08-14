import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTraineeshipsComponent } from './add-traineeships/add-traineeships.component';
import { TraineeshipsTableComponent } from './traineeships-table/traineeships-table.component';

const routes: Routes = [
  {
    path: 'allTraineeships', component: TraineeshipsTableComponent
  },
  {
    path : 'addTraineeship', component: AddTraineeshipsComponent
  },
  {
    path : 'editTraineeship/:id', component: AddTraineeshipsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraineeshipsRoutingModule { }
