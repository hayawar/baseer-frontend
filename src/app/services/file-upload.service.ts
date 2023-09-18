import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http:HttpClient) { }
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.BASE_URL}/api/upload/`, formData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this.http.request(req);
  }

getFiles():Observable<any>{

return this.http.get(`${environment.BASE_URL}/files`);
}


uploadToSpace(encoded:string,name:string){
 let data= JSON.stringify({
		data: [
			name,
		encoded,
			0.5,
		]
	})
console.log("reqest is:   ",data)
  return this.http.post("https://asalhi85-demosmartathon.hf.space/run/predict", data, 
  {headers: { "Content-Type": "application/json" }, 
  observe: 'response' })
  .subscribe((response) => {
    if (response.status === 200) {
      console.log("yaaaay success: ",response)
  
  
    } else {
     console.log("some error")
    }
  }
  );
}

}