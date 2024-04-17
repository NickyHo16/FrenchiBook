import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FrenchiCardComponent } from './frenchi-card/frenchi-card.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProfileRowComponent } from './profile-row/profile-row.component';
import { FriendboxComponent } from './friendbox/friendbox.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HeaderComponent, FrenchiCardComponent,CommonModule, FooterComponent, ProposalsComponent, ProfileRowComponent, FriendboxComponent, ImprintComponent, PrivacyComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = '13-05_FrenchiBook_Testprojekt';

  postTexts=[
    'Hallo, mein Name ist Lucy, ich liebe den Sommer!',
    'Ich bin Chen, ich liebe Blätter!',
    'Das macht so viel Spaß!',
    'Wie gemütlich das hier ist!',
    'Herrlicher Spaziergang!',
    'Es duftet!',
    'Ach da bist du ja!',
  ];

  postImages=[
    '/assets/img/whiteFrench Bulldog.webp',
    '/assets/img/fawn2French Bulldog.webp',
    '/assets/img/blue2French Bulldog.webp',
    '/assets/img/black French Bulldog3.webp',
    '/assets/img/merleFrench Bulldog.webp',
    '/assets/img/brindleFrench Bulldog.webp',
    '/assets/img/black French Bulldog7.webp',
  ];

}
