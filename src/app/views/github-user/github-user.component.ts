import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '@components/login/service/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorMsg } from 'src/app/domains/errors/error-msg';
import { UserStateService } from '@shared/state/user-state.service';
import { UserData } from 'src/app/domains/git-user/user-data';

@Component({
  selector: 'gc-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.scss']
})
export class GithubUserComponent implements OnInit, OnDestroy {

  private subScript = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private userState: UserStateService
  ) { }

  ngOnInit(): void {
    this.subScript = this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (!!code)
        this.subScript = this.loginService.saveGithubUserData(code)
          .subscribe(data => {
            this.loginService.storeUserData(data);
            this.userState.setUser(data.userData);

          }, (errorMsg: HttpErrorResponse) => {
            const error = errorMsg.error as ErrorMsg;
            this.loginService.deleteStoreUserData();
            this.userState.setUser(null);
          }, () => {
            this.router.navigate(['/']);
          });
    });
  }

  ngOnDestroy(): void {
    this.subScript.unsubscribe();
  }
}
