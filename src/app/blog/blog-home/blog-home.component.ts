import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from 'src/app/blog-service.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {

  public allBlogs:any[] = [];
  
  constructor(private blogservice: BlogServiceService) {

  }
  ngOnInit(): void {
   
 
    this.allBlogs = this.blogservice.getAllBlogs()
      .subscribe(
        data => {
          this.allBlogs = data['data'];
          console.log(this.allBlogs)
         
       
        },
        error => {
          console.log("some error occured");
          this.blogservice.httperror(error)
         
        }
      )


      
  }
}
