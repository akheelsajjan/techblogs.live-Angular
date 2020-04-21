import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from 'src/app/blog-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];

  constructor(private blogservice: BlogServiceService, private router:Router,private _route: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void { }

  createBlog(): any {
    let blogData = {

      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory

    }// end blog data
    console.log(blogData);
    this.blogservice.createBlog(blogData).subscribe(
      data => {
      
        
        this.toastr.success('Blog Created Sucessfuly!');
        setTimeout(()=>{
          this.router.navigate(['/home']);
          
        },1000)
      },
      error => {
        console.log(error);
      }
    )

  }
}
