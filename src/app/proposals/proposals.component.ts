import { Component } from '@angular/core';
import { ProfileRowComponent } from "../profile-row/profile-row.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-proposals',
    standalone: true,
    templateUrl: './proposals.component.html',
    styleUrl: './proposals.component.scss',
    imports: [ProfileRowComponent, CommonModule]
})
export class ProposalsComponent {
  
    names=['Ron', 'Princes', 'Harper', 'Dio'];
    texts=['super', 'läuft', 'alles klar', 'schick'];
    images=['/assets/img/black French Bulldog7.webp', '/assets/img/blue2French Bulldog.webp', '/assets/img/brindle2French Bulldog.webp', '/assets/img/merle2French Bulldog.webp '];

}
