import { Component, OnInit } from '@angular/core';
import { RegionJson } from 'src/Json/Provinces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  JsonObj: any;

  constructor(public regionJson: RegionJson) {
    this.JsonObj = this.regionJson.data;
    console.log(this.JsonObj);
  }

  ngOnInit() {}
}
