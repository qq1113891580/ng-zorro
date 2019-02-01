import { Component, OnInit } from '@angular/core';
import { RegionJson } from 'src/Json/Provinces';
import { NzNotificationService, NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  JsonObj: any;

  i = 1;
  editCache = {};
  dataSet = [];

  constructor(
    public regionJson: RegionJson,
    private notification: NzNotificationService,
    private nzMessageService: NzMessageService,
    private message: NzMessageService
  ) {
    this.JsonObj = this.regionJson.data;
    console.log(this.JsonObj);
  }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.dataSet.push({
        key: i.toString(),
        name: `名字 ${i}`,
        age: 32,
        address: `项目. ${i}`
      });
    }
    this.updateEditCache();
  }

  shanc(d) {
    // 过滤出删除后的菜单，重新赋值给遍历菜单
    const temp = this.JsonObj.filter(v => {
      return v.name !== d.name;
    });
    this.JsonObj = temp;
    console.log(1);
    this.notification.create(
      'info',
      '你有个特别的提示',
      '你居然删了 一条数据!是不是很特别XD？'
    );
    // const index = this.JsonObj.indexOf(d);
    // if (index > -1) {
    //   this.JsonObj.splice(index, 1);
    // }
  }

  cancel() {
    this.nzMessageService.info('你选的是取消，请选择旁边的确定，谢谢');
  }

  startEdit(key: string): void {
    this.editCache[key].edit = true;
  }

  cancelEdit(key: string): void {
    this.editCache[key].edit = false;
  }

  createMessage(type) {
    if (type === 'success') {
      this.message.create(type, `你已经修改了 ${type}`);
    } else if (type === 'error') {
      this.message.create(type, `你已经删除了 ${type}`);
    }
  }

  saveEdit(key: string): void {
    const index = this.dataSet.findIndex(item => item.key === key);
    Object.assign(this.dataSet[index], this.editCache[key].data);
    // this.dataSet[ index ] = this.editCache[ key ].data;
    this.editCache[key].edit = false;
  }

  updateEditCache(): void {
    this.dataSet.forEach(item => {
      if (!this.editCache[item.key]) {
        this.editCache[item.key] = {
          edit: false,
          data: { ...item }
        };
      }
    });
  }
}
