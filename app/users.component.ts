import {Component, OnInit} from 'angular2/core';
import {UsersService} from './users.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouterLink} from 'angular2/router';


@Component({
    selector: 'users',
    templateUrl: 'app/users.component.html',
    providers: [UsersService, HTTP_PROVIDERS],
    directives: [RouterLink]
})
export class UsersComponent implements OnInit{ 
	isLoading = true;
	users = [];

	constructor(private _usersService: UsersService){}

	ngOnInit(){
		this._usersService.getUsers()
			.subscribe(users => {
				this.isLoading = false;
				this.users = users;
			});
	}
}