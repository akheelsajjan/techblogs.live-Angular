import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { RouterModule } from '@angular/router';
import { StaticBlogModule } from './static-blog/static-blog.module';
import { ExpressComponent } from './static-blog/express/express.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { FormsModule } from '@angular/forms';
import { CreateblogComponent } from './createblog/createblog.component';




@NgModule({
  declarations: [BlogHomeComponent, BlogViewComponent, BlogEditComponent, CreateblogComponent],
  imports: [
    CommonModule,
    FormsModule,
    StaticBlogModule,
    RouterModule.forChild([
      {path:'blog/:blogId',component:BlogViewComponent},
      {path:'edit/:blogId',component:BlogEditComponent},
      {path:'create',component:CreateblogComponent},
      {path:'express',component:ExpressComponent},
     
    ])
  ],
  exports:[BlogHomeComponent]
})
export class BlogModule { }
