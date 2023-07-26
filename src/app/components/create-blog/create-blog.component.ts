import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BlogDialogComponent } from '../blog-dialog/blog-dialog.component';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss'],
})
export class CreateBlogComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {
    this.dialog.open(BlogDialogComponent, {
      panelClass: 'create-blog-dialog-container',
    });
  }
  onsubmit() {}
}
