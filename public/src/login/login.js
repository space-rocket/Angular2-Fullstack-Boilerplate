System.register(['angular2/core', 'angular2/router', 'angular2/common', 'angular2/http', '../common/headers'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, http_1, headers_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (headers_1_1) {
                headers_1 = headers_1_1;
            }],
        execute: function() {
            Login = (function () {
                function Login(router, http) {
                    this.router = router;
                    this.http = http;
                }
                Login.prototype.login = function (event, username, password) {
                    var _this = this;
                    event.preventDefault();
                    var body = JSON.stringify({ username: username, password: password });
                    this.http.post('http://localhost:3001/sessions/create', body, { headers: headers_1.contentHeaders })
                        .subscribe(function (response) {
                        localStorage.setItem('jwt', response.json().id_token);
                        _this.router.parent.navigateByUrl('/home');
                    }, function (error) {
                        alert(error.text());
                        console.log(error.text());
                    });
                };
                Login.prototype.signup = function (event) {
                    event.preventDefault();
                    this.router.parent.navigateByUrl('/signup');
                };
                Login = __decorate([
                    core_1.Component({
                        selector: 'login'
                    }),
                    core_1.View({
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        templateUrl: './src/login/login.html',
                        styleUrls: ['./src/login/login.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
                ], Login);
                return Login;
            })();
            exports_1("Login", Login);
        }
    }
});

//# sourceMappingURL=login.js.map
