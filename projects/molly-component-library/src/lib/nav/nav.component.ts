import { Component } from "@angular/core";

@Component({
  selector: "mol-nav",
  template: `
    <nav class="mol-nav mol-b-secondary-vlight mol-bc-secondary-vlight mol-p-sm mol-m-b-sm">
      <ul class="mol-p-n mol-m-n">
        <ng-content select="mol-nav-item"></ng-content>
      </ul>
    </nav>
  `,
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent {}
