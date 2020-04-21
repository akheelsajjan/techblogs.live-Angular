import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServiceService } from 'src/app/blog-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  currentBlog: any;

  constructor(private route: ActivatedRoute, private router: Router, private blogservice: BlogServiceService,private toaster:ToastrService) { }

  ngOnInit() {
    let myBlogId = this.route.snapshot.paramMap.get('blogId');
    console.log(myBlogId)
    //this.currentBlog = this.blogService.getSingleBlog(myBlogId);
    this.blogservice.getSingleBlogInfo(myBlogId).subscribe(

      data => {
   
        this.currentBlog = data['data'];
        

      },
      error => {
       
        console.log(error.errorMessage)
      }


    )
  }

  editThisBlog(): any {

    this.blogservice.EdiBlog(this.currentBlog.blogId,this.currentBlog).subscribe(

      data => {
        console.log(data);
        this.toaster.success("blog edited sucessfully");
        setTimeout(() => {
          this.router.navigate(['/blog',this.currentBlog.blogId]);
        }, 1000)

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        
      }


    )




  }// end delete this blog 

  
}
