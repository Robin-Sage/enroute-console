import { Component, OnInit } from '@angular/core';
import { ViewService } from './view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  mediaList = ['1', '2', '3'];
  obj: Object;
  constructor(private viewService: ViewService) { }
  ngOnInit() {
    console.log(this.viewService.getMedia());
  }

// fuwf

}
