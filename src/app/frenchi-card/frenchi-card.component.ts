import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frenchi-card',
  standalone: true,
  imports: [],
  templateUrl: './frenchi-card.component.html',
  styleUrl: './frenchi-card.component.scss'
})
export class FrenchiCardComponent {

@Input() text:string='';
@Input() postIMG:string='';

//  text= 'Hallo, mein Name ist Lucy, ich liebe den Sommer!';

}
