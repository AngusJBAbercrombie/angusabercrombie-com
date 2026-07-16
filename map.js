// === PRECINCT 8 PROJECT MAP ===
// To add a new project, copy one object in the `projects` array and fill in the details.

const projects = [
  {
    lat: 42.401031,
    lng: -71.163409,
    number: 1,
    title: "No Turn on Red Signage — Brighton St @ Cross St",
    description: "Drivers headed eastbound on Cross St were unable to see the No Turn on Red sign at this intersection. Angus worked with the Department of Public Works to have a new sign installed, making this intersection, a crucial walking route for students headed to Winn Brook Elementary School, safer."
  },
  {
    lat: 42.402114,
    lng: -71.164453,
    number: 2,
    title: "Pothole Patching — Brighton St",
    description: "Residents in this neighborhood raised the issue of dangerous potholes. Angus made sure they got a response and escalated their concerns to get the most egregious holes patched within days."
  },
  {
    lat: 42.396481,
    lng: -71.169074,
    number: 3,
    title: "Community Path & Pedestrian Tunnel — Alexander Ave",
    description: "Angus has spoken up and voted repeatedly to keep the community path on track for funding this year and construction complete by the end of 2030. The idea behind this project is older than he is, and this safe route from our neighborhood to the new Middle and High School is long overdue."
  },
  {
    lat: 42.396655,
    lng: -71.174877,
    number: 4,
    title: "Belmont Center Overlay Zoning — Channing & Claflin",
    description: "This new zoning plan will allow modest, fiscally beneficial projects in Belmont Center, giving our neighborhood more options for where to eat and shop. Angus worked to ensure that this plan would enable developments that can bring down costs in our area and help shift tax burdens from our homeowners."
  }
];

// Custom animated pin
const pinIcon = (number) => L.divIcon({
  html: `
    <div class="map-pin-wrapper">
      <div class="map-pin-pulse"></div>
      <div class="map-pin">
        <span class="map-pin-number">${number}</span>
      </div>
    </div>`,
  className: '',
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -24]
});

// Initialise map
const map = L.map('precinct-map', {
  center: [42.3993, -71.1686],
  zoom: 15,
  scrollWheelZoom: false,
  zoomControl: true
});

// CartoDB Dark Matter Lite tiles — no API key required
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 20
}).addTo(map);

// Add project pins
projects.forEach(project => {
  L.marker([project.lat, project.lng], { icon: pinIcon(project.number) })
    .addTo(map)
    .bindPopup(`
      <div class="map-popup">
        <div class="map-popup-num">${project.number}</div>
        <strong>${project.title}</strong>
        <p>${project.description}</p>
      </div>
    `, { maxWidth: 300 });
});
