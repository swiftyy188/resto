import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CallbackComponent } from './callback.component';
import { RestaurantComponent } from './restaurant/restaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
