import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  name = 'Peter Griffin';
  buttonLabel = 'Thank You'

  acceptInvitation() {
    alert('Thank you!');
    this.name = 'Bruno'
  }
}
