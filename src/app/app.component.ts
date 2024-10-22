import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Menyatakan bahwa ini adalah standalone component
})
export class AppComponent {
  title = 'news-portal';
}
