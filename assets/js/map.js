document.addEventListener("DOMContentLoaded", (event) => {
  // Parse URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const ll = urlParams.get("ll");

  // Validate and parse 'll' parameter
  if (!ll) {
    alert("Missing ll parameter");
    return;
  }

  const [lat, lon] = ll.split(",").map(Number);

  if (isNaN(lat) || isNaN(lon)) {
    alert("Invalid coordinates");
    return;
  }

  // Initialize map
  const map = L.map("map").setView([lat, lon], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // Create popup content with buttons
  const popupContent = `
    <div style='text-align:center'>
    <button onclick="openInAppleMaps(${lat},${lon})">Open in Apple Maps</button><br>
    <button onclick="openInGoogleMaps(${lat},${lon})">Open in Google Maps</button>
    </div>
`;

  // Create a popup with options to prevent closing
  const popup = L.popup({
    closeOnClick: false,
    autoClose: false,
    closeButton: false,
    offset: [0, -5], // Offset the popup above the marker
  }).setContent(popupContent);

  // Add marker to the map
  const marker = L.marker([lat, lon]).addTo(map);

  // Bind the popup to the marker
  marker.bindPopup(popup);

  // Open the popup
  marker.openPopup();

  // Functions to open in Apple Maps or Google Maps
  window.openInAppleMaps = function (lat, lon) {
    window.open(`http://maps.apple.com/?ll=${lat},${lon}`);
  };

  window.openInGoogleMaps = function (lat, lon) {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`
    );
  };
});
