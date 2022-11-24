import { Injectable } from '@angular/core';
import { PostData } from './post-data';

@Injectable({
  providedIn: 'root'
})
export class FbPostService {

  constructor() { }

  public posts:PostData[] = [];

  public AddPost(post: PostData) {

    post.postid = this.posts.length + 1;

    this.posts.push(post);

  }
}
