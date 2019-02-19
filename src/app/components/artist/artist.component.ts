import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute,
    private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);

    });
  }

  getArtista(id: string) {
    this.loading = true;
    this.spotify.getArtista(id).subscribe((artista:any) => {
      this.artista = artista;
      this.loading = false;
      console.log(this.artista);
      
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
    .subscribe(topTracks => {
      this.topTracks = topTracks;
      console.log(this.topTracks);
    }); 
  }

}
