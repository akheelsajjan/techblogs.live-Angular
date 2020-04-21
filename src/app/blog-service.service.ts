import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  public allBlogs;
  public currentBlog;
  //public baseUrl = 'http://localhost:3000/api/v1/blogs';
  public baseUrl = 'http://api.techblogs.live/api/v1/blogs';

  public baseUrl2='http://api.techblogs.live/api/v1/users';

  public authToken = '?authToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6ImV0Qm9FQThEdiIsImlhdCI6MTU4NzIyNjQ1NTUxNiwiZXhwIjoxNTg3MzEyODU1LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7Im1vYmlsZU51bWJlciI6MTIzNDU2Nzg5MCwiZW1haWwiOiJha0BnbWFpbC5jb20iLCJsYXN0TmFtZSI6IlNhIiwiZmlyc3ROYW1lIjoiQWsiLCJ1c2VySWQiOiIyc0tqTGYyWmsifX0.cGpB9iBdISyeMh98hbDPvmz4bFB-Z5wfjX7OPcZ20OM'
  
  
  constructor(private http:HttpClient) { }

  public httperror(err: HttpErrorResponse){
    console.log("httperror");
    console.log(err);
    Observable.throw(err.message);
  }
  


  public  getAllBlogs():any{
    console.log("get all blogs from service called")
    let myresponse = this.http.get(this.baseUrl+'/all/');
    return myresponse;
  }

  public getSingleBlogInfo(currentBlogId){
 
    this.currentBlog = this.http.get(this.baseUrl+'/view/'+currentBlogId+this.authToken);
    console.log(this.currentBlog)
    return this.currentBlog;
  }

  public createBlog(blog){
    let myresponse = this.http.post(this.baseUrl+ '/create/', blog);
    return myresponse;
  }
 // https://blogapp.edwisor.com/api/v1/blogs/:blogId/edit
  public EdiBlog(blogId, blogData){
    console.log("edit called")
    //let myResponse = this.http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData)
    let myresponse = this.http.put(this.baseUrl + '/' + blogId + '/edit/'+ this.authToken ,blogData);
   return myresponse;
  }
//https://blogapp.edwisor.com/api/v1/blogs/:blogId/delete
  public deleteBlog(blogId){
    let  data={};
    let myresponse = this.http.post(this.baseUrl+'/'+blogId+'/delete/'+this.authToken,data);
    return myresponse;
  }

  

  //User Profile

  public getUserInfoFromLocalStorage = ()=>{
    return JSON.parse(localStorage.getItem('userInfo'));
  }
  
    public setUserInfoInLocalStorage = (data)=>{
      localStorage.setItem('userInfo',JSON.stringify(data));
    }


  public signupFunction(data): Observable<any> {

    const parms = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobile', data.mobile)
      .set('email', data.email)
      .set('password', data.password)
      .set('apiKey', data.apiKey);

    return this.http.post(this.baseUrl2 + '/signup', parms);
  }


  public signinFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);
      
    return this.http.post(this.baseUrl2+ '/login', params);
  } // end of signinFunction function.


  public logout(): Observable<any> {

    const params = new HttpParams()
      .set('authToken', Cookie.get('authtoken'))

    return this.http.post(`${this.baseUrl2}/api/v1/users/logout`, params);

  } // end logout function

}
