import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';

export default function Product() {
   return (
      <div className='product'>
         <div className='productContainer'>
            <h1 className='productTitle'>Product</h1>
            <Link to='/newProduct'>
               <button className='productCreateButton'>Create</button>
            </Link>
         </div>
         <div className='productTop'>
            <div className='productLeft'>
               <Chart
                  data={productData}
                  dataKey='Sales'
                  title='Sales Perfomance'
               />
            </div>
            <div className='productRigth'>
               <div className='productInfoTop'>
                  <img
                     src='https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600'
                     alt=''
                     className='productInfoImg'
                  />
                  <span className='productName'>iPhone</span>
               </div>
               <div className='productInfoBottom'></div>
            </div>
         </div>
         <div className='productBottom'></div>
      </div>
   );
}
