import { Route } from "@angular/router";
import { AddTestComponent } from "./add-test/add-test.component";
import { TestsTableComponent } from "./tests-table/tests-table.component";


export const testRoutes:Route[]=[
    { path:'addTest',component:AddTestComponent},
    { path:'editTest/:id',component:AddTestComponent},
    { path:'testsTable',component:TestsTableComponent}

]