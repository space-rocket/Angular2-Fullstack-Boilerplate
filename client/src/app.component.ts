// import {Component, OnInit} from 'angular2/core';
import {Component} from 'angular2/core';
import {Location, RouteConfig, RouterLink, Router} from 'angular2/router';
import { Http, Headers, HTTP_PROVIDERS } from 'angular2/http';

import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {Home} from './home/home';
import {Login} from './login/login';
import {Signup} from './signup/signup';

@Component({
  selector: 'my-app',
  template: `
<div class="container">
  <router-outlet></router-outlet>
</div>
  `,
  directives: [LoggedInRouterOutlet],
  providers: [HTTP_PROVIDERS]
})
@RouteConfig([
  { path: '/', redirectTo: ['/Home'] },
  { path: '/home', component: Home, as: 'Home' },
  { path: '/login', component: Login, as: 'Login' },
  { path: '/signup', component: Signup, as: 'Signup' }
])
export class AppComponent { 
  constructor(public router: Router) {
  }
}
