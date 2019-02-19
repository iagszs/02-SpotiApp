import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  loading: boolean;
  
  constructor(private spotify: SpotifyService) { 
    
  }
  

  artistas: any[] = [];
  
  buscar(detalle: string) {
    this.loading = true;
    this.spotify.getResultOfSearch(detalle)
      .subscribe((data: any) => {
        this.artistas = data;
        console.log(this.artistas);
        this.loading = false;
      });
  }

}
