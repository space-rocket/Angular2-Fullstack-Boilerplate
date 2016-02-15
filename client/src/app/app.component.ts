import {View, Component} from 'angular2/core';
import {Location, RouteConfig, RouterLink, Router} from 'angular2/router';

import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {HomeComponent} from '../home/home.component';
import {LoginComponent} from '../login/login.component';
import {SignupComponent} from '../signup/signup.component';


@Component({
  selector: 'app'
})
@View({
	templateUrl: './src/app/app.component.html',
  directives: [ LoggedInRouterOutlet ]
})
@RouteConfig([
  { path: '/', redirectTo: ['/Home'] },
  { path: '/home', component: HomeComponent, as: 'Home' },
  { path: '/login', component: LoginComponent, as: 'Login' },
  { path: '/signup', component: SignupComponent, as: 'Signup' }
])

export class AppComponent {
  constructor(public router: Router) {
  }
}
