import { Component, OnInit } from '@angular/core';
import { Layouts } from './core/enums/layout-enum';
import { Router, RoutesRecognized } from '@angular/router';
import { HomePageService } from './core/service/home-page.service';
import { TopHeaderService } from './core/service/top-header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  Layouts = Layouts;
  layout!: Layouts;
  title = 'matw-project';
  vistedLayout!: Layouts;


  constructor(private router: Router, private homeSvc: HomePageService, private topHeaderService: TopHeaderService) { }

  ngOnInit(): void {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        if (this.vistedLayout && this.vistedLayout !== this.layout) {
          this.layout = data.state.root.children[0].data['layout'];
        }
        else {
          this.layout = data.state.root.children[0].data['layout'];
          this.vistedLayout = this.layout;
        }
      }
    });
    this.getCurrencyRate();
  }

  getCurrencyRate() {
    this.homeSvc.getCurrencyRate().subscribe((resp: any) => {
      this.topHeaderService.setRateData(resp.data);
    });
  }
}
