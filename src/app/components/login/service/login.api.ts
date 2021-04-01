import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubUser } from 'src/app/domains/git-user/github-user';

@Injectable({
  providedIn: 'root'
})
export class LoginApi {

  constructor(
    private http: HttpClient
  ) { }

  fetchUserData(code: string): Observable<GithubUser> {
    return this.http.get<GithubUser>('/users/github', {params: {code}});
  }
}
