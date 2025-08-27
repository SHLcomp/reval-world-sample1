// import { useEffect } from 'react';
import './Customers.scss';
import data from '../../data/targetedCustomers';
import { Link } from 'react-router-dom';

export const Customers = () => {
  
  return (
    <div className='cust'>
      <h1 className='ar chooseAnim'>العملاء المستهدفين</h1>
      <h1 className='en chooseAnim'>Our Targeted Customers</h1>
      <div className="cont">
        {data.map((i, index) => (
          <div key={index} className="item chooseAnim">
            <div className="info enDes">
              <h5>{i.enName}</h5>
            </div>
            <div className="info arDes">
              <h5>{i.arName}</h5>
            </div>
          </div>
        ))}
      </div>
      <Link className='a' to='/contact'>
        <h5 className="ctaH5 chooseAnim">Contact Us</h5>
      </Link>
    </div>
  );
};

export default Customers;
