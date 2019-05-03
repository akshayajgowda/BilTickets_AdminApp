import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class MoviesService {
  
    //<--------------- Here we are calling express ----------->
    private movieUrl = 'http://localhost:3001/api/movies';
  
    constructor(private http: HttpClient) { }
    
  //<--------------- Here we are calling express ends ----------->
  
  getRemoteMovies():Observable<[]> {
    return this.http.get<[]>(this.movieUrl);  
  }

  addRemoteMovies(movie):Observable<any> {
    return this.http.post(this.movieUrl,movie);
  }

  deleteRemoteMovie(movieid):Observable<any> {
    return this.http.delete(this.movieUrl+'/'+movieid);

  }

  updateRemoteMovie(movie):Observable<any> {
    return this.http.put(this.movieUrl,movie);
  }

  getRemoteMovieById(id):Observable<any> {
    return this.http.get<[]>(this.movieUrl+"/"+id);
  }

}