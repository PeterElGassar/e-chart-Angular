import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'charts';


chartDate: any[] = [];
xAxisDate: any[] = [];
chartType: any = '';
 backgroundColor: string = '';

chartDate2: any[] = [];
xAxisDate2: any[] = [];
chartType2: any = '';
 backgroundColor2: string = '';





 ngOnInit(): void {
this.chartDate=[820, 932, 901, -170, 1290, 1330, 1320];
this.xAxisDate=['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
this.chartType='bar';
this.backgroundColor='rgba(180, 180, 180, 0.2)'

this.chartDate2=[1550, 932, 901, 170, 1290, 1630, 1320];
this.xAxisDate2=['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
this.chartType2='line';
this.backgroundColor2='rgba(180, 180, 180, 0.6)'

}
}
