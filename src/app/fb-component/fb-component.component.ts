import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fb-component',
  templateUrl: './fb-component.component.html',
  styleUrls: ['./fb-component.component.css']
})
export class FbComponentComponent implements OnInit {

  constructor() { }

  public status: string='';

  public onBtnClick() {
    this.status = 'Clicked';
  }

  ngOnInit(): void {
  }

}
