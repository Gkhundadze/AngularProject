import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  public counter: number = 0;
  public counterState: string = "zero";

  constructor() {   }

  
  inc (): void{
    this.counter += 1;
    if(this.counter > 0){
      this.counterState = "positive"
    }
    if(this.counter === 0){
      this.counterState = "zero"
    }
  }
  reset():void{
    this.counter = 0;
    if(this.counter === 0){
      this.counterState = "zero"
    }
  }
  dec(): void{
    this.counter --;
    if(this.counter < 0){
      this.counterState = "negative"
    }
    if(this.counter === 0){
      this.counterState = "zero"
    }
  }
  decTwoTimes(){
    this.counter --;
    this.counter --;
    if(this.counter < 0){
      this.counterState = "negative"
    }
    if(this.counter === 0){
      this.counterState = "zero"
    }
  }
  incTwoTimes(): void{
    this.counter += 2;
    if(this.counter > 0){
      this.counterState = "positive"
    }
    if(this.counter === 0){
      this.counterState = "zero"
    }
  }

  ngOnInit(): void {

  }
}
