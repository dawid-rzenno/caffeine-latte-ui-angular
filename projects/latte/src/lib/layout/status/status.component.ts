import { Component } from '@angular/core';
import { StatusService } from "./status.service";
import { Observable } from "rxjs";
import { InstantiatedStatus } from "./common/instantiated-status";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { StatusInterceptor } from "./status.interceptor";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'latte-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: StatusInterceptor, multi: true },
    StatusService,
  ]
})
export class StatusComponent {
  readonly statuses$: Observable<InstantiatedStatus[]> = this.service.statuses$;

  constructor(private service: StatusService) {
  }

  close(statusId: number): void {
    this.service.closeStatusWithId(statusId);
  }
}
