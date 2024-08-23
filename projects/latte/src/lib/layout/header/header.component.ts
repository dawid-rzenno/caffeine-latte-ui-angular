import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { LayoutService } from "../layout.service";

@Component({
  selector: 'latte-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly applicationName: string = this.layoutService.applicationName;

  constructor(private layoutService: LayoutService) {}
}
