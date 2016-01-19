import {Component, OnInit}   from 'angular2/core';
import {Post, PostService}   from './post.service';
import {RouteParams, Router} from 'angular2/router';

@Component({
  selector: 'asset-list',
  template: `
      <div class="alert alert-info" role="alert">
        <strong>post-list.component.ts</strong>
      </div>
      <ul>
        <li *ngFor="#post of posts"
          [class.selected]="post === selectedPost"
          (click)="onSelect(post)">
          <span class="badge">{{post.id}}</span> {{post.name}}
        </li>
      </ul>
      <div *ngIf="post">
        <h2>{{post.name}}</h2>
        <div><label>id: </label>{{post.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="post.name" placeholder="name"/>
        </div>
      </div>
  `,
})
export class PostListComponent implements OnInit {
    posts: Post[];

    private _selectedId: number;

    constructor(
        private _service: PostService,
        private _router: Router,
        routeParams: RouteParams) {
        this._selectedId = +routeParams.get('id');
    }

    isSelected(post: Post) { return post.id === this._selectedId; }

    onSelect(post: Post) {
        this._router.navigate(['PostDetail', { id: post.id }]);
    }

    ngOnInit() {
        this._service.getPosts().then(posts => this.posts = posts)
    }
}
