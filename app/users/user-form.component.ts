import {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {CanDeactivate, Router, RouteParams} from 'angular2/router';

import {CommonValidators} from '../shared/commonValidators'
import {UsersService} from './users.service';
import {User} from './user';


@Component({
    templateUrl: 'app/user-form.component.html',
    providers: [UsersService]
})
export class UserFormComponent implements OnInit, CanDeactivate {
	form: ControlGroup;
    title: string;
    user = new User();

	constructor(
		fb: FormBuilder,
        private _router: Router,
        private _routeParams: RouteParams,
        private _userService: UsersService
	) {
		this.form = fb.group({
			name: ['', Validators.compose([
				Validators.required
			])],
			email: ['', Validators.compose([
				Validators.required, 
				CommonValidators.isEmailValid,
				CommonValidators.cannotConstainSpace
			])],
			phone: [],
			address: fb.group({
				street: [],
				suite: [],
				city: [],
				zipcode: []
			})
		});
	}

	routerCanDeactivate() {
		if (this.form.dirty)
			return confirm('You have unsaved changes. Are you sure you want to navigate away?');
		return true;
	}

	ngOnInit() {
        var id = this._routeParams.get("id");

        this.title = id ? "Edit User" : "New User";

        if (!id)
			return;

        this._userService.getUser(id)
			.subscribe(
			user => this.user = user,
			response => {
				if (response.status == 404) {
					this._router.navigate(['NotFound']);
				}
			});
    }

	save() {
		var result;
		if (this.user.id) {
			result = this._userService.updateUser(this.user);
		}
		else {
			result = this._userService.addUser(this.user);
		}

		result.subscribe(x => {
            // Ideally, here we'd want:
            // this.form.markAsPristine();
            this._router.navigate(['Users']);
        });
	}
}