import { Component } from '@angular/core';
import { FirebaseControlService, firebaseItemCard, FireItemCard, tItem } from "src/app/services/firebase-control.service";
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  address: string = 'items';
  item$: Observable<any[]> = this.fbS.t(this.address);
  itemArray: any[] = [];
  homeArray: any[] = [0,];

  constructor(private fbS: FirebaseControlService) {
    this.fbS.t(this.address).subscribe((r: any[]) => {
      this.itemArray = r;
      this.homeArray.push(r[0])
      console.log(r);
    })
  }

  onScroll() {

    console.log("scrolled!!");
    console.log(this.homeArray.length);
    console.log(this.itemArray);
    console.log(this.itemArray[this.homeArray.length]);
    if (this.homeArray.length < 4) {
      if (this.itemArray[this.homeArray.length] != undefined) {
        console.warn(this.itemArray[this.homeArray.length]);
        let x = this.itemArray[this.homeArray.length];
        this.homeArray.push(x);
        // this.itemArray.push(0);
        console.log(x);
        console.log(this.homeArray);
      }
    }
  }
}
