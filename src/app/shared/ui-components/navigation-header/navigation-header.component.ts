import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from 'src/app/core/service/basket.service';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss'],
})
export class NavigationHeaderComponent implements OnInit {
  public getScreenWidth: any;
  public getScreenHeight: any;
  cartitem!: number;

  constructor(private basketSvc: BasketService, private router:Router) {}

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.cartitem = this.basketSvc.getItems().length;
    this.basketSvc.itemsCart$.subscribe((item: any) => {
      this.cartitem = item;
    });
  }

  onclickCart() {
    if(this.cartitem > 0) 
    this.router.navigate(['/donation'])
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }
  

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
