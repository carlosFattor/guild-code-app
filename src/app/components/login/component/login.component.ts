import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirectGitHub(): void {
    window.location.href = 'http://localhost:8080/users/github/login/redirect'    
  }

}
