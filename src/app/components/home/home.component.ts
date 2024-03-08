import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TickComponent } from '../tick/tick.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TickComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
clicked: boolean=false;
onclick(state: boolean){
  this.clicked=state
}
}
