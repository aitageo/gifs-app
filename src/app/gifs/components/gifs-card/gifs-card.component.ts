import { gifs } from './../../interfaces/searchResponse.interface';
import { Component, Input, OnInit } from '@angular/core';




@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css']
})
export class GifsCardComponent implements OnInit {
  @Input()
  public gif! :gifs;

  constructor() { }

  ngOnInit(): void {
    if(!this.gif) throw new Error('gif property no required')

  }

}
