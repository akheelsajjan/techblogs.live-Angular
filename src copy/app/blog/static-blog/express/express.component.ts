import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-express',
  templateUrl: './express.component.html',
  styleUrls: ['./express.component.css']
})
export class ExpressComponent implements OnInit {
  @ViewChild('scrollMe', { read: ElementRef }) 
  
  public scrollMe: ElementRef;
  public scrollToChatTop:boolean= false;
  
  public page1 = false;
  public page2 = false;
  public page3 = false;
  public page4 = false;
  public page5 = false;
  public page6 = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.page1=true
    this.page2=false;
    this.scrollToChatTop = true;
  }

  page2view(){
    let myBlogId = this.route.snapshot.paramMap.get('Id');
    this.router.navigate(['/blog/',+ myBlogId]);
    this.page1=false
    this.page2=true;
    this.scrollToChatTop = true;
  }
  page3view(){
    this.page2=false
    this.page3=true;
    this.scrollToChatTop = true;
  }
  page4view(){
    this.page3=false;
    this.page4=true;
    this.scrollToChatTop = true;
  }
  page5view(){

  }
}
