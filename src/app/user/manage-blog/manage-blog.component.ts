import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-blog',
  templateUrl: './manage-blog.component.html',
  styleUrls: ['./manage-blog.component.css'],
})
export class ManageBlogComponent implements OnInit {
  currentUser: any;
  blogsList: any;
  loadingBlogs = true;

  constructor(
    private blogService: BlogService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userService.currentUser;
    this.fetchAuthorBlogs();
  }

  fetchAuthorBlogs() {
    this.blogService.getBlogsByAuthor(this.currentUser._id).subscribe((res) => {
      this.blogsList = res;
      this.loadingBlogs = false;
    });
  }
}
