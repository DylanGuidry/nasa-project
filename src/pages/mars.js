import React, { useState, useEffect } from 'react';

function MarsPhotos() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_SECRET_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPhotos(data.photos);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Ensure loading is set to false even if there's an error
      });
  }, []);

return (
  <div>
    <h1>Mars Rover Photos</h1>
    <div>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="text-lg font-semibold inline-block mx-1 animate-pulse">
            🚀 Loading Mars Data
            <span className="inline-block mx-1 animate-pulse">.</span>
            <span className="inline-block mx-1 animate-pulse delay-150">.</span>
            <span className="inline-block mx-1 animate-pulse delay-300">.</span>
          </div>
        </div>
      ) : photos.map(photo => (
        <div key={photo.id}>
          <img 
            src={photo.img_src} 
            alt={`Mars Rover taken on ${photo.earth_date}`} 
            style={{ width: '100%' }} 
            onError={(e) => { e.target.style.display = 'none'; }} // Hide image if it fails to load
          />
          <p>Camera: {photo.camera.full_name}</p>
        </div>
      ))} : (
        <p>No photos found.</p>
        )
    </div>
  </div>
);
}

export default MarsPhotos;
