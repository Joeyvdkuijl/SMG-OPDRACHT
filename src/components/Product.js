import React from 'react';
const setScoreColorClass = (score) => {
    if(score >= 9.5) {
      return 'green';
    } else if (score >= 9) {
      return 'orange';
    } else {
      return 'red';
    }
  }
  
  
  const isScoreEmpty = (score) => {
    if(score == null){
       return 0.25;
    } else{
      return score
    }
  }
const Product = ({id, score, price, name, meta}) => (
    <>

                <div className="overview" key={id}>
                  {/* <img key={item.id} src={item.images[1].original} alt={item.title}></img> */}
                  <div className="overview-info">
                   <p className={`tag ${setScoreColorClass(score)}`}> 
                    {isScoreEmpty(score)}</p>
                  </div>
                  <h1>{name}</h1>
                   <h3 className="price-product">${price}</h3>
                   <p>{meta}</p>
                 </div>
       </> 
)

export default Product;