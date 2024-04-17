import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private router:Router){}

  showImprint(){
    console.log('Navigating to imprint');
    this.router.navigateByUrl('/imprint')
  }

  showPrivacy(){

  }

}
