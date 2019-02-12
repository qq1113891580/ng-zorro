import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NzTreeNodeOptions, NzFormatEmitEvent } from 'ng-zorro-antd';

@Component({
  selector: 'app-tabs-and-other',
  templateUrl: './tabs-and-other.component.html',
  styleUrls: ['./tabs-and-other.component.scss']
})
export class TabsAndOtherComponent implements OnInit {
  @ViewChild('treeCom') treeCom;
  myForm: FormGroup;
  defaultCheckedKeys = ['1001', '1002'];
  defaultSelectedKeys = ['10011'];
  defaultExpandedKeys = ['100', '1001'];
  nodes: NzTreeNodeOptions[] = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          disabled: true,
          children: [
            {
              title: 'leaf 1-0-0',
              key: '10010',
              disableCheckbox: true,
              isLeaf: true
            },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true, checked: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
        }
      ]
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initialForm();
    setTimeout(() => {
      console.log(
        this.treeCom.getTreeNodes(),
        this.treeCom.getCheckedNodeList(),
        this.treeCom.getSelectedNodeList()
      );
    }, 500);
  }

  nzClick(event: NzFormatEmitEvent): void {
    console.log(
      event,
      event.selectedKeys,
      event.keys,
      event.nodes,
      this.treeCom.getSelectedNodeList()
    );
  }

  nzCheck(event: NzFormatEmitEvent): void {
    console.log(event, event.checkedKeys, event.keys, event.nodes);
  }

  // nzSelectedKeys change
  nzSelect(keys: string[]): void {
    console.log(keys, this.treeCom.getSelectedNodeList());
  }

  /**初始表单 */
  initialForm() {
    this.myForm = this.fb.group({
      Name: ['', [Validators.required]],
      Trainer: ['', [Validators.required]],
      TrainTime: ['', [Validators.required]],
      EndTime: ['', [Validators.required]],
      Content: [''],
      Address: ['', [Validators.required]]
    });
  }

  /**添加/编辑培训信息 */
  submitForm(v: string): void {
    // tslint:disable-next-line:forin
    for (const i in this.myForm.controls) {
      this.myForm.controls[i].markAsDirty();
      this.myForm.controls[i].updateValueAndValidity();
    }
  }
}
