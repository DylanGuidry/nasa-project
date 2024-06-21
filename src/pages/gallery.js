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
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="relative">
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} className="h-10 pl-5 pr-10 rounded-full text-sm focus:outline-none" placeholder="Search..."/>
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{enableBackground: 'new 0 0 56.966 56.966'}} xmlSpace="preserve">
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M22.982,42c-10.477,0-19-8.523-19-19s8.523-19,19-19  s19,8.523,19,19S33.459,42,22.982,42z"/>
            </svg>
          </button>
        </div>
      </form>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          image.links ? 
          <div key={index} className="p-5 flex flex-col items-center border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-200 rounded-lg">
            <img src={image.links[0].href} alt="NASA" className="w-64 h-64 object-cover rounded-t-lg" />
            <p className="mt-2 text-center p-4">{image.data[0].title}</p>
          </div> 
          : null
        ))}
      </div>
    </div>
  );
}

export default Gallery;