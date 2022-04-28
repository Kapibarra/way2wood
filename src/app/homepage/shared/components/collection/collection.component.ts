import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
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
