import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
  title: string = "Appletwo";
  // iconImgURL: string = "https://appletwo.ca/wp-content/uploads/2023/03/AppleTwo_Full_Logo-removebg-preview.png";
  
  navbarGidContainer: any = [];
  navExpanded = false;
  navHeight = '0px';
  itemArray:navItem [] = [];
  constructor(){
    this.itemArray.push(new navItem('Home','home','home'));
    this.itemArray.push(new navItem('Account','person','account'));
    this.itemArray.push(new navItem('Setting','settings','setting'));
    this.itemArray.push(new navItem('Neeeew :-)','folder','pageControl'));
  }

  expanNavbar(inputDiv: any,triggerArea:any) {
    // inputDiv.style.height = this.navExpanded ? '0px' : 'auto';
    inputDiv.style.height = this.navExpanded ? '0px' : '100vh';
    triggerArea.style.height = this.navExpanded ? '0vh' : '100vh';
    triggerArea.style.display = this.navExpanded ? 'none' : 'flex';
    inputDiv.style.opacity  = this.navExpanded ? '0' : '1';
    this.navExpanded = this.navExpanded ? false : true;
  }

  navBarClick(inputDiv: any) {
    inputDiv.classList.toggle("change");
  }
}


export class navItem {
  displayName:string;
  iconName:string;
  url:string;
  constructor(displayName:string,iconName:string,url:string){
    this.displayName = displayName;
    this.iconName = iconName;
    this.url = url;
  }
}