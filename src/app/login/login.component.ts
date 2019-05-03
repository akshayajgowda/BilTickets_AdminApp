import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  admin ={ name:'', password:'', address:'', email:'', phone:''};
  admins= [];

  constructor(private router:Router, private adminService:AdminService, public actionSheetController: AlertController) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Send to mail',
      inputs: [{
        name: 'email',
        placeholder: 'Enter your email',
      }],
      buttons: [{
        text: 'Submit email',
        role: 'destructive'    
      },
      {
        text: 'Cancel',
        role: 'cancel',
       
      }]
    });
    await actionSheet.present();
  }


  ngOnInit() {this.adminService.getRemoteAdmins().subscribe((result)=>this.admins=result);};


  onLogin(admin) {
    console.log(admin.name);
    console.log(admin.password);
    for(var i=0;i<this.admins.length;i++){
    if((this.admins[i].name===admin.name) && (this.admins[i].password===admin.password)) {
      localStorage.setItem('admindata',JSON.stringify(this.admins[i]));
    this.router.navigate(['/home']);
      }
    }
  }
}
