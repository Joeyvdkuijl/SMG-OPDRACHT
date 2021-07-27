import React, {useEffect, useState} from 'react';
import Product from "./components/Product";
// import { useState } from 'react';

// const IMG_API = "https://staging.api.specialmoments.group/api/rooms";

const FEATURED_API = "https://staging.api.specialmoments.group/api/rooms";

const SEARCH_API = "https://staging.api.specialmoments.group/api/rooms";

function App() {

  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchterm] = useState([]);

  useEffect( () => {
    fetch(FEATURED_API)
    .then(res => res.json())
    .then(json => {
        console.log(json);
        setProduct(json.data);
    });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){

        fetch(SEARCH_API + searchTerm)
        .then(res => res.json())
        .then(json => {
          console.log(json);
          setProduct(json.data);
        });
  
      setSearchterm('');
      }
  };

  const handleOnChange = (e) => {
    setSearchterm(e.target.value);
  };

  return <div>
            <header>
              <form onSubmit={handleOnSubmit}>
                <input className="search" type="search" placeholder="Search..." value={searchTerm} onChange={handleOnChange}/>
             </form>
           </header>
           <div className="overview-container">
         {product.length > 0 && product.map((product) =>
         <Product key={product.id} {...product} />
         )}
         </div>
       </div>
  }
export default App;