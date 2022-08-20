import { MainChartComponent } from './main-chart/main-chart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'parent',
    component: MainChartComponent,  
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
