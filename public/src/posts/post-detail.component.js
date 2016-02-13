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
    var PostDetailComponent;
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
            PostDetailComponent = (function () {
                function PostDetailComponent(_router, _routeParams, _service) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._service = _service;
                }
                PostDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this._service.getPost(id).then(function (post) { return _this.post = post; });
                };
                PostDetailComponent.prototype.gotoPosts = function () {
                    var postId = this.post ? this.post.id : null;
                    // Pass along the post id if available
                    // so that the PostList component can select that post.
                    this._router.navigate(['Posts', { id: postId }]);
                };
                PostDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'asset-detail',
                        template: "\n    <div class=\"alert alert-info\" role=\"alert\">\n      <strong>post-detail.component.ts</strong>\n    </div>\n    <div *ngIf=\"post\">\n      <h2>{{post.name}}</h2>\n      <div><label>id: </label>{{post.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"post.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, post_service_1.PostService])
                ], PostDetailComponent);
                return PostDetailComponent;
            })();
            exports_1("PostDetailComponent", PostDetailComponent);
        }
    }
});

//# sourceMappingURL=post-detail.component.js.map
