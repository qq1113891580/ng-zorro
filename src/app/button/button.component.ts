import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  size = 'large';
  inputValue = 'my wang';
  array = [1, 2, 3, 4];
  constructor(public notification: NzNotificationService) { }

  ngOnInit() { }

  ban() {
    this.notification.create(
      'info',
      '你有个特别的提示',
      '你删了 一条数据'
    );
  }
}
