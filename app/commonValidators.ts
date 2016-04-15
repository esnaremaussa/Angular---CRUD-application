import {Control} from 'angular2/common'; 

export class CommonValidators{
	static isEmailValid(control: Control) {
		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value))) {
			return {
				isEmailValid: true
			};
		}
		else{
			return null;
		}
	}
	static cannotConstainSpace(control: Control) {
		if (control.value.indexOf(" ") >= 0) {
			return {
				cannotContainSpace: true
			}
		}
		else {
			return null;
		}
	}
}