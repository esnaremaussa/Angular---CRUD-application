import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';//Test this
import {Injectable} from 'angular2/core';

@Injectable()
export class PostsService{
	private _url = "http://jsonplaceholder.typicode.com/posts";

	constructor(private _http: Http) { }

	getPosts(){
		return this._http.get(this._url)
			.map(res => res.json());
	}
	getPostsByUser(userId) {
		return this._http.get(this._url + "?userid=" + userId)
			.map(res => res.json());
	}
	getComments(userId) {
		var comments_url = this._url + "/" + userId + "/comments";
		return this._http.get(comments_url)
			.map(res => res.json());
	}
}