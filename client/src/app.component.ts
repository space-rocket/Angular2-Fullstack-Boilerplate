// import {Component, OnInit} from 'angular2/core';
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {HeroListComponent}     from './heroes/hero-list.component';
import {HeroDetailComponent}   from './heroes/hero-detail.component';
import {PostListComponent}     from './posts/post-list.component';
import {PostDetailComponent}   from './posts/post-detail.component';

import {DialogService}         from './dialog.service';
import {HeroService}           from './heroes/hero.service';
import {PostService}           from './posts/post.service';

@Component({
  selector: 'my-app',
  template: `
    <div class="alert alert-info" role="alert">
      <strong>app.component.ts</strong>
    </div>
    <h1 class="title">Component Router</h1>
    <nav>
      <a [routerLink]="['CrisisCenter']">Crisis Center</a>
      <a [routerLink]="['Heroes']">Heroes</a>
      <a [routerLink]="['Posts']">Posts</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers: [DialogService, HeroService, PostService],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([

  { // Crisis Center child route
    path: '/crisis-center/...',
    name: 'CrisisCenter',
    component: CrisisCenterComponent,
    useAsDefault: true
  },

  { path: '/heroes', name: 'Heroes', component: HeroListComponent },
  { path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent },

  { path: '/posts', name: 'Posts', component: PostListComponent },
  { path: '/post/:id', name: 'PostDetail', component: PostDetailComponent },

  { path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', { id: 3 }] }
])
export class AppComponent { }
