import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-kp',
  templateUrl: './list-kp.component.html',
  styleUrls: ['./list-kp.component.scss']
})
export class ListKPComponent implements OnInit {
  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };
  dataSet = [];
  constructor() {
    for (let i = 0; i < 20; i++) {
      this.dataSet.push({
        key: i.toString(),
        name: `名字 ${i}`,
        age: 32,
        address: `项目. ${i}`
      });
    }
  }

  ngOnInit() {}
}
