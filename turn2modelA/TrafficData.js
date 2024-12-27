export class TrafficData {
    constructor() {
        this.trafficRecords = new Map();
    }

    addRecord(location, volume) {
        this.trafficRecords.set(location, volume);
    }

    getVolume(location) {
        return this.trafficRecords.get(location) || 0;
    }
}
