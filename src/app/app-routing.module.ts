import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmergencyComponent } from './components/emergency/emergency.component';
import { HomeComponent } from './components/home/home.component';
import { UploadComponent } from './components/upload/upload.component';
import {ViewComponent} from './view/view.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'emergency', component: EmergencyComponent },
  { path: 'upload', component: UploadComponent },
  {path: 'view', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
