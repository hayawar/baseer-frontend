import { ViewportScroller } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UIChart } from 'primeng/chart/chart';
import { CLASSES_AR } from 'src/modules/constant';
import { DataStatService } from '../services/data-stat.service';
import { DataService } from '../services/data.service';
import { MapDataService } from '../services/map-data.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @ViewChild('pchart') pChart!: UIChart
  performenceStats: any[] = []
  people: any[] = []
  databar: any;
  alt_map!: any;
  datadonught: any;
  chartOptions: any;
  heatmap!:any


  constructor(private statService: DataStatService,
    private router: Router, private viewportScroller: ViewportScroller, private elementRef: ElementRef) {

    this.performenceStats = this.statService.getPerformanceStat()
    this.people = this.statService.getPeople()
  }
  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.chartOptions = {
      scales: {
        x: {
          grid: {
            display: 'false'
          },
          ticks: {

            color: 'white',
            font: {
              family: 'Montserrat Arabic light', // Your font family
              size: 14,
            },
          }
        },
        y: {
          grid: {
            color: 'white'
          },

          ticks: {
            color: 'white',
            fontFamily: "Montserrat Arabic light",


          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'white',
            font: {
              family: 'Montserrat Arabic light', // Your font family
              size: 16,
            },
          }
        }
      }
    }
    this.initBarChart()
    this.initDonughtChart()
   

    


  }
  ngOnDestroy(): void {
    this.statService.resetPerformanceStat()

  }


  ngAfterViewInit() {

    var interval = setInterval(() => {
      this.performenceStats.forEach((element, index) => {
        var step = element.total / 10
        element.current += Math.floor(step)
        if (element.current >= element.total) {
          element.current = element.total
          clearInterval(interval);
        }
      });
    }, 100);

  }

  scrollTo(id: string) {
    (document.getElementById(id) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

  }

  initBarChart() {
    this.statService.getBarStats().subscribe(
      (e: any) => {
        this.databar = {
          labels: CLASSES_AR.map(e => e.name), datasets: [
            {
              label: 'مكتملة',
              backgroundColor: '#92F0D5',
              data: []
            },
            {
              label: 'قيد المعالجة',
              backgroundColor: '#57CAEB',
              data: []
            },
            {
              label: 'غير معيًنة',
              backgroundColor: '#F47574',
              data: []
            },



          ],
        }
        e.forEach((element: any, index: number) => {
          this.databar.datasets[0].data.push(element.Completed)
          this.databar.datasets[1].data.push(element.In_Progress)
          this.databar.datasets[2].data.push(element.Not_assigned)
        });

      }
    )
  }


  initDonughtChart() {
    this.statService.getPieStats().subscribe((e: any) => {

      this.datadonught = {
        labels: ['مكتملة', 'قيد المعالجة', 'غير معيًنة'],
        datasets: [
          {
            data: [e.Completed, e.In_Progress, e.Not_assigned],
            backgroundColor: [
              "#FF6384",
              "#57CAEB",
              "#FFCE56"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#57CAEB",
              "#FFCE56"
            ]
          }
        ]
      };

    })

  }


}