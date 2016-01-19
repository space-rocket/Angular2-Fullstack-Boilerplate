import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {CrisisListComponent}   from './crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisService}         from './crisis.service';

@Component({
  selector: 'crisis-center-component',
  template:  `
    <div class="alert alert-info" role="alert">
      <strong>crisis-center.component.ts</strong>
    </div>
    <h2>CRISIS CENTER</h2>
    <crisis-detail-component>
    </crisis-detail-component>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers:  [CrisisService]
})
@RouteConfig([
  {path:'/',         name: 'CrisisCenter', component: CrisisListComponent, useAsDefault: true},
  {path:'/:id',      name: 'CrisisDetail', component: CrisisDetailComponent}
])
export class CrisisCenterComponent { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/