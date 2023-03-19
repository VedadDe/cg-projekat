import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JarvisMarchComponent } from './components/jarvis-march/jarvis-march.component';
import { PointInsideTriangleComponent } from './components/point-inside-triangle/point-inside-triangle.component';
import { PointsOrientationComponent } from './components/points-orientation/points-orientation.component';

@NgModule({
  declarations: [
    AppComponent,
    JarvisMarchComponent,
    PointInsideTriangleComponent,
    PointsOrientationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
