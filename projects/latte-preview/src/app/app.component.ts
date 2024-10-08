import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent, LayoutService } from "latte";

@Component({
  selector: 'latte-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'latte-preview';

  constructor(private layoutService: LayoutService) {
    this.layoutService.applicationName = this.title;
  }
}
