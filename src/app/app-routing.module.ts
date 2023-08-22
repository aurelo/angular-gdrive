import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GdriveComponent } from './gdrive/gdrive.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "gdrive", component: GdriveComponent},
  {path: "", component: HomeComponent},
  {path: "**", component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
