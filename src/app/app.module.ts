import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';

import { BlogServiceService } from './blog-service.service';
import { HttpClientModule } from '@angular/common/http';

import { BlogModule } from './blog/blog.module';
import { BlogHomeComponent } from './blog/blog-home/blog-home.component';
import { LoginComponent } from './user/login/login.component';
import { UserModule } from './user/user.module';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    AppComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BlogModule,
    UserModule,
    RouterModule.forRoot(
    [
      { path: "home", component: BlogHomeComponent, pathMatch: 'full' },
      { path: "login", component: LoginComponent },
      { path: "about",component: AboutComponent},
      { path: "", redirectTo: 'home', pathMatch: 'full' },
      { path: "*", component: BlogHomeComponent },
      { path: "**", component: BlogHomeComponent },

    ]
      ),

    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(
      {
        timeOut: 2000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      }
    ), // ToastrModule added
    RouterModule.forRoot(
    [
      

    ]
      )
  ],
  providers: [BlogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
