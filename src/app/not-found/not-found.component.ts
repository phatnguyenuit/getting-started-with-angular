import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  url = '';
  queryParams = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.url = this.router.url;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.queryParams = JSON.stringify(queryParams, null, 2);
    });
  }
}
