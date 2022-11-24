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

  it('button click should show Clicked 2', () => {

    //Arrange
    var htmlPart = component.debugElement;
    var btn = htmlPart.query(By.css('button'));

    //Act
    btn.triggerEventHandler('click',{})
    component.detectChanges();
    //Asserts

    expect(tsInstance.status).toEqual("Clicked");
    expect(component.debugElement.nativeElement.querySelector('span').innerText).toEqual('Clicked')

  });

  it('should add the post to a list on pressing enter',()=>{
    //Arrange
    let htmlObj = component.debugElement;
    let textbox = htmlObj.query(By.css('input'));
    textbox.nativeElement.value = "Vacation 2022";
    component.detectChanges();

    //Act
    expect(tsInstance.list.length).toEqual(0);
    textbox.triggerEventHandler('keyup.enter',{});
    component.detectChanges();

    //Asserts
    expect(tsInstance.list.length).toEqual(1);
    expect(tsInstance.list[0]).toEqual('Vacation 2022');
    var listItem = htmlObj.query(By.css('li'));
    expect(listItem.nativeElement.innerText).toEqual('Vacation 2022');

  });
});

