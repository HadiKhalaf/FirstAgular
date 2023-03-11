import { Component, Input } from '@angular/core';
import { MoService } from '../service/mo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private moService:MoService){
    
  }
  search:string='';
  onc(){
    this.moService.em(this.search)
  }
}
