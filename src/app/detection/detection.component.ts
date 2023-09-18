import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { environment } from 'src/environments/environment';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-detection',
  templateUrl: './detection.component.html',
  styleUrls: ['./detection.component.scss']
})
export class DetectionComponent implements OnInit{

  
  uploadedImage!: File;

  dbImage: any;
  postResponse: any;
  successResponse!: string;
  image: any;
  isImageUploaded:boolean=false
  isImageReady:boolean=false;
  local_server= 'http://127.0.0.1:5000/'
  img_path=`${environment.BASE_FOLDER}/img/`
  encoded=""
constructor(private httpClient:HttpClient,private fileService:FileUploadService){}
  ngOnInit(): void {
    // window.open('https://colab.research.google.com/drive/1nCCDavlwAREJQ9GuFrUExjc-tMAV7FTk?usp=sharing','_blank')
  }
  
  public onImageUpload(event:any) {
    this.uploadedImage = event.target.files[0];
    const fn=event.target.files[0].name
    console.log(this.uploadedImage)
   this.convertFile(event.target.files[0]).subscribe((e:any)=>{
    this.fileService.uploadToSpace(e,fn)

   });

    this.img_path+=fn
  }


  imageUploadAction() {
    const imageFormData = new FormData();

    imageFormData.append('filename', this.uploadedImage.name);
    imageFormData.append('filename', this.uploadedImage.name);
this.httpClient.post("https://asalhi85-demosmartathon.hf.space/run/predict",imageFormData,

{headers: { "Content-Type": "application/json" },observe:'response'
})

    }

  viewImage() {
    this.httpClient.get(`${environment.BASE_URL}/get/image/info/` + this.image)
      .subscribe(
        res => {
          this.postResponse = res;
          this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
        }
      );
  }



  convertFile(file : File)  {
const observable= new Observable((subscriber:Subscriber<any>)=>this.readFile(file,subscriber))
return observable;
  }




  readFile(file: File, subscriber: Subscriber<any>) {
    const fileredeaer= new FileReader();
    fileredeaer.readAsDataURL(file)
    fileredeaer.onload=()=>{
      subscriber.next(fileredeaer.result)
      subscriber.complete()
    }
    fileredeaer.onerror=()=>{
subscriber.error()
subscriber.complete()
    }
   
  }
}