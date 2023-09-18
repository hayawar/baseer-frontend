import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataStatService {
  performenceStats:any=[
    {text: 'إجمالي المناطق المغطاة',path:'assets/images/radar.png',total:23,current:0,anchor:'saudi-areas'},
    {text: 'عدد المساهمين',path:'assets/images/handshake.png',total:1899,current:0,anchor:'contributers-stat'},
    {text: 'إجمالي التشوهات المعالَجة  ', path:'assets/images/car-repair.png',total:2566,current:0,anchor:'classes-stat'},
    {text: 'إجمالي التشوهات المكتشفة', path:'assets/images/eye-scanner.png',total:7814,current:0,anchor:'classes-stat'},
  ]

  people:any[]=[

    {name:'قصي الصالح',role:'موظف بلدية',num:'563'},
    {name:'مها راجح ',role:'مواطنة',num:'213'},
    {name:'عبدالله علي ',role:'موظف بلدية',num:'100'},
    ]
  


    constructor(private http: HttpClient) { }


    getBarStats(){
      return this.http.get(environment.BASE_URL+`/api/stats/classes`)
    }
    getPieStats(){
      return this.http.get(environment.BASE_URL+`/api/stats/total`)
    }

  getPerformanceStat(){
    return this.performenceStats
  }
  getPeople(){
    return this.people;
  }
  resetPerformanceStat(){
    this.performenceStats= this.performenceStats.map((e:any)=>{

      var obj=e;
      obj.current=0
      return obj
    })
  }
  
}
