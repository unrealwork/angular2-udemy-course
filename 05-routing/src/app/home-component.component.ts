import {Component, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    {{param}}
    <div id="section1">
      
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscription: Subscription;
  param: string;

  constructor(private route: ActivatedRoute) {
    this.subscription = route.queryParams.subscribe(
      (queryParams: any) => {
        this.param = queryParams['analytics'];
      }
    )
  }
}
