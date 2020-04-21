import { BlogServiceService } from "./blog-service.service";
import { async, TestBed, inject } from '@angular/core/testing';

// Straight Jasmine testing without Angular's testing support
describe('ValueService', () => {
    let service: BlogServiceService;
    beforeEach( async() => { 
        TestBed.configureTestingModule({
            providers:[BlogServiceService]
        })
    });


  
  
    it('#getObservableValue should return 3 blogs from observable',async(
        inject([BlogServiceService],(service:BlogServiceService)=>{
            service.getAllBlogs().then(response=>{
                expect(response.length).toBe(3);
            })
        })
    ));
  
  
  });
  /*
  (done: DoneFn) => {
      service.getAllBlogs().subscribe(value => {
        expect(value.length).toBe(3);
        done();
      });
    }*/