import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { MetricsTableComponent } from './components/metrics-table/metrics-table.component';
import { EmergencyComponent } from './components/emergency/emergency.component';
import { HomeComponent } from './components/home/home.component';
import { UploadComponent } from './components/upload/upload.component';
import { DragDropDirective } from './drag-drop.directive';
import {ChipsModule} from 'primeng/chips';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MetricsTableComponent,
    EmergencyComponent,
    HomeComponent,
    UploadComponent,
    DragDropDirective,
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ChipsModule,
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
