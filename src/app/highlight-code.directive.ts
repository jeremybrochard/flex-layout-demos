import { AfterViewInit, Directive, ElementRef } from '@angular/core';

declare var hljs: any;

@Directive({
  selector: 'code[highlight]'
})
export class HighlightCodeDirective implements AfterViewInit {

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit() {
    hljs.highlightBlock(this.elRef.nativeElement);
  }

}
