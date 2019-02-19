import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  //Operador MAP
  //recibe la información del origen y 
  //yo hago con esa informacion lo que se me da la gana
  //para transforma la informacion en bruto en solo lo que a mi me interesa
  guardaCanciones: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases()
      .subscribe((data: any) => {

        this.guardaCanciones = data;
        console.log(this.guardaCanciones);
        this.loading = false;
      })

  }

  ngOnInit() {
  }
}
