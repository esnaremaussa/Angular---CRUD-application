import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar.component.html',
    styles: [`
    	.addGreen{
    		color: #18bc9c !important;
    	}
    `],
    directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent{
	constructor(private _router: Router) {

	}
	isActive(instruction: any[]){
		return this._router.isRouteActive(this._router.generate(instruction));
	}
}