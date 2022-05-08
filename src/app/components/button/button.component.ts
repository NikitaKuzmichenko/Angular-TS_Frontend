import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text : string = "";
  @Input() backgroundColor : string = "white";
  @Input() color : string = "black";
  @Input() borderColor : string = "black";
  @Input() width : string =  "80px";
  @Input() height : string  = "25px";

  @Output() buttonCicked = new EventEmitter<void>();
  
  constructor() {}

  ngOnInit(): void {}

  clicked(event : Event): void {
    event.preventDefault();
    this.buttonCicked.emit();
  }
}
