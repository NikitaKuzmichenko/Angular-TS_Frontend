import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

const dipslayToTopBtnTrashHold = 20;
const dipslayToLastScrollBtnTrashHold = 500;

@Component({
  selector: 'app-window-navigator',
  templateUrl: './window-navigator.component.html',
  styleUrls: ['./window-navigator.component.scss']
})
export class WindowNavigatorComponent implements OnInit {

  @ViewChild('toTopBtn') toTopBtn!: ElementRef;
  @ViewChild('toLastPosBtn') toLastPosBtn!: ElementRef;

  private lastScollPos = 0;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void { }

  @HostListener('document:scroll', ['$event'])
  getScrollHeight(event: any) {
    let currentScollPos = this.document.documentElement.scrollTop;
    let posDifference = currentScollPos - this.lastScollPos;

    if (posDifference < 0) {
      posDifference *= -1;
    }

    if (posDifference > dipslayToLastScrollBtnTrashHold) {
      this.toLastPosBtn.nativeElement.style.display = "block";
    } else {
      this.toLastPosBtn.nativeElement.style.display = "none";
      this.lastScollPos = currentScollPos;
    }

    if (currentScollPos > dipslayToTopBtnTrashHold) {
      this.toTopBtn.nativeElement.style.display = "block";
    } else {
      this.toTopBtn.nativeElement.style.display = "none";
    }
  }

  scrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  returnToLastPos(): void {
    this.document.documentElement.scrollTop = this.lastScollPos;
  }
}

