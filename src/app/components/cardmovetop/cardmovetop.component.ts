import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface CardColor{
  primarycolor: string,
  secondarycolor: string
}

interface CardContent{
  headline: string,
  body: string[]
}

interface CardProperty{
  cardcolor: CardColor,
  cardcontent: CardContent
}

@Component({
  selector: 'app-cardmovetop',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cardmovetop.component.html',
  styleUrl: './cardmovetop.component.css'
})
export class CardmovetopComponent {
  cardcontent: CardProperty[]=[]
  stringcontent:string[]=['Eat', 'Code', 'Sleep', 'Repeat']
  check: boolean=false
  constructor(){
    this.cardcontent.push(
      {
        cardcolor:   {primarycolor: '#bfe4df', secondarycolor: '#e9f7f0'},
        cardcontent:  {headline: '14/03/2024', body: this.stringcontent}
      }
    );
    this.cardcontent.push(
      {
        cardcolor:   {primarycolor: '#ffc6b1', secondarycolor: '#fff1ea'},
        cardcontent:  {headline: '15/03/2024', body: this.stringcontent}
      }
    );
    this.cardcontent.push(
      {
        cardcolor:   {primarycolor: '#bddfff', secondarycolor: '#eaf5ff'},
        cardcontent:  {headline: '16/03/2024', body: this.stringcontent}
      }
    );
    this.cardcontent.push(
      {
        cardcolor:   {primarycolor: '#ffcdce', secondarycolor: '#fef2f2'},
        cardcontent:  {headline: '17/03/2024', body: this.stringcontent}
      }
    );
    this.cardcontent.push(
      {
        cardcolor:   {primarycolor: '#ced2ff', secondarycolor: '#ecedff'},
        cardcontent:  {headline: '18/03/2024', body: this.stringcontent}
      }
    );
    console.log(this.cardcontent);



  }
  checkclick(){
    this.check=!this.check
    console.log('ggh');

  }
  changeClass() {
    var element = document.querySelector(".cards");
    if(element)
    element.classList.replace("cards", "cards-afterclick");
    console.log('sdfghj');

  }
}
