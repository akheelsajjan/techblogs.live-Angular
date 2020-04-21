import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';


  constructor( private toastr: ToastrService) { }

  authors(){
    this.toastr.warning("Site Under Production","view Authors Later time")
  }
  
}
