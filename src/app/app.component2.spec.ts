import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';




import { APP_BASE_HREF } from '@angular/common';



import { RouterModule, Routes } from '@angular/router';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';




import { AboutComponent } from './about/about.component';

import { BlogServiceService } from './blog-service.service';
import { HttpClientModule } from '@angular/common/http';





describe('AppComponent', () => {
    let component: ComponentFixture<AppComponent>;
    let element: DebugElement;
    let html: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ BrowserModule, FormsModule ],
            declarations: [ AppComponent,  ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        })

        component = TestBed.createComponent(AppComponent);
    })

    it('should have a title', () => {
        let title = 'TechStack';

        component.detectChanges();
        element = component.debugElement.query(By.css('h6'));
        html = element.nativeElement;

        expect(html.innerText).toBe(title);
    })
})
