import { TrafficManager } from './TrafficManager.js';

const trafficManager = new TrafficManager();

// Simulate updating traffic data
trafficManager.updateTraffic('Downtown', 100);
trafficManager.updateTraffic('Uptown', 50);

// Report on traffic volume
trafficManager.reportTraffic('Downtown');
trafficManager.reportTraffic('Uptown');
