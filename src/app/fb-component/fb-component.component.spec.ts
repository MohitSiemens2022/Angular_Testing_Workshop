import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FbPostService } from '../fb-post.service';

import { FbComponentComponent } from './fb-component.component';
import { HtmlParser } from '@angular/compiler';
import { By } from '@angular/platform-browser';

describe('FbComponentComponent', () => {
  let tsInstance: FbComponentComponent;
  let component: ComponentFixture<FbComponentComponent>;
  let fbSvc: FbPostService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbComponentComponent ]
    }).compileComponents();

    fbSvc = TestBed.inject(FbPostService);

    component = TestBed.createComponent(FbComponentComponent);

    tsInstance = component.componentInstance;

    component.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('fbService instance should be available ', () => {
    expect(fbSvc).toBeTruthy();
  });
  it('button click should show Clicked', () => {

    //Arrange
    var htmlPart: HTMLElement = component.debugElement.nativeElement;
    var btn = htmlPart.querySelector('button');

    //Act
    btn?.click(); //triggering the events
    component.detectChanges();
    //Asserts

    expect(tsInstance.status).toEqual('Clicked');
    expect(component.debugElement.nativeElement.querySelector('span').innerText).toEqual('Clicked');

  });

  it('access span tag by css',()=>{
    //Arrange
    var htmlObj = component.debugElement;
    var spanTag = htmlObj.query(By.css('.sTag'));

    //Assert
    expect(spanTag).toBeDefined();
    expect(spanTag.nativeElement.innerText).toBe('');
  });
});

