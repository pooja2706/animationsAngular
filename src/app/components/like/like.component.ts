import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {
  heartclicked: boolean=false

  ifheartClicked(state: boolean){
    this.heartclicked=state
    console.log('ghbjn');

  }
}
