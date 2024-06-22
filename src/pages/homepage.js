import React, { useEffect, useState } from 'react';
import space from '../images/polar-lights-5858656_1920.jpg';
import { Link } from 'react-router-dom';

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
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-lg font-semibold inline-block mx-1 animate-pulse">
        🚀 Loading Space Data
          <span className="inline-block mx-1 animate-pulse">.</span>
          <span className="inline-block mx-1 animate-pulse delay-150">.</span>
          <span className="inline-block mx-1 animate-pulse delay-300">.</span>
        </div>
      </div>
    );
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img className="m-7 rounded-lg shadow-lg w-11/12 h-64 object-cover object-center " src={space} alt="space" />
      <div className="flex flex-row items-stretch justify-between px-4 md:px-12 lg:px-24">
        {data && (
          <div className="max-w-md w-full h-full space-y-8 bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-500 ease-in-out mx-4">
            <h1 className="text-5xl font-bold mb-4 text-black">Picture of the Day</h1>
            <img className="mx-auto h-64 w-100 object-cover" src={data.url} alt={data.title} />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{data.title}</h2>
            <h3 className="mt-2 text-center text-xl text-gray-600">Date: {data.date}</h3>
            <p className="mt-2 text-center text-sm text-gray-600">{data.explanation}</p>
          </div>
        )}
        {epicData && (
          <div className="max-w-md w-full h-full space-y-8 bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-500 ease-in-out mx-4">
            <h1 className="text-5xl h-40 font-bold mb-4 text-black flex justify-center">EPIC Picture</h1>
            <img className="mx-auto h-64 w-100 object-cover" src={`https://api.nasa.gov/EPIC/archive/natural/${epicData.date.slice(0,10).replace(/-/g, '/')}/png/${epicData.image}.png?api_key=${process.env.REACT_APP_SECRET_KEY}`} alt={epicData.caption} />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{epicData.caption}</h2>
            <h3 className="mt-2 text-center text-xl text-gray-600">Date: {epicData.date}</h3>
          </div>
        )}
        {marsData && (
          <Link to="/mars">
          <div className="max-w-md w-full h-full space-y-8 bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-500 ease-in-out mx-4">
            <h1 className="text-5xl font-bold mb-4 flex justify-center text-black">Mars Rover</h1>
            <img className="mx-auto h-64 w-100 object-cover" src={marsData.img_src} alt={marsData.camera.full_name} />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{marsData.camera.full_name}</h2>
            <h3 className="mt-2 text-center text-xl text-gray-600">Date: {marsData.earth_date}</h3>
          </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Homepage;