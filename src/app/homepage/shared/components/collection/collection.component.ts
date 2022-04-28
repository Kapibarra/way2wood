import { style, transition, trigger, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

interface Collection {
  src: string;
  id? : number,
}

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
  Flora: Collection[] = [
    {
      src: 'assets/img/flora/flora01.png',
    },
    {
      src: 'assets/img/flora/flora03.png',
    },
    {
      src: 'assets/img/flora/flora04.png',
    },
    {
      src: 'assets/img/flora/flora05.png',
    },
    {
      src: 'assets/img/flora/flora06.png',
    },
    {
      src: 'assets/img/flora/flora02.png',
    },
    {
      src: 'assets/img/flora/flora07.png',
    },
  ]
  Forest: Collection[] = []
  Ornament: Collection[] = [
    {
      src: 'assets/img/ornament/ornament01.png',
    },

    {
      src: 'assets/img/ornament/ornament03.png',
    },
    {
      src: 'assets/img/ornament/ornament02.png',
    },
    {
      src: 'assets/img/ornament/ornament04.png',
    },
  ]
  activeTab: string = 'Flora';
  constructor() {}

  ngOnInit(): void {}
  onTabCLick(tab: any) {
    this.activeTab = tab;
  }
}
