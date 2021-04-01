import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap, take, switchMap } from 'rxjs/operators';
import { StorageService } from "@shared/storage/storage.service";
import { ErrorMsg } from "src/app/domains/errors/error-msg";
import { GithubUser } from "src/app/domains/git-user/github-user";
import { LoginApi } from "./login.api";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class LoginService {

  constructor(
    private loginApi: LoginApi,
    private storage: StorageService
  ) { }

  saveGithubUserData(code: string): Observable<GithubUser> {
    return this.loginApi.fetchUserData(code);
  }

  storeUserData(userData: GithubUser): void {
    this.storage.localStorage<GithubUser>(null, (store) => {
      if (!store) {
        store = {} as GithubUser;
      }
      store.tokenData = userData.tokenData;
      store.userData = userData.userData;
      return store;
    });
  }

  deleteStoreUserData(): void {
    this.storage.localStorage<GithubUser>(null, (store) => {
      store = null;
      return store;
    });
  }
}