import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tajetas',
  templateUrl: './tajetas.component.html',
  styleUrls: ['./tajetas.component.css']
})
export class TajetasComponent {

  constructor(private router: Router) { }
  @Input() items: any;

  verArtista(item: any) {
    let artistaId;

    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artist[0].id;
    }
    this.router.navigate(['/artist', artistaId]);
  }
}
