import './Products.scss';
import data from '../../data/products';

const Products = () => {
  return (
    <div className='prod'>
      <div className="container">
      
        <div className="item text">
        <div className="txt">
          <h1 className='ar'>منتجاتنا</h1>
          <h1 className='en'>Our Products</h1>
        </div>
        
        </div>

          {data.map((item)=>{
            return (
              <div className="prod-item">
                <h3>{item.displayName}</h3>
                <img src={item.img} alt={item.displayName} />
                <p>{item.des}</p>
                
              </div>
            )
          })}

      </div>

    </div>
  )
}

export default Products
