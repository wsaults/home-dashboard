import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
<<<<<<< HEAD
import { IsaacPageComponent } from './isaac-page/isaac-page.component';
=======
import { DadPageComponent } from './dad-page/dad-page.component';
import { ZanderPageComponent } from './zander-page/zander-page.component';
>>>>>>> Dad and Zander's page

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'dashboard', component: DashboardComponent },
<<<<<<< HEAD
  { path: 'isaac', component: IsaacPageComponent },
=======
  { path: 'dad', component: DadPageComponent },
  { path: 'zander', component: ZanderPageComponent },
>>>>>>> Dad and Zander's page
  { path: 'detail/:id', component: UserDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
