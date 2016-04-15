import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {CommonValidators} from './commonValidators'

@Component({
    templateUrl: 'app/user-form.component.html'
})
export class UserFormComponent {
	form: ControlGroup;

	constructor(fb: FormBuilder){
		this.form = fb.group({
			name: ['', Validators.compose([
				Validators.required,
				CommonValidators.cannotConstainSpace
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

}