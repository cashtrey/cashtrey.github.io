
// My monitor is big, so I'm sorry if the map is too big when you open it! That was helpful for me though

let bridges = [
    {"name": "Verrazano-Narrows Bridge", "cityState": "New York, NY", "length": "1298.4", "coordinates": [40.6066, -74.0447]},
    {"name": "Golden Gate Bridge", "cityState": "San Francisco and Marin, CA", "length": "1280.2", "coordinates": [37.8199, -122.4783]},
    {"name": "Mackinac Bridge",	"cityState": "Mackinaw and St Ignace, MI", "length": "1158.0", "coordinates": [45.8174, -84.7278]},
    {"name": "George Washington Bridge", "cityState": "New York, NY and New Jersey, NJ", "length": "1067.0", "coordinates": [40.8517, -73.9527]},
    {"name": "Tacoma Narrows Bridge", "cityState": "Tacoma and Kitsap, WA", "length": "853.44", "coordinates": [47.2690, -122.5517]}
] // I put all the data into this array, made it pretty easy to work with

let bridgeIcon = L.icon({ // creates the icon
    iconUrl: 'bridge.png', // pulls the photo for the icon
    iconSize: [50, 50], // size of the icon
});

let longestBridgeIcon = L.icon({ // another icon for the longest bridge, this one is yellow/gold
    iconUrl: 'longBridge.png',
    iconSize: [50, 50], // size of the icon
});

let usaCoordinates = [39.8282, -98.5795] // https://latitude.to/articles-by-country/us/united-states/4266/geographic-center-of-the-contiguous-united-states
let zoomLevel = 4 // seems to show the whole country pretty well

let map = L.map('bridge-map').setView(usaCoordinates, zoomLevel) // creates the map with the correct view

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // using the same tileLayer as before, not broke-no need to fix

bridges.forEach( function(bridge) { // loops through bridges array
    L.marker(bridge.coordinates, {icon: bridgeIcon})
        .bindPopup(`${bridge.name}<br>Span: ${bridge.length} meters`)
        .addTo(map)
    // creates a marker for each bridge, uses the bridgeIcon I created, has a popup that gives some info about the bridge. And then adds it to the map
})

let currentLongest = bridges[0] // sets variable to find the longest bridge, the first one just happens to be the longest

bridges.forEach(function(bridge) { // loops through bridges
    if (bridge.length > currentLongest) { // if the current bridge is longer, it is the new current longest
        currentLongest = bridge
    }
})

L.marker(currentLongest.coordinates, {icon: longestBridgeIcon}).bindPopup(`${currentLongest.name}<br>Span: ${currentLongest.length} meters`).addTo(map)
// longest bridge gets a special marker with a special icon

// Chart time!

let canvas = document.querySelector('#bridge-chart') // selects the element with the bridge-chart id
let context = canvas.getContext('2d')

let bridgeNames = [] // empty array to be filled with bridge names

bridges.forEach(function(bridge) { // loops through bridges
    bridgeNames.push(bridge.name) // adds each name to the array
})

let bridgeLengths = [] // empty array to be filled with bridge lengths

bridges.forEach(function(bridge) {
    bridgeLengths.push(bridge.length) // adds each length to the array
})


let chart = new Chart(context, { // new chart
    type: 'bar', // still using a bar chart, good type of chart for this
    data: {
        labels: bridgeNames, // uses the bridgeNames array I created for the labels
        datasets: [{
            label: 'Bridge Length (meters)', // sets the label
            data: bridgeLengths, // uses the bridgeLengths array I created for the data of the chart
        }
        ]
    }
})