import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as SimpleMDE from 'simplemde';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css'],
})
export class CreateBlogComponent implements OnInit {
  simplemde: any;
  blogForm: any;
  currentUser: any;
  markdown: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.currentUser = { _id: 1 };
    this.simplemde = new SimpleMDE({ element: document.getElementById('md') });
    this.initBlogForm();
  }

  initBlogForm() {
    this.blogForm = this.fb.group({
      title: '',
      author: this.currentUser._id,
      created: new Date(),
      data: {},
      likes: null,
      comments: null,
      tags: null,
    });
  }

  getMD(e) {
    console.log(e.target.value);
  }

  submit() {
    console.log(this.simplemde.value());
  }
}
