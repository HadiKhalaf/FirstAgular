import { Injectable, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoService {

  constructor() { }
  se=new Subject<string>();

  em(st:string){
    this.se.next(st)
  }
  as=new Subject<string>();
  con(st:string){
    this.as.next(st)
  }

  
}
