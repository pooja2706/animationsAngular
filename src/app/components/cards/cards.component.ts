import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
interface Card{
  header: string;
  content: string
}
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  cardimage: string[]=['./card1.svg', './card2.svg','./card3.svg','./card4.svg',]
  values: number[]=[1, 2, 3, 4];
  colors: string[]=['red', 'green', 'purple', 'yellow', 'blue'];
  cardvalues: Card[]=[{header: 'hello', content: 'content'},{header: 'hello', content: 'content'},{header: 'hello', content: 'content'},{header: 'hello', content: 'content'},]

  addingform: FormGroup
  constructor(private fb: FormBuilder){
    this.addingform=fb.group({
      header:   new FormControl(''),
      content:  new FormControl('')
    })
  }

  add(){
    this.cardvalues.push(this.addingform.value)
  }
}
