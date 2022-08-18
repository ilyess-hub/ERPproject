import { Route } from '@angular/router';
import { AddFileComponent } from './add-file/add-file.component';
import { FilesTableComponent } from './files-table/files-table.component';


export const fileRoutes: Route[] = [

{path:'filesTable', component:FilesTableComponent},
{path:"addFile", component:AddFileComponent}

   
];
