// IotSensorModule.js
import { TrafficSystem } from './TrafficSystem.js';

export class IotSensorModule {
    constructor() {
        this.trafficSystem = new TrafficSystem();
    }

    // Simulate IoT sensor data arrival
    simulateSensorData() {
        const sensorLocations = ['Main Street', 'Broadway', 'Park Avenue'];
        const dummyData = [150, 120, 80];
        for (let i = 0; i < sensorLocations.length; i++) {
            this.trafficSystem.registerSensorData(sensorLocations[i], dummyData[i]);
        }
    }
}
