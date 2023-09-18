import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Observable, Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MapDataService {

  constructor(private http: HttpClient) { }



   getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  

   loadMap(map_id:string,heatmap_mode:boolean): void {
    const map_type= heatmap_mode? environment.mapbox.heatmap_id: environment.mapbox.map_id
    var map:any;
    map = L.map(map_id).setView([0, 0], 1);
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/'+map_type+'/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}', {
      maxZoom: 20,
      id: 'hayaofwar',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: environment.mapbox.accessToken,
    }).addTo(map);
    return map;
  }


  moveToCurrentPosition(map:any){
    this.getCurrentPosition()
      .subscribe((position: any) => {
        map.flyTo([position.latitude, position.longitude], 14);

        const icon = L.icon({
          iconUrl: 'assets/images/marker-icon.png',
          shadowUrl: 'assets/images/marker-shadow.png',
          popupAnchor: [13, 0],

        });

        const marker = L.marker([position.latitude, position.longitude], { icon }).bindPopup('موقعك الحالي');
        marker.addTo(map)
        return map
      });
  }


  





  getDroneData(){
    return this.http.get(`https://api.mapbox.com/datasets/v1/hayaofwar/clcz1zo3b008i27psq8ec3iov/features?access_token=${environment.mapbox.accessToken}`)
  }
}
