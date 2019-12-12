import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css']
})
export class EmergencyComponent implements OnInit, AfterViewInit {
  visualizer: HTMLVideoElement;
  streamingHasStarted: Boolean = false;
  constructor() { }

  ngOnInit() {
    if (!this.hasGetUserMedia()) {
      alert('Cannot handle webrtc!');
    }
  }

  hasGetUserMedia() {
    return !!(navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia);
  }

  ngAfterViewInit() {
    this.visualizer = <HTMLVideoElement>document.getElementById('visualizer');
  }

  startStreaming() {
    const constraints = {
      video: true,
      audio: true,
    };
    this.streamingAction(constraints);
    this.streamingHasStarted = true;
    this.visualizer.play();
  }

  stopStreaming() {
    this.visualizer.pause();
    this.streamingHasStarted = false;
    this.visualizer.srcObject = null;
  }

  streamingAction(constraints) {
    navigator.mediaDevices.getUserMedia(constraints)
    .then((stream: MediaStream) => {
      this.visualizer.srcObject = stream;
    });
  }
}
