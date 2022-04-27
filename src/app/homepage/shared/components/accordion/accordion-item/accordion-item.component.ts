import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit {

@Input() title: string = 'test title'
showBody = false

  constructor() { }

  ngOnInit(): void {
  }
toggleAccordion() {
  this.showBody = !this.showBody;
}
}
