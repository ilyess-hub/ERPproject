import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FileService } from '../file.service';

@Component({
  selector: 'app-files-table',
  templateUrl: './files-table.component.html',
  styleUrls: ['./files-table.component.scss']
})
export class FilesTableComponent implements OnInit {


  filesDataSource: MatTableDataSource<any>
  filesTableColumns: string[] = ['firstName','lastName','traineeships',"totalPrice","details"];
  constructor(private fileService:FileService, private router:Router) { }

  ngOnInit(): void {

    this.fileService.getAllFiles().subscribe((data)=>{
      console.log(data);
      this.filesDataSource=data.files
    })
    

  }

  edit(id:any){
    this.router.navigate([`files/editFile/${id}`])
  }


  delete(id:any){
    this.fileService.deleteFile(id).subscribe(data=>{
      console.log(data);
      this.fileService.getAllFiles().subscribe(data=>{        
        this.filesDataSource=data.files
      })
      
    })
  }

}
