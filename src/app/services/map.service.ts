import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  getRouteCoordinates(): number[][] {
    return [[13.23, 76.45], [12.12, 78.56]];
  }
}
