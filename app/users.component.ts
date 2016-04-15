import {Component, OnInit} from 'angular2/core';
import {UsersService} from './users.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'users',
    template: `
    		<div *ngIf="isLoading">
    			<i class="fa fa-refresh fa-spin fa-3x fa-fw margin-bottom"></i>
				<span class="sr-only">Loading...</span>
			</div>
			<table class="table table-bordered" *ngIf="!isLoading"> 
				<thead> 
					<tr> 
						<th>Name</th>
						<th>Email</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr> 
				</thead> 
				<tbody> 
					<tr *ngFor="#user of users"> 
						<td>{{ user.name }} </td>
						<td>{{ user.email }} </td>
						<td><i class="glyphicon glyphicon-edit"></i></td>
						<td><i class="glyphicon glyphicon-remove"></i></td>
					</tr> 
				</tbody> 
			</table>

    `,
    providers: [UsersService, HTTP_PROVIDERS]
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