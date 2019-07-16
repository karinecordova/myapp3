import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.page.html',
  styleUrls: ['./segments.page.scss'],
})
export class SegmentsPage implements OnInit {
 categoria:any;
 texto:any;
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(ev: any ) {
    //this.texto=ev;
    this.categoria=ev.detail.value;
    console.log(this.categoria);
    if(this.categoria=="friends"){
      this.texto="Curso Ionic ";
    }
    if(this.categoria=="enemies"){
      this.texto="Des. de Apps Ionic ";
    }
  }
}
