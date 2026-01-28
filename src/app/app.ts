import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fav-movies');

  protected movies = signal(
    [
        'Inception',
        'The Shawshank Redemption',
        'The Dark Knight',
        'Pulp Function',
        'Spirited Away',
        'The Godfather'
    ]
  );

  protected favourites = signal(
    []
  );

  
}
