import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.scss'],
})
export class BlogDialogComponent implements OnInit {
  blogRoute = 'PostBlog';
  selectedFile: File | null = null;
  formGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  createNewBlog: any = {
    BlogName: '',
    BlogSubTitle: '',
    BlogDescription: '',
    BlogImg: null,
  };
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      BlogName: ['', Validators.required],
      BlogSubTitle: ['', Validators.required],
      BlogDescription: ['', Validators.required],
    });
  }

  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        this.createNewBlog.BlogImg = base64String;
      };
      reader.readAsDataURL(file);
    }
  }
  onsubmit() {
    this.http
      .post(`${environment.baseURL}/${this.blogRoute}`, this.createNewBlog)
      .subscribe((data) => {
        if (!data) {
          console.log("Data haven't posted!");
        } else {
          console.log(data);
        }
      });
  }
}
