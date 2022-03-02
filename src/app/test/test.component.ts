import { Component, ElementRef, OnInit, ViewChild,AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements  AfterViewInit ,OnInit{

  personName = 'Esraa Sayed';
  imgSrc = "assets/img/apple-touch-icon.png";

  showPassword=false;
  num=1;
 

  @ViewChild('paraEle') testVar!: ElementRef;
    // const testVar = document.getElementById('paraEle')

  @ViewChildren('inputEle') testVarArray!: QueryList<ElementRef>;
    // const testVarArray = document.quierySelectorAll('inputEle')

    constructor() { }
    ngAfterViewInit() :void{
    console.log((this.testVar.nativeElement as HTMLParagraphElement).innerHTML);
      
    this.testVarArray.forEach((ele)=>{
      console.log(ele);
      const element = ele.nativeElement as HTMLInputElement;
      element.classList.add('form-control');
    })
  }

ngOnInit(): void {
    const myObservable = new Observable((observe)=>{
      console.log('myObservable started')
      const x = 5;
      const y = 5;
      if(x+y == 10){
          console.log('myObservable has been resolved');
          observe.next('success');
      }
      else if (x/y == 1){
        console.log('myObservable has been resolved');
        observe.next("1");
      }
      else{
          console.log('myObservable has been rejected');
          observe.error('error has happened');
      }

          observe.complete();
    });

    myObservable.subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{
        console.log(err);
        
      },
      ()=>{
        console.log("complate");
        
      }
    )
}


}









