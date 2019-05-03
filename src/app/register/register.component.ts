import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

 
  admin = {name:'', address:'', email:'', phone:'', password:''};

  constructor(private router:Router, private adminService:AdminService) { }

  onSignUp(admin) {
    console.log(admin.name);
    console.log(admin.address);
    console.log(admin.email);
    console.log(admin.phone);
    console.log(admin.name);
    this.adminService.addRemoteAdmin(admin).subscribe(()=>{this.router.navigate(['/login']);});
  }


  goBack() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {}

}
