import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { app_config } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  url = app_config.api_url + '/blog';
  constructor(private http: HttpClient) {}

  addBlog(data: any) {
    return this.http.post(this.url + '/add', data);
  }

  getBlogDetails(id) {
    return this.http.get(this.url + '/getbyid/' + id);
  }

  getBlogsByAuthor(id) {
    return this.http.get(this.url + '/getbyauthor/' + id);
  }

  uploadImage(file: any) {
    return this.http.post(app_config.api_url + '/util/addimg', file);
  }

  getAllBlogs() {
    return this.http.get(this.url + '/getall');
  }
}
