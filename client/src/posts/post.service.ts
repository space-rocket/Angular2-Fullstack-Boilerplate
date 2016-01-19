import {Injectable} from 'angular2/core';

export class Post {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class PostService {
  getPosts() { return postsPromise;}
  
  getPost(id: number | string) {
    return postsPromise
      .then(posts => posts.filter(h => h.id === +id)[0]);
  }

}

var POSTS = [
		new Post(1, 'Hello World'), 
		new Post(2, 'Value, Types, and Operators'),
		new Post(3, 'Program Structure'),
		new Post(4, 'Functions'),
		new Post(5, 'Data Structures: Objects and Arrays'), 
		new Post(6, 'Higher-Order Functions'),
		new Post(7, 'The Secret Life of Objects'),
		new Post(8, 'Bugs and Error Handling'),
		new Post(9, 'Regular Expressions'),
		new Post(10, 'Modules')
];

var postsPromise = Promise.resolve(POSTS);

