import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.scss'],
})
export class BlogDialogComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  BlogName = new FormControl('', [Validators.required]);
  BlogSubTitle = new FormControl('', [Validators.required]);
  Blogdata = new FormControl('', [Validators.required]);
  formGroup = this.formBuilder.group({
    BlogName: this.BlogName,
    BlogSubTitle: this.BlogSubTitle,
    Blogdata: '',
  });

  createNewBlog: any = {
    BlogName: '',
    BlogAuthor: '',
    BlogImg: '',
    BlogSubTitle: '',
    Blogdata: '',
  };
  ngOnInit(): void {}

  onsubmit() {}
}
