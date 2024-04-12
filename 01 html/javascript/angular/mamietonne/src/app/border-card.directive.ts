import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]',
  standalone: true
})
export class BorderCardDirective {
  defaultColor = "black"
  // Par default la proprieter doit sappelr comme le selecteur:
  @Input() appBorderCard: string|undefined;
  // Si on souhaite changer le nom de la proprieter :
  @Input("appBorderCard") borderColor: string|undefined; 
  constructor(private el: ElementRef) { 
    this.defaultStyle()
  }
  defaultStyle(){
    this.setShadow(5,5,10,2,this.defaultColor);
    this.setBorder(2,this.defaultColor);
  }
  
  private setShadow(x:number,y:number,blur:number,radius:number,color:string){
    this.el.nativeElement.style.boxShadow = `${x}px ${y}px ${blur}px ${radius}px ${color}`;
  }
  private setBorder(size:number,color:string){
    this.el.nativeElement.style.border = `${size}px solid ${color}`;
  }
  @HostListener("mouseenter") onMouseEnter(){
    console.log(this.borderColor);

    this.setBorder(2,this.borderColor||"green");
    this.setShadow(5,5,20,2,this.borderColor||"green");
  }
  @HostListener("mouseleave") onMouseLeave(){
    // Meme valeur que le constructor :
    this.defaultStyle()
  }
}
