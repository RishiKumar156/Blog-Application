import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.scss'],
})
export class BlogDialogComponent implements OnInit {
  selectedFile: File | null = null;
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

  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.type == 'image/jpeg' || file.type == 'image/png') {
        const form = new FormData();
        form.append('file', file);
      }
    }
  }
  upload() {}
  onsubmit() {}
}
