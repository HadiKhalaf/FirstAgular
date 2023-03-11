import { Component, OnInit } from '@angular/core';
import { GetService } from '../service/get.service';
import { MoService } from '../service/mo.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit{
  constructor(private getService:GetService, private moService:MoService){
    
  }
  every:any;
  sea:string=''
  ngOnInit(): void {
    this.getService.getData().subscribe(res=>{
      this.every=res
    
    })
    this.moService.se.subscribe((az)=>{
      this.sea=az
    })
    this.moService.as.subscribe((con)=>{
      this.fil=con
    })
  }
  fil:string='All'


}
