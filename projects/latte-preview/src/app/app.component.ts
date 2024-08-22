import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicationComponent } from "latte";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ApplicationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'latte-preview';
}
