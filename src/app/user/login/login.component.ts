import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from 'src/app/blog-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: any;
  public password: any;

  constructor(private appservice: BlogServiceService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

 
  public goToSignUp: any = () => {

    this.router.navigate(['/sign-up']);

  } // end goToSignUp

  public signinFunction: any = () => {

    if (!this.email) {
      this.toastr.warning('enter email')


    } else if (!this.password) {

      this.toastr.warning('enter password')


    } else {

      let data = {
        email: this.email,
        password: this.password
      }

      this.appservice.signinFunction(data)
        .subscribe((apiResponse) => {

          if (apiResponse.status === 200) {
            Cookie.set('authtoken', apiResponse.data.authToken);
            
            Cookie.set('receiverId', apiResponse.data.userDetails.userId);
           
            Cookie.set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
          
            this.appservice.setUserInfoInLocalStorage(apiResponse.data.userDetails)
           
            this.router.navigate(['/chat']);
           
                  
            
           ///  this.router.navigate(['/chat']);

          } else {

            this.toastr.error(apiResponse.message)
          

          }

        }, (err) => {
          this.toastr.error('The site is under Production for you to singUp')

        });

    } // end condition

  } // end signinFunction

  signButton(){
    this.router.navigate(['signup'])
  }

  

}
