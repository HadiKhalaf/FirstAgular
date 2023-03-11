import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirec]'
})
export class DirecDirective {

  constructor(private element:ElementRef, private render:Renderer2) { }
  
  /* @HostBinding('style.color') l='pink' */
  @HostListener('mouseenter') me(){
    this.render.setStyle(this.element.nativeElement,'border','solid black')
    this.render.setStyle(this.element.nativeElement,'color','black')
    this.render.setStyle(this.element.nativeElement,'backgroundColor','white')
  }
  @HostListener('mouseleave') ml(){
    this.render.setStyle(this.element.nativeElement,'border','')
    this.render.setStyle(this.element.nativeElement,'color','white')
    this.render.setStyle(this.element.nativeElement,'backgroundColor','black')
  }

}
