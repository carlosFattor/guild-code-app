import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeModule } from './views/home/home.module';
import { GithubUserComponent } from './views/github-user/github-user.component';
import { SecurityModule } from '@shared/security/security.module';
import { StorageModule } from '@shared/storage/storage.module';
import { UserStateModule } from '@shared/state/user-state.module';
import { UserStateService } from '@shared/state/user-state.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SecurityModule,
    HomeModule,
    StorageModule,
    UserStateModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    UserStateService, {provide : APP_INITIALIZER, useFactory : initFunction, deps: [UserStateService] , multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initFunction(server: UserStateService) {
  return () => server.init();
}