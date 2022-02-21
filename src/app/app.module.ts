import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WaterComponent } from './water/water.component';
import { WaterWrapperComponent } from './water-wrapper/water-wrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    WaterComponent,
    WaterWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
