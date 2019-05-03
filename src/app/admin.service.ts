import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminUrl = 'http://localhost:3001/api/admin';

  constructor(private http: HttpClient) { }

getRemoteAdmins():Observable<[]> {
  return this.http.get<[]>(this.adminUrl);
}

addRemoteAdmin(admin):Observable<any> {
  return this.http.post(this.adminUrl,admin);
}

}
