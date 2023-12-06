import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `<h5>Buscar</h5>
       <input type="text"
       class="form-control"
       placeholder="Buscar gifs.."
       (keyup.enter)="searchTag()"
        #txtTagInput 
        >
        `
})
export class SearchBoxComponent implements OnInit {
  @ViewChild('txtTagInput')
   public tagInput!: ElementRef<HTMLInputElement>//! este es el none null operator(siempre esta ese valor)

  constructor(private GifsService:GifsService) { }

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.GifsService.searchTag( newTag );
    this.tagInput.nativeElement.value = "";
    
  }

  ngOnInit(): void {
  }

}
