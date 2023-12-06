import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { gifs } from '../../interfaces/searchResponse.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  get gifs():gifs[]{
    return this.gifsService.gifsList;
  }

  ngOnInit(): void {
  }

}
