import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidden-text',
  templateUrl: './hidden-text.component.html',
  styleUrls: ['./hidden-text.component.scss']
})
export class HiddenTextComponent implements OnInit {

  @Input() text : string = '';
  @Input() textSize : string = "12px";
  @Input() backgroundColor : string = "white";
  @Input() color : string = "red";
  @Input() textAlign : string = "center";
  
  constructor() { }

  ngOnInit(): void {}
}
