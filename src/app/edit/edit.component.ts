import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import  MoviesService  from '../movies.service'; 

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  constructor(private moviesService: MoviesService, private router:Router, private route:ActivatedRoute) { }
movie:any;
id:any;
private sub:any;


  ngOnInit() {
    this.movie={name:'',year:'',image_url:'',production_house:'',rating:'',type:'',language:'',date:''};
    this.sub = this.route.params.subscribe( params => {
      this.id = +params['id']; // (+) converts string 'id' to a number 
      this.moviesService.getRemoteMovieById(this.id).subscribe((movie)=>{this.movie =movie;});
    });
  }

  onEditMovie() {
    console.log(this.movie);
    this.moviesService.updateRemoteMovie(this.movie).subscribe(()=>{
      this.router.navigate(['/home']);
    });
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
