System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Post, PostService, POSTS, postsPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Post = (function () {
                function Post(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Post;
            })();
            exports_1("Post", Post);
            PostService = (function () {
                function PostService() {
                }
                PostService.prototype.getPosts = function () { return postsPromise; };
                PostService.prototype.getPost = function (id) {
                    return postsPromise
                        .then(function (posts) { return posts.filter(function (h) { return h.id === +id; })[0]; });
                };
                PostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PostService);
                return PostService;
            })();
            exports_1("PostService", PostService);
            POSTS = [
                new Post(1, 'Hello World'),
                new Post(2, 'Value, Types, and Operators'),
                new Post(3, 'Program Structure'),
                new Post(4, 'Functions'),
                new Post(5, 'Data Structures: Objects and Arrays'),
                new Post(6, 'Higher-Order Functions'),
                new Post(7, 'The Secret Life of Objects'),
                new Post(8, 'Bugs and Error Handling'),
                new Post(9, 'Regular Expressions'),
                new Post(10, 'Modules')
            ];
            postsPromise = Promise.resolve(POSTS);
        }
    }
});

//# sourceMappingURL=post.service.js.map
