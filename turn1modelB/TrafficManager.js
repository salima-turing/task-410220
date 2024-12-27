import { TrafficData } from './TrafficData.js';

export class TrafficManager {
    constructor() {
        this.data = new TrafficData();
    }

    updateTraffic(location, volume) {
        this.data.addRecord(location, volume);
        console.log(`Updated traffic at ${location}: ${volume}`);
    }

    reportTraffic(location) {
        const volume = this.data.getVolume(location);
        console.log(`Current traffic volume at ${location}: ${volume}`);
    }
}
