import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JarvisMarchComponent } from './components/jarvis-march/jarvis-march.component';
import { PointInsideTriangleComponent } from './components/point-inside-triangle/point-inside-triangle.component';

const routes: Routes = [  { path: 'jarwis-march', component: JarvisMarchComponent },
{ path: 'point-triangle', component: PointInsideTriangleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
