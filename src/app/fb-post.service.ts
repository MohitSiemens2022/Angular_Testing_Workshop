import { Injectable } from '@angular/core';
import { PostData } from './post-data';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FbPostService {

  constructor(public http:HttpClient) { }

  public posts:PostData[] = [];

  public AddPost(post: PostData) {

    post.postid = this.posts.length + 1;

    this.posts.push(post);

  }

  public getPosts(){
    return this.http.get<PostData[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
