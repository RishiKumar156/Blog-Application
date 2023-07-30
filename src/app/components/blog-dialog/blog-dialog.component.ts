import { ConnectorService } from './../connector.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { NgModelOptions } from '@angular/forms';
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
  blogRoute = 'CreateBlog';
  BlogCreatingUserGuid: any;
  selectedFile: File | null = null;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public ConnectorService: ConnectorService
  ) {}
  createNewBlog: any = {
    BlogName: '',
    BlogSubTitle: '',
    BlogDescription: '',
    BlogImg: null,
  };
  BlogName = new FormControl('', [Validators.required]);
  BlogSubTitle = new FormControl('', [Validators.required]);
  BlogDescription = new FormControl('', [Validators.required]);
  formGroup = this.formBuilder.group({
    BlogName: this.BlogName,
    BlogSubTitle: this.BlogSubTitle,
    BlogDescription: this.BlogDescription,
  });
  ngOnInit(): void {
    console.log(this.ConnectorService.guId);
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
    console.log(this.createNewBlog);
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
