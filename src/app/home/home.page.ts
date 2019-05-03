import { Component } from '@angular/core';
import  MoviesService  from '../movies.service';
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  movies= [];
 

  constructor(private movieService:MoviesService, private router:Router, public alert: AlertController){}
  
  ngOnInit() {this.movieService.getRemoteMovies().subscribe((result)=>this.movies=result);}
  
  slideChanged(slides) {
    slides.startAutoplay();
  }

  onDelete(id) {
    console.log(id);
    this.movieService.deleteRemoteMovie(id).subscribe(()=>{this.presentAlert()});
   
}

async presentAlert() {
  const alert = await this.alert.create({

    header: 'Deleted Successfully',
    
    buttons: [{
      text: 'OK',
      handler: (data)=> {
        window.location.reload();

      }
    }]
  
});
await alert.present();
}

  

  onEdit(movie) {
    this.router.navigate(['/edit/'+movie.id]);
  }
  
  goBack() {
    this.router.navigate(['/home']);
  }
  // onBook(movie) {
  //     this.router.navigate(['/details/'+ movie.id]);
  // }

}
