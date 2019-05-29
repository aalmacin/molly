import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "mol-nav-item",
  template: `
    <li
      class="mol-nav-item mol-l-nl mol-p-y-sm mol-m-r-md mol-c-tertiary-dark {{
        borderClasses
      }}"
      (mouseenter)="hoverNavItem()"
      (mouseleave)="unhoverNavItem()"
    >
      <ng-content class="content"></ng-content>
    </li>
  `,
  styleUrls: ["./nav-item.component.scss"]
})
export class NavItemComponent implements OnInit {
  @Input()
  active: boolean;

  borderClasses: string = "";

  ngOnInit(): void {
    this.borderClasses = "";
    this.setDefaultBorder();
  }

  setDefaultBorder() {
    if (this.active) {
      this.borderClasses = "active";
    } else {
      this.borderClasses = "inactive";
    }
  }

  hoverNavItem() {
    this.borderClasses = "hover";
  }

  unhoverNavItem() {
    this.setDefaultBorder();
  }
}
