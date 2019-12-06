import { Component, OnInit } from '@angular/core';
import * as leaf from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: any;
  spinner: Boolean = true;
  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.map = leaf.map('map', {
          center: [position.coords.latitude, position.coords.longitude],
          zoom: 10,
        });
        leaf.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 18,
        }).addTo(this.map);
        this.map.invalidateSize();
      });
    }
  }
}
