import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';

interface Collection {
  src: string;
  id?: number;
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  tabs = [
    {
      title: 'Flora',
      description:
        'Коллекция «Flora»- сплетение рельефного рисунка из листьев производит эффектное впечатление! Каждое изделие состоит из сотен граней, которые станут украшением любого интерьера. Зеркала из коллекции «Flora» могут быть выполнены в лаконичной и спокойной цветовой гамме, но W2W любит смелые цветовые решения! Именно в этой коллекции наиболее ярко выглядят металлизированные эмали, спецэффекты, патины и используются уникальные технологии покраски.',
      active: true,
      tabContent: [
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
      ],
    },
    {
      title: 'Forest',
      description:
        'Коллекция «Forest»- интерьерные картины W2W отражают многообразие и совершенство растений. Простые природные формы, качественное исполнение и цветовое решение наполнят Ваше пространство таинством леса и воспоминаниями о прогулках в тенистых аллеях. Не зря многих художники, архитекторы и дизайнеры обращаются к органическим формам цветов, листьев. Эко-дизайн сегодня — это способ не просто добавить в интерьер природу в «чистом виде» — это сознательный шаг навстречу сохранению грани, которая объединяет человека с естественной средой.',
      active: false,
      tabContent: [
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
      ],
    },
    {
      title: 'Ornament',
      description:
        'Эта коллекция появилась благодаря резным орнаментам усть-полуйской культуры Крайнего Севера. Узору более 2000-х тысяч лет! Именно вечная мерзлота помогла сохранить берестяные изделия в отличном качестве. Мастера прошлого работали на бересте с необыкновенной точностью создавая тонкую работу. В мастерской W2W мы воссоздали древний орнамент, стараясь сохранить ритмичность рисунка и чёткость линий. Предмет интерьера из коллекции «Ornament» имеет не только художественную ценность, но и хранит в себе память о былой культуре северного народа.',
      active: false,
      tabContent: [
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
      ],
    },
  ];
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
  ];
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
  ];
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
  ];
  activeTab: string = 'Flora';

  constructor(private viewportscroller: ViewportScroller) {}

  @ViewChildren('imageEl')
  imagesRef!: ElementRef<HTMLImageElement>[];

  ngOnInit(): void {}

  onClickScroll(elementId: string): void {
    this.viewportscroller.scrollToAnchor(elementId);
  }
  selectTab(tab: { active: boolean }) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
  }
}
