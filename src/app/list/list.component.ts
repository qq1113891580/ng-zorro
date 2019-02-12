import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data = [
    '优美的诗句 1',
    '优美的诗句 2',
    '优美的诗句 3',
    '优美的诗句 4',
    '优美的诗句 5'
  ];

  constructor() {}

  ngOnInit() {}
}
