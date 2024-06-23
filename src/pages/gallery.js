import React, { useState } from 'react';

function Gallery() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://images-api.nasa.gov/search?q=${search}`)
      .then(response => response.json())
      .then(data => {
        if (data.collection) {
          setImages(data.collection.items);
        } else {
          setImages([]);
        }
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mt-10 mb-8">Search For A Photo</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} className="h-10 pl-5 pr-20 rounded-full text-sm focus:outline-none border-2 border-gray-300 focus:border-blue-500 transition-colors" placeholder="Search..."/>
          <button type="submit" className="absolute right-0 top-0 mt-2.5 mr-4">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 56.966 56.966">
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M22.982,42c-10.477,0-19-8.523-19-19s8.523-19,19-19  s19,8.523,19,19S33.459,42,22.982,42z"/>
            </svg>
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        image.links ? 
        <div key={index} className="bg-white p-5 flex flex-col items-center border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg relative">
          {image.links[0].href.endsWith('.mp4') ? 
            <video src={image.links[0].href} controls className="w-full h-64 object-cover rounded-t-lg" /> :
            <img src={image.links[0].href} alt="NASA" className="w-full h-64 object-cover rounded-t-lg" />
          }
          <p className="mt-2 text-center font-semibold p-2">{image.data[0].title}</p>
          <p className="text-center text-sm p-2">{image.data[0].description || 'No description available.'}</p>
          <span className="badge bg-dark position-absolute" style={{bottom: '10px', left: '10px'}}>NASA</span>
        </div> : null
      ))}
      </div>
    </div>
  );
}

export default Gallery;