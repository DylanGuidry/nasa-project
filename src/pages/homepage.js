import React, { useEffect, useState } from 'react';
import space from '../images/polar-lights-5858656_1920.jpg';
import space2 from '../images/pexels-philippedonn-1169754.jpg';
import space3 from '../images/pexels-pixabay-73873.jpg';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
  const [data, setData] = useState(null);
  const [epicData, setEpicData] = useState(null);
  const [marsData, setMarsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_SECRET_KEY}`)
        .then(response => response.json())
        .then(data => setData(data)),

      fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${process.env.REACT_APP_SECRET_KEY}`)
        .then(response => response.json())
        .then(data => setEpicData(data[0])),

      fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_SECRET_KEY}`)
        .then(response => response.json())
        .then(data => setMarsData(data.photos[0]))
    ]).then(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="text-lg font-weight-bold d-inline-block m-1">
          🚀 Loading Space Data...
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
      <div className="d-flex justify-content-around">
        <div className="m-5 w-50 d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
          <img className="m-3 rounded shadow-lg" src={space} alt="space" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
        </div>
        <div className="m-5 w-50 d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
          <img className="m-3 rounded shadow-lg" src={space2} alt="space" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
        </div>
        <div className="m-5 w-50 d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
          <img className="m-3 rounded shadow-lg" src={space3} alt="space" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
        </div>
      </div>
      <div className="nasa-history m-5 text-center" style={{ margin: "0 auto" }}>
        <h2>About NASA</h2>
        <p>
          The National Aeronautics and Space Administration (NASA) was established in 1958 in response to the Soviet Union's Sputnik launch, marking the start of the space race. NASA's mission is to pioneer the future in space exploration, scientific discovery, and aeronautics research. Over the decades, NASA has conducted numerous missions that have expanded our understanding of the universe, our solar system, and our own planet. These missions include sending astronauts to the Moon, exploring the surface of Mars, studying Earth's climate, and looking deep into the universe with telescopes like Hubble. NASA continues to push the boundaries of what is possible, aiming to send humans to Mars and beyond in the coming years, fostering a new era of discovery and exploration.
        </p>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-around px-3">
        {epicData && (
          <div className="card m-2 position-relative" style={{ width: "24rem" }}>
            <img className="card-img-top" src={`https://api.nasa.gov/EPIC/archive/natural/${epicData.date.slice(0, 10).replace(/-/g, '/')}/png/${epicData.image}.png?api_key=${process.env.REACT_APP_SECRET_KEY}`} alt={epicData.caption} style={{ height: '250px', objectFit: 'cover' }} />
            <div className="card-body text-center">
              <h5 className="card-title">{epicData.caption}</h5>
              <p className="card-text">{data.explanation}</p>
              <p className="card-text"><small className="text-muted">Date: {epicData.date}</small></p>
            </div>
            <span className="badge bg-dark position-absolute" style={{ bottom: '10px', left: '10px' }}>NASA</span>
          </div>
        )}
        {data && (
          <div className="card m-2 position-relative" style={{ width: "24rem" }}>
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              <img className="card-img-top" src={data.url} alt={data.title} style={{ objectFit: 'cover', height: '250px' }} />
            </a>
            <div className="card-body text-center">
              <h1>Photo of the Day</h1>
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.explanation}</p>
              <p className="card-text"><small className="text-muted">Date: {data.date}</small></p>
            </div>
            <span className="badge bg-dark position-absolute" style={{ bottom: '10px', left: '10px' }}>NASA</span>
          </div>
        )}
        {marsData && (
          <Link to="/mars" className="card m-2 position-relative" style={{ width: "24rem" }}>
            <img className="card-img-top" src={marsData.img_src} alt={marsData.camera.full_name} style={{ height: '250px', objectFit: 'cover' }} />
            <div className="card-body text-center">
              <h1>Mars Rover Photos</h1>
              <h5 className="card-title">{marsData.camera.full_name}</h5>
              <p className="card-text">{data.explanation}</p>
              <p className="card-text"><small className="text-muted">Date: {marsData.earth_date}</small></p>
            </div>
            <span className="badge bg-dark position-absolute" style={{ bottom: '10px', left: '10px' }}>NASA</span>
          </Link>
        )}
      </div>
      <div>
        <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer" className="btn btn-primary m-24">Visit NASA</a>
      </div>
    </div>
  );
}

export default Homepage;