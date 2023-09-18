import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getPollutionData(offset:number,limit:number){
    return this.http.get(environment.BASE_URL+`/api/pollutions/${offset}/${limit}`)
  }
  getPollutionItem(id:number){
    return this.http.get(environment.BASE_URL+`/api/pollution/${id}`)
  }
}
