import { Component, OnInit } from '@angular/core';
import  MoviesService  from '../movies.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.scss'],
})
export class AddmovieComponent implements OnInit {

movie={name:'',year:'',image_url:'',production_house:'',rating:'',type:'',language:'',date:''};

  constructor(private movieService:MoviesService, private router:Router) { }

  ngOnInit() {}

  onAddMovie(movie){
    //console.log(this.movie.name);
    alert(movie)
    this.movieService.addRemoteMovies(this.movie).subscribe(()=>{this.router.navigate(['/home'])})
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
