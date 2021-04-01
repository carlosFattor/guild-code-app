import { Injectable } from '@angular/core';
import { StorageService } from '@shared/storage/storage.service';
import { BehaviorSubject } from 'rxjs';
import { UserData } from 'src/app/domains/git-user/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  private _user = new BehaviorSubject<UserData | null>(null);
  readonly user$ = this._user.asObservable();

  constructor(private storage: StorageService) {}

  getUser(): UserData | null {
    return this._user.getValue();
  }

  setUser(user: UserData | null) {
    this._user.next(user);
  }

  init(): Promise<Boolean> {
    return new Promise<Boolean>((resolve) => {
      const temp = this.storage.localStorage<UserData>('userData', (data) => {
        return data;
      });
  
      if(temp) {
        this._user.next(temp);
      }
       resolve(true);
    });
  }
}
