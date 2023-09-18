import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Observable, Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CLASSES_AR } from 'src/modules/constant';
import { PollutionItem } from 'src/modules/pollution-item';
import { DataService } from '../services/data.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  // ...
} from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity:0
  }),
  animate('1s ease-in', style({opacity:1}))
])
const fadeIn = trigger('fadeIn',[enterTransition]);
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  animations:[fadeIn]
})
export class ReportsComponent implements OnInit {
pollutionList:PollutionItem[]=[];
offset:number=0
limit:number=4
showLoader:Boolean=false;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getPollutionList(this.offset,this.limit)
  }
  public ngAfterViewInit(): void {
   
  }

  generateRandomTitle():string{
    var ran =  Math.floor(Math.random() * 11);
    const lis:string[]=['النسيم 19344','النسيم 47922','العليا 2344','هجر 28495','الضاحية 4789','1245 طريق الملك فهد','حي النعمان3945 ','9435 طريق الخليج','8458 شارع أبي بكر الصديق','طريق الملك عبدالله 4345','طريق عمر ابن الخطاب 2664']
    return lis[ran]
   }

getPollutionList(offset:number,limit:number){
  this.showLoader = true;
  this.pollutionList=[];
this.dataService.getPollutionData(offset,limit).subscribe((e:any)=>{
e.forEach((element:any,index:number)=>{
  const obj:PollutionItem= new PollutionItem( offset+index,
     this.generateRandomTitle(), element.classes.map((i: any) => CLASSES_AR[i].name),
    element.image_path,  e.lon,  e.lat,100
  )
this.pollutionList.push(obj)
    

  
})
})
this.showLoader = false;
}

movePage(dir:boolean){
    
  this.offset += 4*(dir? 1:-1)
  this.limit += 4*(dir? 1:-1)
  if(this.offset>0 && this.limit<50)
  this.getPollutionList(this.offset,this.limit)

 }


}