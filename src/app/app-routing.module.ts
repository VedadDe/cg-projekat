import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JarvisMarchComponent } from './components/jarvis-march/jarvis-march.component';
import { PointInsideTriangleComponent } from './components/point-inside-triangle/point-inside-triangle.component';
import { PointsOrientationComponent } from './components/points-orientation/points-orientation.component';

const routes: Routes = [  { path: 'jarwis-march', component: JarvisMarchComponent },
{ path: 'point-triangle', component: PointInsideTriangleComponent},
{ path: 'points-orientation', component: PointsOrientationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
