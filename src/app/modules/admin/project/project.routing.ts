import { Route } from "@angular/router";
import { AddProjectComponent } from "./add-project/add-project.component";
import { ProjectsTableComponent } from "./projects-table/projects-table.component";

export const projectRoutes:Route[]=[
    {path:'addProject' ,component:AddProjectComponent },
    {path:'projectsTable' ,component:ProjectsTableComponent },
    {path:'editProject/:id' ,component:AddProjectComponent}

]