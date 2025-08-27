import React from 'react'
import data from '../../data/products'
import './Products2.scss'; 
import { Link } from 'react-router-dom';

export const Products2 = () => {
  return (
    <div className='products2' id='prod'>

       <div className="item text">
        <div className="txt">
          <h1 className='ar chooseAnim'>منتجاتنا</h1>
          <h1 className='en chooseAnim'>Our Products</h1>
        </div>
        
        </div>
        
        <div className="container">
          {data.map((item)=>{
            return (
              <div className="prod chooseAnim">
                <h3>{item.displayName}</h3>
                <div className="prod-bg"></div>
                <p>View </p>
                
              </div>
            )
          })}
        </div>
          <Link className='a' to='/products'><h5 className='ctaH5 chooseAnim'>View All <i className="fa-solid fa-arrow-right"></i></h5></Link>
    </div>
  )
}
export default Products2;
