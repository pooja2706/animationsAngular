import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { CardhoverComponent } from './components/cardhover/cardhover.component';
import { CardmovetopComponent } from './components/cardmovetop/cardmovetop.component';
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
    CardhoverComponent,
    // TickComponent,
    // HomeComponent,
    // LikeComponent,
    CardsComponent,
    CardmovetopComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'animationsAngular';
}
