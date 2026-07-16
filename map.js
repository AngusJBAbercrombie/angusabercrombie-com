// === PRECINCT 8 PROJECT MAP ===
// To add a new project, copy one object in the `projects` array below and fill in the details.

const projects = [
  {
    lat: 42.38785,
    lng: -71.17230,
    title: "No Turn on Red Signage — Brighton St @ Cross St",
    description: "Drivers headed eastbound on Cross St were unable to see the No Turn on Red sign at this intersection. Angus worked with the Department of Public Works to have a new sign installed, making this intersection, a crucial walking route for students headed to Winn Brook Elementary School, safer."
  },
  {
    lat: 42.38650,
    lng: -71.17550,
    title: "Pothole Patching — Brighton St",
    description: "Residents in this neighborhood raised the issue of dangerous potholes. Angus made sure they got a response and escalated their concerns to get the most egregious holes patched within days."
  },
  {
    lat: 42.38530,
    lng: -71.17820,
    title: "Community Path & Pedestrian Tunnel — Alexander Ave",
    description: "Angus has spoken up and voted repeatedly to keep the community path on track for funding this year and construction complete by the end of 2030. The idea behind this project is older than he is, and this safe route from our neighborhood to the new Middle and High School is long overdue."
  },
  {
    lat: 42.39560,
    lng: -71.17690,
    title: "Belmont Center Overlay Zoning — Channing & Claflin",
    description: "This new zoning plan will allow modest, fiscally beneficial projects in Belmont Center, giving our neighborhood more options for where to eat and shop. Angus worked to ensure that this plan would enable developments that can bring down costs in our area and help shift tax burdens from our homeowners."
  }
];

// Custom pin using site colours
const pinSvg = (color) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
    <path d="M14 0C6.27 0 0 6.27 0 14c0 9.33 14 22 14 22S28 23.33 28 14C28 6.27 21.73 0 14 0z" fill="${color}" stroke="#fff" stroke-width="1.5"/>
    <circle cx="14" cy="14" r="5" fill="#fff"/>
  </svg>`;

const pinIcon = (color) => L.divIcon({
  html: pinSvg(color),
  className: '',
  iconSize: [28, 36],
  iconAnchor: [14, 36],
  popupAnchor: [0, -38]
});

// Initialise map centred on Precinct 8
const map = L.map('precinct-map', {
  center: [42.389, -71.175],
  zoom: 15,
  scrollWheelZoom: false  // prevent accidental zoom when scrolling the page
});

// OpenStreetMap tiles — no API key needed
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19
}).addTo(map);

// Add project pins
projects.forEach(project => {
  L.marker([project.lat, project.lng], { icon: pinIcon('#2D1B69') })
    .addTo(map)
    .bindPopup(`
      <div class="map-popup">
        <strong>${project.title}</strong>
        <p>${project.description}</p>
      </div>
    `, { maxWidth: 280 });
});
