import { Component } from "@angular/core";

@Component({
  selector: "mol-nav-header",
  template: `
    <div
      class="mol-nav-header mol-l-nl mol-fs-vl mol-th mol-p-y-sm mol-m-r-md mol-c-tertiary-dark">
      <ng-content class="content"></ng-content>
    </div>
  `,
  styleUrls: ["./nav-header.component.scss"]
})
export class NavHeaderComponent {
}
