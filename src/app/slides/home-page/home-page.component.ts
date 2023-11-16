import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  homeArray:any[]=[0,];
  onScroll() {
    this.homeArray.push(0)
    console.log("scrolled!!");
  }

}
