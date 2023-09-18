import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'livefeed',
  templateUrl: './livefeed.component.html',
  styleUrls: ['./livefeed.component.scss']
})
export class LivefeedComponent implements OnInit {
  @Input()id!: number;
name:string | undefined;
vids:string[]=[
  "livedetect2.mp4",
  "livedetect3.mp4",
  "livedetect1.mp4",
  "livedetect.mp4"
]


  @ViewChild('vid', { static: true })
  vid!: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.name)
   this.id= changes['id'].currentValue
this.name=this.vids[this.id]
this.vid.nativeElement.pause();
this.vid.nativeElement.children[0].src=`assets/images/${this.name}`
this.vid.nativeElement.load();
this.vid.nativeElement.play();
  }


}
