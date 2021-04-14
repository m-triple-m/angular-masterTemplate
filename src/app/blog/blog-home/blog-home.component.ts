import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { app_config } from 'src/config';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['../layout/layout.component.css'],
})
export class BlogHomeComponent implements OnInit {
  blogsList;
  loadingBlogs = true;
  url = app_config.api_url + '/';
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.fetchBlogs();
  }

  fetchBlogs() {
    this.blogService.getAllBlogs().subscribe((res) => {
      this.blogsList = res;
      this.loadingBlogs = false;
    });
  }

  filterBlogs() {}
}
