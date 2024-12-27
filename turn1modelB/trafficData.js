export const getTrafficData = () => {
    // Simulate fetching traffic data from an API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { intersection: 'A1', congestion: 80 },
                { intersection: 'B2', congestion: 50 },
                // Add more traffic data entries
            ]);
        }, 2000); // Simulate 2 seconds delay
    });
};
