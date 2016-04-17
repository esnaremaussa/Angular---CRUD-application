import {Component, Input} from 'angular2/core';

@Component({
	selector: 'spinner',
	template: `
		<i *ngIf="visible" class="fa fa-refresh fa-spin fa-3x fa-fw margin-bottom"></i>
	`
})
export class SpinnerComponent{
	@Input() visible = true; 
}