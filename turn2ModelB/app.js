// app.js
import { IotSensorModule } from './IotSensorModule.js';

const sensorModule = new IotSensorModule();

// Integrate sensor module and start simulating sensor data
sensorModule.simulateSensorData();
sensorModule.trafficSystem.processTrafficData();
