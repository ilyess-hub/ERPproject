import { Route } from "@angular/router";
import { AddPresenceComponent } from "./add-presence/add-presence.component";
import { PresenceTableComponent } from "./presence-table/presence-table.component";

export const presenceRoutes:Route[]=[
    {path:'addPresence', component:AddPresenceComponent},
    {path:'edit/:id', component:AddPresenceComponent},
    {path:'presences', component:PresenceTableComponent},
]