import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { SearchBoxComponent } from './components/search-box/search-box/search-box.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
  HomepageComponent,
  SearchBoxComponent,
  CardListComponent,
  GifsCardComponent

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomepageComponent,
  ]
})
export class GifsModule { }
