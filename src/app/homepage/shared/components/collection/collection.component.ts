import { style, transition, trigger, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('250ms', style({ opacity: 0 }))
      ])
    ]),
  ],
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  activeTab: string = 'Forest';
  constructor() {}

  ngOnInit(): void {}
  onTabCLick(tab: any) {
    this.activeTab = tab;
  }
}
