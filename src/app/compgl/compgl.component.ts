import { Component, OnInit } from '@angular/core';
import {QuestserviceService} from '../questservice.service';
import {Quest} from '../Quest';

@Component({
  selector: 'app-compgl',
  templateUrl: './compgl.component.html',
  styleUrls: ['./compgl.component.css']
})
export class CompglComponent implements OnInit {

  que: Quest[] = null;
  a = 'a';
  constructor(private service: QuestserviceService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.service.getVehiclesByColor(this.a).subscribe(n =>{
        this.que = n;
    });
  }
}
