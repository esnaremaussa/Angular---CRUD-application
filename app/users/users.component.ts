import {Component, OnInit} from 'angular2/core';
import {UsersService} from './users.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouterLink} from 'angular2/router';


@Component({
    selector: 'users',
    templateUrl: 'app/users/users.component.html',
    providers: [UsersService, HTTP_PROVIDERS],
    directives: [RouterLink]
})
export class UsersComponent implements OnInit{ 
	isLoading = true;
	users: any[];

	constructor(private _usersService: UsersService){}

	ngOnInit(){
		this._usersService.getUsers()
			.subscribe(users => {
				this.isLoading = false;
				this.users = users;
			});
	}
	deleteUser(user) {
		if (confirm("Are you sure you want to delete the user: " + user.name + " ?")) {
			var index = this.users.indexOf(user)
			// Here, with the splice method, we remove 1 object
            // at the given index.
            this.users.splice(index, 1);

			this._usersService.deleteUser(user.id)
				.subscribe(null,
				err => {
					alert("Could not delete the user.");
					// Revert the view back to its original state
					// by putting the user object at the index
					// it used to be.
					this.users.splice(index, 0, user);
				});
		}
	}
}