import { style, transition, trigger, animate } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxImageZoomModule } from 'ngx-image-zoom';

interface Collection {
  src: string;
  id? : number,
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  animations: [
    trigger('Opacity', [
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
      src: 'assets/img/flora/flora05.png',
    },
    {
      src: 'assets/img/flora/flora07.png',
    },
    {
      src: 'assets/img/flora/flora04.png',
    },

    {
      src: 'assets/img/flora/flora06.png',
    },
    {
      src: 'assets/img/flora/flora09.png',
    },
    {
      src: 'assets/img/flora/flora10.png',
    },
    {
      src: 'assets/img/flora/flora11.png',
    },
    {
      src: 'assets/img/flora/flora02.png',
    },
    {
      src: 'assets/img/flora/flora08.png',
    },
    {
      src: 'assets/img/flora/flora12.png',
    },
  ]
  Forest: Collection[] = [
    {
      src: 'assets/img/forest/forest_07.png',
    },
    {
      src: 'assets/img/forest/forest_01.png',
    },
    {
      src: 'assets/img/forest/forest_02.png',
    },
    {
      src: 'assets/img/forest/forest_03.png',
    },
    {
      src: 'assets/img/forest/forest_04.png',
    },
    {
      src: 'assets/img/forest/forest_05.png',
    },
    {
      src: 'assets/img/forest/forest_06.png',
    },
    {
      src: 'assets/img/forest/forest_08.png',
    },
    {
      src: 'assets/img/forest/forest_10.png',
    },
    {
      src: 'assets/img/forest/forest_09.png',
    },

  ]
  Ornament: Collection[] = [
    {
      src: 'assets/img/ornament/ornament01.png',
    },

    {
      src: 'assets/img/ornament/ornament03.png',
    },

    
    {
      src: 'assets/img/ornament/ornament05.png',
    },
    {
      src: 'assets/img/ornament/ornament02.png',
    },
    {
      src: 'assets/img/ornament/ornament07.png',
    },
    {
      src: 'assets/img/ornament/ornament08.png',
    },
    {
      src: 'assets/img/ornament/ornament04.png',
    },
    {
      src: 'assets/img/ornament/ornament09.png',
    },
    {
      src: 'assets/img/ornament/ornament10.png',
    },
    {
      src: 'assets/img/ornament/ornament11.png',
    },
  ]
  activeTab: string = 'Flora';
  constructor(private viewportscroller: ViewportScroller) {}

  ngOnInit(): void {}
  onTabCLick(tab: any) {
    this.activeTab = tab;
  }
  onClickScroll(elementId: string): void {
    this.viewportscroller.scrollToAnchor(elementId);
  }
}
