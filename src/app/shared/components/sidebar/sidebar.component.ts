import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private GifsServices: GifsService) { }

  get Tags(){
    return  this.GifsServices.tagsHistory;
    
  }
  showTag(tag:string){
    this.GifsServices.searchTag(tag);
  }

  ngOnInit(): void {
  }

}
