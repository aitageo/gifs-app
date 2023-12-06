import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, gifs } from '../interfaces/searchResponse.interface';

@Injectable({providedIn: 'root'})
export class GifsService {
     
    public gifsList : gifs[] = [];
    private _tagHistory: string[] = [];
    private apiKey:      string = 'eW30AcGHGAYibR95bzZMvvCbmo9tFofs';
    private serviceUrl:  string = 'https://api.giphy.com/v1/gifs';
    
    constructor(private http:HttpClient) { 
        this.LoadLocalStorage();
        console.log('Gifs Ready');
        
    }


    get tagsHistory (){
        return [...this._tagHistory];
    }

    private organizeHistory( tag: string ){
        tag = tag.toLowerCase();

        if (this.tagsHistory.includes(tag)) {
            this._tagHistory = this._tagHistory.filter(oldTage=> oldTage !== tag)
        }

        this._tagHistory.unshift( tag );
        this._tagHistory = this._tagHistory.splice(0,10);
        this.saveLocalStorage();
    }


    private saveLocalStorage():void{
        localStorage.setItem('history',JSON.stringify(this._tagHistory))
    }

    private LoadLocalStorage():void{
        if (!localStorage.getItem('history')) return; 
        this._tagHistory = JSON.parse(localStorage.getItem('history')!);// el ! dice que siempre va a venir una data
        
        if( this._tagHistory.length === 0) return;
          this.searchTag( this.tagsHistory[0]) ;
    }


    searchTag ( tag:string ):void{

        if( tag.length === 0) return ;
        this.organizeHistory(tag) ;

        const params = new HttpParams()
        .set('api_key', this.apiKey )
        .set('limit', 10 )
        .set('q', tag )

           
        this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
        .subscribe( res=> {
          this.gifsList = res.data;
        }
        );
        // fetch('https://api.giphy.com/v1/gifs/search?api_key=eW30AcGHGAYibR95bzZMvvCbmo9tFofs&q=valorant&limit=10')
        // .then(res=> res.json())
        // .then(data=> console.log(data));
    }
    
}