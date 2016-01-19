import {Component,  OnInit}  from 'angular2/core';
import {Post, PostService}   from './post.service';
import {RouteParams, Router} from 'angular2/router';

@Component({
  selector: 'asset-detail',
  template: `
    <div class="alert alert-info" role="alert">
      <strong>post-detail.component.ts</strong>
    </div>
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
export class PostDetailComponent implements OnInit {
  post: Post;

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _service: PostService) { }

  ngOnInit() {
    let id = this._routeParams.get('id');
    this._service.getPost(id).then(post => this.post = post);
  }

  gotoPosts() {
    let postId = this.post ? this.post.id : null;
    // Pass along the post id if available
    // so that the PostList component can select that post.
    this._router.navigate(['Posts', { id: postId}]);
  }
}
