import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { ItemCardComponent } from './components/item-Cards/item-card/item-card.component';
import { ItemCardDetailComponent } from './components/item-Cards/item-card-detail/item-card-detail.component';
import { ItemCardDialogComponent } from './components/item-Cards/item-card-dialog/item-card-dialog.component';
import { ItemCardListComponent } from './components/item-Cards/item-card-list/item-card-list.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './slides/home-page/home-page.component';
import { PageControlComponent } from './slides/page-control/page-control.component';
import { AccountComponent } from './slides/account/account.component';
import { SettingComponent } from './slides/setting/setting.component';
import { DrawBoardComponent } from './slides/draw-board/draw-board.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ItemCardDetailComponent,
    ItemCardDialogComponent,
    ItemCardListComponent,
    SignInComponent,
    NavBarComponent,
    HomePageComponent,
    PageControlComponent,
    AccountComponent,
    SettingComponent,
    DrawBoardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    DragDropModule,
    MatDialogModule,
    FormsModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
