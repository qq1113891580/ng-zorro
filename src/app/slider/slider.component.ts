import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  value1 = 5;
  value2 = 1;

  style = {
    float: 'left',
    height: '300px',
    marginLeft: '70px'
  };

  marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50'
      },
      label: '<strong>100°C</strong>'
    }
  };
  constructor() {}

  ngOnInit() {}
}
