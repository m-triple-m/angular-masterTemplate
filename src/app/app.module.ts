import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LayoutComponent as AdminLayout } from './admin/layout/layout.component';
import { LayoutComponent as UserLayout } from './user/layout/layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NebularModule } from './modules/nebular/nebular.module';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { AddBlogComponent } from './user/add-blog/add-blog.component';
import { LayoutComponent } from './user/layout/layout.component';
import { LayoutComponent as BlogLayoutComponent } from './blog/layout/layout.component';
import { HeaderComponent as BlogHeaderComponent } from './blog/header/header.component';
import { BlogHomeComponent } from './blog/blog-home/blog-home.component';
import { ViewBlogComponent } from './blog/view-blog/view-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayout,
    UserLayout,
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    ResetPasswordComponent,
    AddBlogComponent,
    LayoutComponent,
    BlogLayoutComponent,
    BlogHeaderComponent,
    BlogHomeComponent,
    ViewBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),

    NebularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
