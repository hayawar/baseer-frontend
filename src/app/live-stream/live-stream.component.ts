import { Component, OnInit, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import { Observable, Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Drone } from 'src/modules/drone';
import { MapDataService } from '../services/map-data.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  // ...
} from '@angular/animations';

// const enterTransition = transition(':enter', [
//   style({
//     opacity:0
//   }),
//   animate('1s ease-in', style({opacity:1}))
// ])
// const fadeIn = trigger('fadeIn',[enterTransition]);

const fadeInOut = trigger(
  'fadeInOut',[
    transition('void => *',[
      style({opacity:0}),
      animate('1s ease-out'),
    ]),
    transition('* => void',[animate('5ms ease-out'),style({opacity:0})])
  ]
);
const movmentAnimation = trigger('movementAnimation',[
  transition('* => *', [  query('.reporting-map', animate(1000, style({opacity:0}))),]),


])

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.scss'],
  animations:[fadeInOut]
})
export class LiveStreamComponent implements OnInit {
  map: any;
  currentDrone!:Drone
  viewFeed:boolean=false
  trans:boolean=false
  id: number=0;


  constructor(private mapDataService: MapDataService) { }

  ngOnInit(): void {
    this.map= this.mapDataService.loadMap('map-leaf',false);
    
  }
  public ngAfterViewInit(): void {
   this.mapDataService.moveToCurrentPosition(this.map);
   this.addDroneMarkers();

  }




  private addDroneMarkers() {
    this.mapDataService.getDroneData().subscribe((e: any) => {
      e.features.forEach((element: any) => {
        const icon = L.icon({
          iconUrl: 'assets/images/drone_icon.png',
          iconSize: [64, 64],
          popupAnchor: [13, 0],

        });

        const marker = L.marker([element.geometry.coordinates[1], element.geometry.coordinates[0]], { icon }).bindPopup(element.properties.drone_type);
        marker.addTo(this.map).on('mousedown',(event)=>{this.displayDroneSpecs(element,event)})

      });

    })
  }



  displayDroneSpecs(element:any,event:L.LeafletMouseEvent){
    this.id= Math.floor(Math.random() * 4)
    this.currentDrone=element.properties
  }


  toggleFeed(){
    this.viewFeed= !this.viewFeed
  }
  printlog(){this.trans= true;
     console.log("sbdhshjshj ")
  }
}