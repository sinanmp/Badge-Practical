// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = '5ae2e3f221c38a28845f05b694726732675481e126b1f31406427cab';
const searchQuery = 'Paris';

// Function to search for a place by name
function searchPlaceByName(placeName) {
  fetch(`http://api.opentripmap.com/0.1/en/places/geoname?name=${encodeURIComponent(placeName)}&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      const place = data;
      console.log(place)
      if (place) {
        getNearbyTouristPlaces(place.lat, place.lon);
      } else {
        console.log('No places found with the name:', placeName);
      }
    })
    .catch(error => {
      console.error('Error searching for places:', error);
    });
}

// Function to get nearby tourist places
function getNearbyTouristPlaces(lat, lon) {
  fetch(`http://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=${lon}&lat=${lat}&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      // Filter out tourist places
      const touristPlaces = data.features.filter(place => {
        return place.properties.kinds.includes("tourist_attraction");
        // Adjust the condition based on the properties that indicate a tourist place
      });

      displayResults(touristPlaces);
    })
    .catch(error => {
      console.error('Error fetching nearby places:', error);
    });
}

// Function to display search results
function displayResults(places) {
  console.log("Tourist Places:");
  console.log(places)
//   places.forEach(place => {
//     console.log(place.properties.name);
//   });
}

// Call the function to search for Kondotty by name
searchPlaceByName(searchQuery);
