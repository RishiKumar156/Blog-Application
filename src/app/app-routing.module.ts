import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'dummy',
    component: DummyComponent,
  },
  {
    path: 'newBlog',
    component: CreateBlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
