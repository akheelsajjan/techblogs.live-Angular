import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServiceService } from 'src/app/blog-service.service';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public currentBlog;
 
  public express = false;
  public nodejs = false;
  public restapi = false;

  constructor(private route: ActivatedRoute,
     private router: Router,
      private blogservice: BlogServiceService,
      private toaster:ToastrService,
     private location:Location
      
      ) {
   
  }

  ngOnInit(): void {
    let blogId = this.route.snapshot.paramMap.get('blogId');
    
    
    this.currentBlog=this.blogservice.getSingleBlogInfo(blogId).subscribe(
      data => {
        
        this.currentBlog = data['data'];
        if(this.currentBlog.title=='Express'){
          this.express = true
        }else if(this.currentBlog.title=='Node.js'){
          this.nodejs = true;
        }else if(this.currentBlog.title == 'REST API'){
          this.restapi = true
        }

        
      },
      error => {
        console.log("some error at vew component");
        console.log(error);
      }
    )

  

  }


  deleteThisBlog(){
    this.blogservice.deleteBlog(this.currentBlog.blogId).subscribe(

      data=>{
        this.toaster.success("Deleted succesfully");
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000)
      },
      errot=>{

      }
    )
  }

  edit(){
    this.router.navigate(['/edit'+ '/'+this.currentBlog.blogId]);
  }

  goBackToPreviousPage(){
    this.location.back()
  }

  expressblog(){
    this.nodejs = false;
    this.express = true;
    this.restapi=false;
    this.currentBlog.title="Express"

  }

}
