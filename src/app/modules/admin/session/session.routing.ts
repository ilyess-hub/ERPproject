import { Route} from "@angular/router";
import { AddSessionComponent } from "./add-session/add-session.component";
import { SessionTableComponent } from "./session-table/session-table.component";

export const sessionRoutes:Route[]=[
    { path:'addSession',component:AddSessionComponent},
    { path:'editSession/:id',component:AddSessionComponent},
    { path:'sessionsTable',component:SessionTableComponent}

]