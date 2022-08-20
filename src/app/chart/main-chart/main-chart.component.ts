import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.scss']
})
export class MainChartComponent implements OnInit {
  @Input() chartDate: any[] = [820, 932, 901, -130, 1290, 1330, 1320];
  @Input() xAxisDate: any[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  @Input() chartType: any = 'bar';
  @Input() backgroundColor: string = 'rgba(180, 180, 180, 0.2)';
// **

chartOption: EChartsOption={};

  constructor() { }

  ngOnInit(): void {
    debugger;
    this.chartOption  = {
      xAxis: {
        type: 'category',
        data: this.xAxisDate,
      },
      yAxis: {
  
      },
      series: [
        {
          data: this.chartDate,
          type: this.chartType,
          showBackground: true,
          backgroundStyle: {
            color: this.backgroundColor
          }
        },
  
      ],
    };
  }

 

}
