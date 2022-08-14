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
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { FuseAlertModule } from "@fuse/components/alert";
import { SharedModule } from "app/shared/shared.module";
import { NgApexchartsModule } from "ng-apexcharts";
import { AddTestComponent } from "./add-test/add-test.component";
import { testRoutes } from "./test.routing";
import { TestsTableComponent } from "./tests-table/tests-table.component";

@NgModule({
    declarations: [
     TestsTableComponent,
     AddTestComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(testRoutes),
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
     MatRadioModule,
     MatSelectModule,
    ]
  })
  export class TestModule { }