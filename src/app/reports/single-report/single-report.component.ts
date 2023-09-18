import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as L from 'leaflet';
import { VirtualTimeScheduler } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MapDataService } from 'src/app/services/map-data.service';
import { CLASSES_AR } from 'src/modules/constant';
import { PollutionItem } from 'src/modules/pollution-item';

@Component({
  selector: 'app-single-report',
  templateUrl: './single-report.component.html',
  styleUrls: ['./single-report.component.scss']
})
export class SingleReportComponent implements OnInit {
  pollutionItem!: PollutionItem;
  item:any;
  id:any
  status!:string
  date!:string;
  time!:string
  map!:any;
  constructor(private route: ActivatedRoute,private router:Router,
    private dataService:DataService) { }

  ngOnInit(): void {
     this.getRandomDate()
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    

    this.id = this.route.snapshot.paramMap.get('id')
    this.dataService.getPollutionItem(this.id).subscribe((e:any)=>{
      this.getRandowmStatus()
      const obj:PollutionItem= new PollutionItem(this.id,
     e.title, e.classes.map((i: any) => CLASSES_AR[i].weight),
       e.image_path,  e.lon,  e.lat,100
     )
     this.pollutionItem=obj
    })
 

  }

 
  changeItem(dir:boolean){
    this.id= dir?  Number(this.id)+1:  Number(this.id)-1
    if( dir && this.id< 50)
    this.router.navigate(['/main/reports',this.id]);
    else if(!dir && this.id>0)
    this.router.navigate(['/main/reports',this.id]);

  }

  getRandowmStatus(){
    var ran =  Math.floor(Math.random() * 3);
    const lis:string[]=['البلاغ متكمل التنفيذ','البلاغ قيد التنفيذ','لم يتم تعيين البلاغ']
    this.status= lis[ran]
  }

   getRandomDate() {
    const maxDate = Date.now();
    const minDate = new Date(2020, 0, 1).getTime();
    const timestamp = Math.floor(minDate+ Math.random() * (maxDate-minDate));
    var d= new Date(timestamp)
    this.date= d.toLocaleDateString();
    this.time=d.toLocaleTimeString()
     
}



}
