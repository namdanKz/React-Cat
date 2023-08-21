
import React, { useEffect, useState } from 'react';

const CatPage: React.FC = () => {
  const [catImage, setCatImage] = useState(null);
  
  /*
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?format=json')
      .then(response => response.json())
      .then(data => {
        if (data[0].url) {
          setCatImage(data[0].url);
        }
      })
      .catch(error => {
        console.error("Error fetching cat image:", error);
      });
  }, []);
  */

  const fetchCatImage = () => {
    fetch('https://api.thecatapi.com/v1/images/search?format=json')
      .then(response => response.json())
      .then(data => {
        if (data.length > 0 && data[0].url) {
          setCatImage(data[0].url);
        }
      })
      .catch(error => {
        console.error("Error fetching cat image:", error);
      });
  };

  useEffect(() => {
    fetchCatImage();
  }, []); 
  return (
    <div className="App">
      {catImage ? (
        <div>
          <img src={catImage} alt="Random Cat"/>
        </div>
      ) : (
        <p>Loading cat image...</p>
      )}
      <button onClick={fetchCatImage}>New Cat</button>
    </div>
  );
}

export default CatPage;


  

