import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
// import { TickComponent } from './components/tick/tick.component';
// import { HomeComponent } from './components/home/home.component';
// import { LikeComponent } from './components/like/like.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
  [
    CommonModule,
    RouterOutlet,
    // TickComponent,
    // HomeComponent,
    // LikeComponent,
    CardsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'animationsAngular';
}
