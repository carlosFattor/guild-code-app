import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubUserComponent } from './views/github-user/github-user.component';
import { HomeComponent } from './views/home/home.component';
import {environment as ENV} from '@environment';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users/github', component: GithubUserComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: !ENV.production })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
