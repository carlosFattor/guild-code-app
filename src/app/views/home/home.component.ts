import { Component, OnInit } from '@angular/core';
import { UserStateService } from '@shared/state/user-state.service';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/domains/git-user/user-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData$: Observable<UserData | null> | null = null;

  constructor(
    private userState: UserStateService
  ) { }

  ngOnInit(): void {
    this.userData$ = this.userState.user$;
  }

}
