import { Component, View } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Http } from 'angular2/http';
import { contentHeaders } from '../common/headers';

@Component({
  selector: 'signup'
})
@View({
  directives: [ RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  templateUrl: './src/signup/signup.html',
  styleUrls: ['./src/signup/signup.css']
})
export class SignupComponent {
  constructor(public router: Router, public http: Http) {
  }

  signup(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:3001/users', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('jwt', response.json().id_token);
          this.router.parent.navigateByUrl('/home');
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  login(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/login');
  }

}
