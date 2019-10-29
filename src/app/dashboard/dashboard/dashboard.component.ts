import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  lineChartData: any
  lineChartOptions: any
  pieChartData: any
  pieChartOptions: any

  constructor() {
    this.lineChartOptions = {
      title: {
        display: true,
        text: 'Asset History',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    }

    this.lineChartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "#4bc0c0"
        },
        {
          label: "Second Dataset",
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: "#565656"
        }
      ]
    }

    this.pieChartOptions = {
      title: {
        display: true,
        text: 'Pie Chart',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    }

    this.pieChartData = {
      labels: ["A", "B", "C"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    }
  }

  ngOnInit() {}

  selectData(event: any) {
    console.log('data', event)
  }
}
