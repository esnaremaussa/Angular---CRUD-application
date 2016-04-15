System.register(['angular2/core', './users.service', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, users_service_1, http_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_usersService) {
                    this._usersService = _usersService;
                    this.isLoading = true;
                    this.users = [];
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._usersService.getUsers()
                        .subscribe(function (users) {
                        _this.isLoading = false;
                        _this.users = users;
                    });
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        template: "\n    \t\t<div *ngIf=\"isLoading\">\n    \t\t\t<i class=\"fa fa-refresh fa-spin fa-3x fa-fw margin-bottom\"></i>\n\t\t\t\t<span class=\"sr-only\">Loading...</span>\n\t\t\t</div>\n\t\t\t<table class=\"table table-bordered\" *ngIf=\"!isLoading\"> \n\t\t\t\t<thead> \n\t\t\t\t\t<tr> \n\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t<th>Email</th>\n\t\t\t\t\t\t<th>Edit</th>\n\t\t\t\t\t\t<th>Delete</th>\n\t\t\t\t\t</tr> \n\t\t\t\t</thead> \n\t\t\t\t<tbody> \n\t\t\t\t\t<tr *ngFor=\"#user of users\"> \n\t\t\t\t\t\t<td>{{ user.name }} </td>\n\t\t\t\t\t\t<td>{{ user.email }} </td>\n\t\t\t\t\t\t<td><i class=\"glyphicon glyphicon-edit\"></i></td>\n\t\t\t\t\t\t<td><i class=\"glyphicon glyphicon-remove\"></i></td>\n\t\t\t\t\t</tr> \n\t\t\t\t</tbody> \n\t\t\t</table>\n\n    ",
                        providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map