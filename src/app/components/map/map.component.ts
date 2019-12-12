import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as leaf from 'leaflet';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  map: any;
  spinner: Boolean = true;
  routeCoordinates: number[][];
  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.routeCoordinates = this.mapService.getRouteCoordinates();
  }

  ngAfterViewInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.map = leaf.map('map', {
          center: [position.coords.latitude, position.coords.longitude],
          zoom: 10,
        });
        leaf.tileLayer('http://192.168.102.192:8080/styles/klokantech-basic/{z}/{x}/{y}.png', {
          minZoom: 10,
          maxZoom: 15,
          crossOrigin: true,
        }).addTo(this.map);
        leaf.circle([position.coords.latitude, position.coords.longitude], {
          radius: 1000,
          color: 'red',
          fillOpacity: true,
        }).addTo(this.map);
        const route = leaf.polyline(this.routeCoordinates, {
          color: 'blue'
        }).addTo(this.map);
        this.map.fitBounds(route.getBounds());
        this.map.invalidateSize();
      });
    }
  }
}
