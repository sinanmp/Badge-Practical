const geoip = require('geoip-lite');

// Assuming you have the user's IP address
const ip = '231.113.123.123';

const geo = geoip.lookup(ip);
if (geo) {
  console.log("Latitude:", geo.ll[0]);
  console.log("Longitude:", geo.ll[1]);
} else {
  console.error("Unable to determine location for IP:", ip);
}
