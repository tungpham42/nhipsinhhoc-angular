import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-biorhythm-chart',
  templateUrl: './biorhythm-chart.component.html',
  styleUrls: ['./biorhythm-chart.component.css'],
})
export class BiorhythmChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;

  @Input() birthdate!: Date;
  @Input() targetDate!: Date;
  physicalData: number[] = [];
  emotionalData: number[] = [];
  intellectualData: number[] = [];
  dateLabels: string[] = [];

  ngOnInit() {
    this.calculateBiorhythm();
    this.initializeChart();
  }

  calculateBiorhythm() {
    const daysToDisplay = 30;
    const birthTime = this.birthdate.getTime();

    for (let i = -15; i <= 15; i++) {
      const currentDate = new Date(this.targetDate);
      currentDate.setDate(this.targetDate.getDate() + i);
      const currentTime = currentDate.getTime();
      const daysLived = Math.floor(
        (currentTime - birthTime) / (1000 * 60 * 60 * 24)
      );

      this.physicalData.push(
        Math.round(Math.sin((2 * Math.PI * daysLived) / 23) * 50 + 50)
      );
      this.emotionalData.push(
        Math.round(Math.sin((2 * Math.PI * daysLived) / 28) * 50 + 50)
      );
      this.intellectualData.push(
        Math.round(Math.sin((2 * Math.PI * daysLived) / 33) * 50 + 50)
      );
      this.dateLabels.push(currentDate.toISOString().split('T')[0]);
    }
  }

  initializeChart() {
    this.chartOptions = {
      chart: {
        type: 'spline',
      },
      title: {
        text: 'Chu kỳ sinh học',
      },
      xAxis: {
        categories: this.dateLabels,
        title: {
          text: 'Ngày',
        },
        crosshair: {
          color: '#000000', // Customize the crosshair color
          width: 1,
        },
      },
      yAxis: {
        title: {
          text: 'Phần trăm',
        },
        min: 0,
        max: 100,
        labels: {
          formatter: function () {
            return this.value + '%';
          },
        },
      },
      series: [
        {
          name: 'Sức khỏe',
          data: this.physicalData,
          type: 'spline',
          color: '#FF0000',
        },
        {
          name: 'Tình cảm',
          data: this.emotionalData,
          type: 'spline',
          color: '#0000FF',
        },
        {
          name: 'Trí tuệ',
          data: this.intellectualData,
          type: 'spline',
          color: '#00FF00',
        },
      ],
    };
  }
}
