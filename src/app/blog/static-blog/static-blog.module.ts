import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpressComponent } from './express/express.component';



@NgModule({
  declarations: [ExpressComponent],
  imports: [
    CommonModule
  ],
  exports:[ExpressComponent]
})
export class StaticBlogModule { }
