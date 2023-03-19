import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JarvisMarchComponent } from './components/jarvis-march/jarvis-march.component';
import { PointInsideTriangleComponent } from './components/point-inside-triangle/point-inside-triangle.component';

@NgModule({
  declarations: [
    AppComponent,
    JarvisMarchComponent,
    PointInsideTriangleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
