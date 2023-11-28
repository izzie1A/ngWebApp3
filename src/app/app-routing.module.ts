import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './slides/home-page/home-page.component';
import { SettingComponent } from './slides/setting/setting.component';
import { AccountComponent } from './slides/account/account.component';
import { PageControlComponent } from './slides/page-control/page-control.component';
import { DrawBoardComponent } from './slides/draw-board/draw-board.component';


const routes: Routes = [
  { path: '', component: DrawBoardComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'account', component: AccountComponent },
  { path: 'pageControl', component: PageControlComponent },
  { path: 'drawBoard', component: DrawBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
