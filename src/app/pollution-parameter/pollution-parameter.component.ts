import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { PollutionItem } from 'src/modules/pollution-item';
import { MapDataService } from '../services/map-data.service';

@Component({
  selector: 'pollution-parameter',
  templateUrl: './pollution-parameter.component.html',
  styleUrls: ['./pollution-parameter.component.scss']
})
export class PollutionParameterComponent implements OnInit {
  @Input()pollution_item!:PollutionItem
  heatmap: any;
  pollution_effects=[
    {icon:'recycle.png',percent:85},
    {icon:'trash.png',percent:35},
    {icon:'danger.png',percent:63},
    {icon:'rad.png',percent:43}
  ]
  percent_list=[
    87,67,54,29
  ]

  constructor(    private mapService:MapDataService,) { }

  ngOnInit(): void {
    this.heatmap= this.mapService.loadMap('heatmap',true);
  }

  ngAfterViewInit() {

this.moveToLocation();
this.addPollutionMarker()
  }
  moveToLocation(){
    this.heatmap.flyTo([this.pollution_item.lat, this.pollution_item.lon], 16);
    this.addPollutionMarker()
  }
  private addPollutionMarker() {
   {
        const icon = L.icon({
          iconUrl: 'assets/images/pollution-marker.png',
          iconSize: [64, 64],
          popupAnchor: [13, 0],
  
        })
        const marker = L.marker([this.pollution_item.lat, this.pollution_item.lon], { icon })
        marker.addTo(this.heatmap).on('mousedown',(event)=>{})
  
      }
  }
  map(map: any) {
    throw new Error('Method not implemented.');
  }

}
