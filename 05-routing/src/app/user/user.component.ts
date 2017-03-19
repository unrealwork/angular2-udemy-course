import {Component, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <a [routerLink]="['/user']">User</a>
      <button (click)="onNavigate()">Go Home!</button>
      <hr>
      {{id}}
      <router-outlet></router-outlet>
      
    `
})
export class UserComponent implements OnDestroy {
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscription: Subscription;
  private id: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = this.activatedRoute.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    )
  }

  onNavigate() {
    this.router.navigate(['/'],{queryParams:{analytics: 100}, fragment:'section2'});
  }
}
