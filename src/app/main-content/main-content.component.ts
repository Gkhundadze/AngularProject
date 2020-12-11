import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  public counter = 0
  constructor() { }

  inc (){
    console.log('something')
    this.counter += 1;
  }
  dec(){
    this.counter --;
  }
  ngOnInit(): void {

  }

}
