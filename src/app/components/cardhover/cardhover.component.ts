import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface CardColor{
  primarycolor: string,
  secondarycolor: string
}

interface CardContent{
  headline: string,
  body: string
}

interface CardProperty{
  cardcolor: CardColor,
  cardcontent: CardContent
}

@Component({
  selector: 'app-cardhover',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cardhover.component.html',
  styleUrl: './cardhover.component.css'
})
export class CardhoverComponent {
  cardcontent: CardProperty[]=[]

  constructor(){
    this.cardcontent.push(
      {
        cardcolor:   {primarycolor: '#bfe4df', secondarycolor: '#e9f7f0'},
        cardcontent:  {headline: 'hello', body: '1st'}
      }
    );
    this.cardcontent.push(
      {
        cardcolor:   {primarycolor: '#ffc6b1', secondarycolor: '#fff1ea'},
        cardcontent:  {headline: 'hello', body: '2st'}
      }
    );
    this.cardcontent.push(
      {
        cardcolor:   {primarycolor: '#bddfff', secondarycolor: '#eaf5ff'},
        cardcontent:  {headline: 'hello', body: '3st'}
      }
    );
    this.cardcontent.push(
      {
        cardcolor:   {primarycolor: '#ffcdce', secondarycolor: '#fef2f2'},
        cardcontent:  {headline: 'hello', body: '4st'}
      }
    );
    this.cardcontent.push(
      {
        cardcolor:   {primarycolor: '#ced2ff', secondarycolor: '#ecedff'},
        cardcontent:  {headline: 'hello', body: '5st'}
      }
    );

  }
}
