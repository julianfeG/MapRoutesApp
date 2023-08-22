import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWFuZmVnMTIiLCJhIjoiY2xqMzRoeDIyMWl0YjN2cjFheXZmYTNweSJ9.xYAJSqBcLaeyPSjKMyD9KQ';

if(!navigator.geolocation) {
  alert('Navegador no soparta la Geolocalización');
  throw new Error('Navegador no soparta la Geolocalización');
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
