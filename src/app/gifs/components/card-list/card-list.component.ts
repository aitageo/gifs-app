import { Component, Input, OnInit } from '@angular/core';
import { gifs } from '../../interfaces/searchResponse.interface';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent implements OnInit {
  @Input()
   public gifs : gifs[] = [];

  constructor(private gifsService: GifsService) { }

  public Gifs():gifs[]{
       return  this.gifsService.gifsList;
  }

  ngOnInit(): void {
  }

}
