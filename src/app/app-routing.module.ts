import { SecondBodyComponent } from './components/bodies/second-body/second-body.component';
import { BodyComponent } from './components/bodies/body/body.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "",pathMatch : "full", component : BodyComponent},
  {path : "second-page", component : SecondBodyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
