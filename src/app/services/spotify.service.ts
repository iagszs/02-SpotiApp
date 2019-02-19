import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; //REactive extensions
import { pipe } from '@angular/core/src/render3';
//muchos operacions como filter, map, retrive (solo trabajan con observables)
//Injectable permite tener una unica instancia con el decorador provideIn: root (no es necesario)
//registrar el servicio en el app.module.ts, en caso contrario si será necesario registrarlo para que no 
//mande error.
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getUrl(url: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBXve56Yp_Q_LktNULr-qzGFYktYhWc9ZyrPBRjXyIES61Q6IlLQyugfi5ijHZqynTz4HelPE2_p53sUJI'
    });

    return this.http.get(`https://api.spotify.com/v1/${url}`, { headers });


  }

  getNewReleases() {
    return this.getUrl("browse/new-releases")
      .pipe(map(data => data['albums'].items// de la data busque la propiedad albums y esta a su ves la prop items
      ));
  }

  getResultOfSearch(detalle: string) {

    return this.getUrl("search?query=" + detalle + "&type=artist&market=US&offset=5&limit=15")
      // return this.http.get(`https://api.spotify.com/v1/search?query=${detalle}&type=artist&market=US&offset=5&limit=15`, { headers })
      .pipe(map(data => data['artists'].items// de la data busque la propiedad albums y esta a su ves la prop items
      ));
  }

  getArtista(id: string) {

    return this.getUrl(`artists/${id}`);
  }


  getTopTracks(id: string) {
    return this.getUrl(`artists/${id}/top-tracks?country=ES`)
      .pipe(map(data => data['tracks']));
  }

}
