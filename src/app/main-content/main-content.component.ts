import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  public counter: number = 0;
  public counterState: string = "zero";

  constructor() {
  
  }
  incOrDec(status: string): void{
    if(status === "+"){
      this.counter ++;
    }
    if(status === "-"){
      this.counter --;
    }
    if(status === "-x2"){
      this.counter -=2;
    }
    if(status === "+x2"){
      this.counter +=2;
    }
    if(status === "reset"){
      this.counter = 0;
    }
  }

  // inc(): void {
  //   this.counter += 1;
  //   if (this.counter > 0) {
  //     this.counterState = "positive"
  //   }
  //   if (this.counter === 0) {
  //     this.counterState = "zero"
  //   }
  // }
  // reset(): void {
  //   this.counter = 0;
  //   if (this.counter === 0) {
  //     this.counterState = "zero"
  //   }
  // }
  // dec(): void {
  //   this.counter--;
  //   if (this.counter < 0) {
  //     this.counterState = "negative"
  //   }
  //   if (this.counter === 0) {
  //     this.counterState = "zero"
  //   }
  // }
  // decTwoTimes(): void {
  //   this.counter--;
  //   this.counter--;
  //   if (this.counter < 0) {
  //     this.counterState = "negative"
  //   }
  //   if (this.counter === 0) {
  //     this.counterState = "zero"
  //   }
  // }
  // incTwoTimes(): void {
  //   this.counter += 2;
  //   if (this.counter > 0) {
  //     this.counterState = "positive"
  //   }
  //   if (this.counter === 0) {
  //     this.counterState = "zero"
  //   }
  // }

  ngOnInit(): void {

  }
}
