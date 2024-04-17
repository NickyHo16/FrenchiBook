import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.scss'
})
export class ProfileRowComponent {

@Input() name ='Dicker';
@Input() img ='/assets/img/black French Bulldog2.webp'; 
@Input() description ='liebt Schmetterlinge';
@Input() canfollow =true;

constructor(public fs:FriendService){}

}
