import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { RouterModule } from '@angular/router';
import { ChartComponent } from './chart.component';
import { MainChartComponent } from './main-chart/main-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    ChartComponent,
    MainChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],exports:[
    MainChartComponent
  ]
})
export class ChartModule { }
