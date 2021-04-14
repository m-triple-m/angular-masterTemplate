import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LayoutComponent as AdminLayout } from './admin/layout/layout.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { BlogHomeComponent } from './blog/blog-home/blog-home.component';
import { CreateBlogComponent } from './blog/create-blog/create-blog.component';
import { LayoutComponent as BlogLayoutComponent } from './blog/layout/layout.component';
import { LayoutComponent as AppLayoutComponent } from './authentication/layout/layout.component';
import { ViewBlogComponent } from './blog/view-blog/view-blog.component';
import { LayoutComponent as UserLayout } from './user/layout/layout.component';
import { ManageBlogComponent } from './user/manage-blog/manage-blog.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/app/signup', pathMatch: 'full' },
  {
    path: 'app',
    component: AppLayoutComponent,
    children: [
      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'reset', component: ResetPasswordComponent },
    ],
  },
  {
    path: 'blog',
    component: BlogLayoutComponent,
    children: [
      { path: 'home', component: BlogHomeComponent },
      { path: 'view/:id', component: ViewBlogComponent },
      { path: 'create', component: CreateBlogComponent },
    ],
  },

  {
    path: 'admin',
    component: AdminLayout,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
    ],
  },
  {
    path: 'user',
    component: UserLayout,
    children: [
      { path: '', component: ProfileComponent },
      { path: 'manageblog', component: ManageBlogComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
