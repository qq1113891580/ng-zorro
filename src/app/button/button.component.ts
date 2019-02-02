import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  size = 'large';

  constructor(public notification: NzNotificationService) {}

  ngOnInit() {}

  ban() {
    this.notification.create(
      'info',
      '你有个特别的提示',
      '你居然删了 一条数据!是不是很特别XD？'
    );
  }
}
