import { Route } from "@angular/router";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { SignUpUserComponent } from "./sign-up-user/sign-up-user.component";
import { UserTableComponent } from "./user-table/user-table.component";



export const userRoutes:Route[]=[
    {path:'signUp' , component:SignUpUserComponent },
    {path:'edit/:id' , component:EditUserComponent },
    {path:'users' , component:UserTableComponent },
]