System.register(['angular2/core', './post.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, post_service_1, router_1;
    var PostListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            PostListComponent = (function () {
                function PostListComponent(_service, _router, routeParams) {
                    this._service = _service;
                    this._router = _router;
                    this._selectedId = +routeParams.get('id');
                }
                PostListComponent.prototype.isSelected = function (post) { return post.id === this._selectedId; };
                PostListComponent.prototype.onSelect = function (post) {
                    this._router.navigate(['PostDetail', { id: post.id }]);
                };
                PostListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getPosts().then(function (posts) { return _this.posts = posts; });
                };
                PostListComponent = __decorate([
                    core_1.Component({
                        selector: 'asset-list',
                        template: "\n      <div class=\"alert alert-info\" role=\"alert\">\n        <strong>post-list.component.ts</strong>\n      </div>\n      <ul>\n        <li *ngFor=\"#post of posts\"\n          [class.selected]=\"post === selectedPost\"\n          (click)=\"onSelect(post)\">\n          <span class=\"badge\">{{post.id}}</span> {{post.name}}\n        </li>\n      </ul>\n      <div *ngIf=\"post\">\n        <h2>{{post.name}}</h2>\n        <div><label>id: </label>{{post.id}}</div>\n        <div>\n          <label>name: </label>\n          <input [(ngModel)]=\"post.name\" placeholder=\"name\"/>\n        </div>\n      </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, router_1.Router, router_1.RouteParams])
                ], PostListComponent);
                return PostListComponent;
            })();
            exports_1("PostListComponent", PostListComponent);
        }
    }
});

//# sourceMappingURL=post-list.component.js.map
