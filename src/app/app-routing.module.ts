import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LayoutComponent as AdminLayout } from './admin/layout/layout.component';
import { BlogHomeComponent } from './blog/blog-home/blog-home.component';
import { CreateBlogComponent } from './blog/create-blog/create-blog.component';
import { LayoutComponent as BlogLayoutComponent } from './blog/layout/layout.component';
import { ViewBlogComponent } from './blog/view-blog/view-blog.component';
import { AddBlogComponent } from './user/add-blog/add-blog.component';
import { LayoutComponent as UserLayout } from './user/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/blog/create', pathMatch: 'full' },
  {
    path: 'blog',
    component: BlogLayoutComponent,
    children: [
      { path: 'home', component: BlogHomeComponent },
      { path: 'view', component: ViewBlogComponent },
      { path: 'create', component: CreateBlogComponent },
    ],
  },

  {
    path: 'admin',
    component: AdminLayout,
    children: [{ path: 'dashboard', component: DashboardComponent }],
  },
  {
    path: 'user',
    component: UserLayout,
    children: [{ path: 'addpost', component: AddBlogComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
