import { Component, Input, OnInit } from '@angular/core';
import { MoService } from '../service/mo.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{
  constructor(private moService:MoService){

  }
  ngOnInit(): void {
 
  }
  filt:string='All';
  onch(){
    this.moService.con(this.filt)
  }


  
}
