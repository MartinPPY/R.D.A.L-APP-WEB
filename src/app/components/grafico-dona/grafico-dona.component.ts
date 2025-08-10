import { Component, input, OnInit, ViewChild } from '@angular/core';
import { NgApexchartsModule } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";
import { AreaTrabajo } from '../../models/interfaces';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-grafico-dona',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './grafico-dona.component.html',
  styleUrl: './grafico-dona.component.scss'
})
export class GraficoDonaComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  chartOptions: ChartOptions = {
    series: [44, 55, 13, 43, 22, 36],
    chart: {
      type: "donut",
      width: 500,
      height: 500
    },
    labels: [],
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };

  ngOnInit(): void {
    const areasTrabajo: AreaTrabajo[] = JSON.parse(localStorage.getItem('areasTrabajo') || '')
    for (const area of areasTrabajo) {
      this.chartOptions.labels.push(area.nombre)
    }

  }

}
