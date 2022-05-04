import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  showLoader = false;
  constructor() { }

  ngOnInit(): void {
    this.showFor5Seconds()
  }
  showFor5Seconds() {
    this.showLoader = true;
    let a = this;
    setTimeout(()=>{
      this.showLoader = false;
    },1500)
  }
}
