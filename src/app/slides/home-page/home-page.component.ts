import { Component } from '@angular/core';
import { FirebaseControlService, firebaseItemCard, FireItemCard, tItem } from "src/app/services/firebase-control.service";
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  address: string = 'test';
  item$: Observable<any[]> = this.fbS.t(this.address);
  itemArray: any[] = [];

  constructor(private fbS: FirebaseControlService) {

  }
  homeArray: any[] = [0,];
  onScroll() {
    // this.homeArray.push(0)
    console.log("scrolled!!");
    if (this.homeArray.length < 4) {
      if (this.itemArray[this.homeArray.length] != undefined) {
        console.warn(this.itemArray[this.homeArray.length]);
        let x = this.itemArray[this.homeArray.length];
        this.homeArray.push(x);
        console.log(this.homeArray);
        // this.homeArray.push(new fItem('test','undefindeedID'))
        // this.homeArray.push(this.itemArray[this.homeArray.length])
        // console.warn(this.homeArray[this.homeArray.length])
      }
    }
    // console.log("scrolled!!");
  }
}
