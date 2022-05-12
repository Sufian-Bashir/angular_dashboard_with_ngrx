import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[dynamic-tabs-driective]",
})
export class DynamicTabsDirective {
  constructor(public viewContainer: ViewContainerRef) {}
}
