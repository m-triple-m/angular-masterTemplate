import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userChartData;
  userDataReady = false;
  constructor(public userService: UserService) {}

  ngOnInit(): void {}

  fetchUserData() {
    this.userService.getAll().subscribe((data) => {
      this.prepareUserData(data);
    });
  }

  prepareUserData(data) {
    this.userChartData.ploData = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
      {
        data: [180, 480, 770, 90, 1000, 270, 400],
        label: 'Series C',
        yAxisID: 'y-axis-1',
      },
    ];
    this.userChartData.labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ];
    this.userChartData.optionslineChartOptions = {
      responsive: true,
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        xAxes: [{}],
        yAxes: [
          {
            id: 'y-axis-0',
            position: 'left',
          },
          {
            id: 'y-axis-1',
            position: 'right',
            gridLines: {
              color: 'rgba(255,0,0,0.3)',
            },
            ticks: {
              fontColor: 'red',
            },
          },
        ],
      },
      annotation: {
        annotations: [
          {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: 'March',
            borderColor: 'orange',
            borderWidth: 2,
            label: {
              enabled: true,
              fontColor: 'orange',
              content: 'LineAnno',
            },
          },
        ],
      },
    };

    this.userChartData.legend = true;
    this.userChartData.chartType = 'line';
  }
}
