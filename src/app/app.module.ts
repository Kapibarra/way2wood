import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './homepage/shared/components/header/header.component';
import { HeroComponent } from './homepage/shared/components/hero/hero.component';
import { AboutComponent } from './homepage/shared/components/about/about.component';
import { CollectionComponent } from './homepage/shared/components/collection/collection.component';
import { PriceComponent } from './homepage/shared/components/price/price.component';
import { QuestionComponent } from './homepage/shared/components/question/question.component';
import { DetailsComponent } from './homepage/shared/components/details/details.component';
import { ContactsComponent } from './homepage/shared/components/contacts/contacts.component';
import { FooterComponent } from './homepage/shared/components/footer/footer.component';
import { MainPageComponent } from './homepage/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    CollectionComponent,
    PriceComponent,
    QuestionComponent,
    DetailsComponent,
    ContactsComponent,
    FooterComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
