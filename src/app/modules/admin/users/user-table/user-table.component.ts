import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  usersDataSource: MatTableDataSource<any>
  usersTableColumns: string[] = ['firstName', 'lastName', 'email', 'role','action'];
  data:any=[{firstName:'hello',lastName:'hello',email:'hello@hello',role:'user'}]

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data=>{
      console.log(data);
      this.usersDataSource=data.Users
      
    })
    
  }
  edit(id:any){
    this.router.navigate([`/users/edit/${id}`])

  }
  delete(id:any){
    this.userService.deleteUser(id).subscribe(data=>{
      console.log(data);
      this.userService.getAllUsers().subscribe(data=>{
        console.log(data);
        this.usersDataSource=data.Users
        
      })

      
    })
  }

}
