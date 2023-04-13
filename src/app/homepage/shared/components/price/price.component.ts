import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  // animations: [
  //   trigger('Opacity', [
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('250ms', style({ opacity: 1 })),
  //     ]),
  //     transition(':leave', [
  //       animate('250ms', style({ opacity: 0 }))
  //     ])
  //   ]),
  // ],
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
  activeTab: string = 'Flora';
  constructor() {}

  ngOnInit(): void {}
  onTabCLick(tab: any) {
    this.activeTab = tab;
  }
}
