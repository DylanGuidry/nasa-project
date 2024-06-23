import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MarsPhotos() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_SECRET_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPhotos(data.photos);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Mars Rover Photos</h1>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : photos.length > 0 ? (
        <div className="row">
          {photos.map(photo => (
            <div key={photo.id} className="col-md-4 mb-4">
              <div className="card">
                <img 
                  src={photo.img_src} 
                  className="card-img-top img-fluid" 
                  alt={`Mars Rover taken on ${photo.earth_date}`} 
                  style={{ height: '250px', objectFit: 'cover' }}
                  onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                />
                <div className="card-body">
                  <p className="card-text">Camera: {photo.camera.full_name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No photos found.</p>
      )}
    </div>
  );
}

export default MarsPhotos;