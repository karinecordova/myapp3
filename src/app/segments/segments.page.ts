import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.page.html',
  styleUrls: ['./segments.page.scss'],
})
export class SegmentsPage implements OnInit {
 categoria:any;
 texto:any;
 imagem:any;
 habilitaimg:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(ev: any ) {
    //this.texto=ev;
    this.categoria=ev.detail.value;
    //console.log("Função", ev);
    if(this.categoria=="p01"){
      this.habilitaimg=true;
      this.texto="Curso Ionic ";
      this.imagem="online.jpg";
    }
    if(this.categoria=="p02"){
      this.habilitaimg=true;
      this.texto="Des. de Apps Ionic ";
      this.imagem="teste.jpg";
    }
  }
}
