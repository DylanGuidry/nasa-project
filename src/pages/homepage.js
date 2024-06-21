import React, { useEffect, useState } from 'react';
import space from '../images/polar-lights-5858656_1920.jpg';
import { Link } from 'react-router-dom';

function Homepage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_SECRET_KEY}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <img className="m-7 rounded-lg shadow-lg w-11/12 h-64 object-cover object-center " src={space} alt="space" /> {/* Adjusted image size, border radius and shadow */}
      {data && (
        <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-500 ease-in-out">
        <h1 className="text-5xl font-bold mb-4 text-black">Picture of the Day</h1>
          <img className="mx-auto h-48 w-48 object-cover" src={data.url} alt={data.title} /> {/* Adjusted image size and position */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{data.title}</h2>
          <h3 className="mt-2 text-center text-xl text-gray-600">Date: {data.date}</h3>
          <p className="mt-2 text-center text-sm text-gray-600">{data.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default Homepage;