import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FbPostService } from './fb-post.service';
import { PostData } from './post-data';
import { TwitterPostService } from './twitter-post.service';

describe('FbPostService', () => {
  let service: FbPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientTestingModule]});
    service = TestBed.inject(FbPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('FbPostService', () => {

  let fbservice: FbPostService;

  let twitterservice: TwitterPostService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations:[AppComponent],

      imports:[BrowserTestingModule, AppRoutingModule,HttpClientTestingModule]

    }).compileComponents();

    fbservice = TestBed.inject(FbPostService);

    twitterservice = TestBed.inject(TwitterPostService);

  });



  it('should instantiate facebook service', () => {

    expect(fbservice).toBeTruthy();

  });



  it('should instantiate twitter service', () => {

    expect(twitterservice).toBeTruthy();

  });



  it('should create an angular component', () => {

    let component = TestBed.createComponent(AppComponent);

    expect(component).toBeTruthy();

  });

});

describe('Test Functions of FbPostService', () => {
  var fbSvc: FbPostService;
  var objPost: PostData;
  beforeEach(async () => {
    await TestBed.configureTestingModule({imports:[HttpClientTestingModule]}).compileComponents();
    fbSvc = TestBed.inject(FbPostService);
    objPost = new PostData();
  });
  it('should be instantiated', () => {
    expect(fbSvc).toBeTruthy();
  });
  it('should add the post to the list', () => {
    //Arrange
    objPost.title = 'Vacation 2022';
    //Act
    fbSvc.AddPost(objPost);
    //Assert
    expect(fbSvc.posts.length).toEqual(1);
    let lastIndex = fbSvc.posts.length - 1;
    let lastItem = fbSvc.posts[lastIndex];
    expect(lastItem.postid).toBe(1);
  });
});