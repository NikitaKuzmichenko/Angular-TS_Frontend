import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  selectedCategoryId: number = NaN;
  certificateSelector: string = "";

  constructor(private route: ActivatedRoute) {
    this.route.queryParams
      .subscribe(params => {

        const category = params['categoryId'];
        if (category !== undefined) {
          this.selectedCategoryId = category;
        }

        const certificate = params['certificateSelector'];
        if (certificate !== undefined) {
          this.certificateSelector = certificate;
        }
      }
    );
  }

  ngOnInit(): void {

  }

  categorySelectedHandler(id: number): void {
    this.selectedCategoryId = id;
  }

  certificateCelectedHandler(filter: string): void {
    this.certificateSelector = filter
  }

}
