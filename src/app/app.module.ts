import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTrainComponent } from './view-train/view-train.component';
import { ViewRailComponent } from './view-rail/view-rail.component';

const appRoutes:Routes=[
  {
    path:"",component:ViewTrainComponent
  },
  {
    path:"view",component:ViewRailComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewTrainComponent,
    ViewRailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
