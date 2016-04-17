import {Component, OnInit} from 'angular2/core';
import {PostsService} from './posts.service';
import {UsersService} from '../users/users.service';
import {SpinnerComponent} from '../shared/spinner.component'
import {PaginationComponent} from '../shared/pagination.component';

@Component({
	selector: 'posts',
	templateUrl: 'app/posts/posts.component.html',
	providers: [PostsService, UsersService],
	directives: [SpinnerComponent, PaginationComponent],
	styles: [`
		.posts	li	{	cursor:	default;	}
		.posts	li:hover	{	background:	#ecf0f1;	}	
		.list-group-item.active,	
		.list-group-item.active:hover,	
		.list-group-item.active:focus	{	
			 background-color:	#ecf0f1;
			 border-color:	#ecf0f1;	
			 color:	#2c3e50;
		}
		.round-image{
			border-radius:100%;
		}
	`]
})
export class PostsComponent implements OnInit {
	postLoading = true; 
	pagedPosts = [];
	isLoadingComments = false;
	isLoadingUsers = true;
	posts: any[];
	users: any[];
	currentPost = { title: "", body: "" };
	comments: any[];
	pageSize = 10;


	constructor(private _postsService: PostsService, private _usersService: UsersService) { }

	ngOnInit() {
		this.loadPosts();
		this.loadComments();
	}
	private loadPosts(){
		this._postsService.getPosts()
			.subscribe(
			posts => {
				this.posts = posts;
				this.pagedPosts = _.take(this.posts, this.pageSize)
			},
			null,
			() => { this.postLoading = false; });
	}
	private loadComments() {
		this._usersService.getUsers()
			.subscribe(users => {
				this.users = users;
				this.isLoadingUsers = false;
			});
	}
	private loadUsers(post){
		this.isLoadingComments = true;
		this.currentPost.title = post.title;
		this.currentPost.body = post.body;

		this._postsService.getComments(post.id)
			.subscribe(
			comments => {
				this.comments = comments;
				this.isLoadingComments = false;
			},
			null,
			() => { });

	}
	private loadPostsByUser(user){
		this._postsService.getPostsByUser(user)
			.subscribe(
			posts => this.posts = posts,
			null,
			() => { this.postLoading = false; });
	}
	select(post){
		this.loadUsers(post);
	}
	updatePostsByUser(user){
		this.postLoading = true;	

		if (user==0){
			this.loadPosts();
		}	
		else{
			this.loadPostsByUser(user);
		}
	}

	onPageChanged(page) {
		var startIndex = (page - 1) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
	}
}