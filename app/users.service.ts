import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';//Test this
import {Injectable} from 'angular2/core';

@Injectable()
export class UsersService {
	private _url = "http://jsonplaceholder.typicode.com/users";
	constructor(private _http: Http){}
	getUsers(){
		return this._http.get(this._url)
            .map(res => res.json());
	}
}